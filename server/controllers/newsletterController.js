import newsletterModel from "../models/newsletterModel.js";
import nodemailer from 'nodemailer';

// Subscribe to newsletter
export const subscribe = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.json({ success: false, message: 'Email is required' });
        }

        // Check if already subscribed
        const existing = await newsletterModel.findOne({ email });
        if (existing) {
            return res.json({ success: false, message: 'Email already subscribed' });
        }

        const newSubscriber = new newsletterModel({ email });
        await newSubscriber.save();

        res.json({ success: true, message: 'Subscribed successfully' });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Send newsletter to all subscribers
export const sendNewsletter = async (req, res) => {
    try {
        const { subject, message } = req.body;

        if (!subject || !message) {
            return res.json({ success: false, message: 'Subject and message are required' });
        }

        const subscribers = await newsletterModel.find({});
        const emails = subscribers.map(sub => sub.email);

        if (emails.length === 0) {
            return res.json({ success: false, message: 'No subscribers found' });
        }

        // Check for SMTP credentials
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS || process.env.SMTP_PASS === 'your_app_password_here') {
             return res.json({ success: false, message: 'SMTP credentials not not configured in server/.env' });
        }

        // Create transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        console.log(`--- Sending Newsletter from ${process.env.SMTP_USER} ---`);
        
        // Send mail to each subscriber
        // For bulk sending, using BCC is better or send individually in loop
        // Here we send individually to avoid exposing other emails
        
        await Promise.all(emails.map(email => 
            transporter.sendMail({
                from: `"Zoom Ride" <${process.env.SMTP_USER}>`,
                to: email,
                subject: subject,
                text: message,
                html: `<div style="font-family: Arial, sans-serif; color: #333;">
                        <h2 style="color: #f05a28;">Zoom Ride Update</h2>
                        <p>${message.replace(/\n/g, '<br>')}</p>
                        <hr>
                        <p style="font-size: 12px; color: #777;">You received this email because you subscribed to Zoom Ride newsletter.</p>
                       </div>`,
            })
        ));

        console.log("Messages sent to:", emails.length, "subscribers");
        console.log('----------------------------------------------------');

        res.json({ 
            success: true, 
            message: `Newsletter sent successfully to ${emails.length} subscribers.`
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to send email. Check credentials." });
    }
};
