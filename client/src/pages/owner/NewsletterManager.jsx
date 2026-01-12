import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import axios from 'axios'
import toast from 'react-hot-toast'
import { assets } from '../../assets/assets'

const NewsletterManager = () => {

    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const { backendUrl, token } = useAppContext()

    const [loading, setLoading] = useState(false)

    const handleSend = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const { data } = await axios.post(backendUrl + '/api/newsletter/send',
                { subject, message },
                { headers: { token } }
            )

            if (data.success) {
                toast.success(data.message)
                setSubject('')
                setMessage('')
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
            <div className='max-w-4xl mx-auto'>
                <div className='flex items-center gap-3 mb-8'>
                    <img src={assets.gmail_logo} alt="" className='w-8' />
                    <h1 className='text-2xl font-bold text-gray-800'>Newsletter Manager</h1>
                </div>

                <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8'>
                    <form onSubmit={handleSend} className='flex flex-col gap-6'>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>Email Subject</label>
                            <input
                                type="text"
                                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all'
                                placeholder="Enter newsletter subject..."
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>Message Content</label>
                            <textarea
                                rows="10"
                                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none'
                                placeholder="Write your newsletter content here..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>

                        <div className='flex justify-end pt-4'>
                            <button
                                type="submit"
                                disabled={loading}
                                className='bg-primary hover:bg-primary-dull text-white px-8 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2'
                            >
                                {loading ? (
                                    <>Sending...</>
                                ) : (
                                    <>Send Newsletter</>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewsletterManager
