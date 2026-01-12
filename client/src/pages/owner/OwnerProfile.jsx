import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import axios from 'axios'
import toast from 'react-hot-toast'
import { assets } from '../../assets/assets'

const OwnerProfile = () => {

    const { user, backendUrl, token, setUser, fetchUser } = useAppContext()

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (user) {
            setName(user.name)
        }
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const formData = new FormData()
            formData.append('name', name)
            if (password) formData.append('password', password)
            if (image) formData.append('image', image)

            const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, {
                headers: { token }
            })

            if (data.success) {
                toast.success(data.message)
                await fetchUser() // Refresh user data
                setPassword('') // Clear password field
                setImage(false)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
        setLoading(false)
    }

    return (
        <div className='min-h-screen bg-gray-50 p-6 sm:p-10'>
            <div className='max-w-xl mx-auto'>
                <h1 className='text-3xl font-bold text-gray-800 mb-8'>My Profile</h1>

                <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-8'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-6'>

                        {/* Image Upload */}
                        <div className='flex flex-col items-center gap-4 mb-4'>
                            <label htmlFor="image-upload" className='cursor-pointer group relative'>
                                <div className='w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm'>
                                    <img
                                        className='w-full h-full object-cover'
                                        src={image ? URL.createObjectURL(image) : (user?.image || assets.user_profile)}
                                        alt="Profile"
                                    />
                                    <div className='absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all'>
                                        <img src={assets.upload_icon} className='w-8 h-8 opacity-80' alt="" />
                                    </div>
                                </div>
                                <input
                                    type="file"
                                    id='image-upload'
                                    hidden
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </label>
                            <span className='text-xs text-gray-500'>Click to change profile picture</span>
                        </div>

                        {/* Name Field */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>Full Name</label>
                            <input
                                type="text"
                                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        {/* Email Field (Readonly) */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>Email Address</label>
                            <input
                                type="email"
                                className='w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed outline-none'
                                value={user?.email || ''}
                                readOnly
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>New Password</label>
                            <input
                                type="password"
                                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all'
                                placeholder="Leave blank to keep current password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                minLength={8}
                            />
                            <p className='text-xs text-gray-400 mt-1'>Must be at least 8 characters long</p>
                        </div>

                        <div className='flex justify-end pt-4'>
                            <button
                                type="submit"
                                disabled={loading}
                                className='bg-primary hover:bg-primary-dull text-white px-8 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto'
                            >
                                {loading ? 'Updating...' : 'Save Changes'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OwnerProfile
