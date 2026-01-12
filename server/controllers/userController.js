import User from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Car from "../models/Car.js";
import imagekit from "../configs/imageKit.js";
import fs from "fs";


// Generate JWT Token
const generateToken = (userId)=>{
    const payload = userId;
    return jwt.sign(payload, process.env.JWT_SECRET)
}

// Register User
export const registerUser = async (req, res)=>{
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password || password.length < 8){
            return res.json({success: false, message: 'Fill all the fields'})
        }

        const userExists = await User.findOne({email})
        if(userExists){
            return res.json({success: false, message: 'User already exists'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({name, email, password: hashedPassword})
        const token = generateToken(user._id.toString())
        res.json({success: true, token})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

// Login User 
export const loginUser = async (req, res)=>{
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.json({success: false, message: "User not found" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.json({success: false, message: "Invalid Credentials" })
        }
        const token = generateToken(user._id.toString())
        res.json({success: true, token})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

// Get User data using Token (JWT)
export const getUserData = async (req, res) =>{
    try {
        const {user} = req;
        res.json({success: true, user})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

// Get All Cars for the Frontend
export const getCars = async (req, res) =>{
    try {
        const cars = await Car.find({isAvaliable: true})
        res.json({success: true, cars})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

// Update User Profile (Name, Image, Password)
export const updateUserProfile = async (req, res) => {
    try {
        const { _id } = req.user;
        const { name, password } = req.body;
        const imageFile = req.file;

        const user = await User.findById(_id);
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        // Update Name
        if (name) user.name = name;

        // Update Password if provided
        if (password && password.length >= 8) {
            const hashedPassword = await bcrypt.hash(password, 10);
            user.password = hashedPassword;
        }

        // Update Image if provided
        if (imageFile) {
            // Upload Image to ImageKit
            const fileBuffer = fs.readFileSync(imageFile.path)
            const response = await imagekit.upload({
                file: fileBuffer,
                fileName: imageFile.originalname,
                folder: '/users'
            })

            // optimization through imagekit URL transformation
            var optimizedImageUrl = imagekit.url({
                path: response.filePath,
                transformation: [
                    { width: '400' }, // Width resizing
                    { quality: 'auto' }, // Auto compression
                    { format: 'webp' }  // Convert to modern format
                ]
            });

            user.image = optimizedImageUrl;
        }

        await user.save();
        res.json({ success: true, message: "Profile Updated Successfully", user });

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}
