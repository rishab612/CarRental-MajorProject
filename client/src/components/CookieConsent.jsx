import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { assets } from '../assets/assets'

const CookieConsent = ({ openSettings, setOpenSettings }) => {
    const [showBanner, setShowBanner] = useState(false)
    const [preferences, setPreferences] = useState({
        essential: true, // Always true
        analytics: false,
        marketing: false
    })

    useEffect(() => {
        const savedPrefs = localStorage.getItem('cookiePreferences')
        if (!savedPrefs) {
            // Short delay for better UX
            const timer = setTimeout(() => setShowBanner(true), 1000)
            return () => clearTimeout(timer)
        } else {
            setPreferences(JSON.parse(savedPrefs))
        }
    }, [])

    const handleAcceptAll = () => {
        const allTrue = { essential: true, analytics: true, marketing: true }
        setPreferences(allTrue)
        savePreferences(allTrue)
    }

    const handleAcceptEssential = () => {
        const essentialOnly = { essential: true, analytics: false, marketing: false }
        setPreferences(essentialOnly)
        savePreferences(essentialOnly)
    }

    const handleSavePreferences = () => {
        savePreferences(preferences)
    }

    const savePreferences = (prefs) => {
        localStorage.setItem('cookiePreferences', JSON.stringify(prefs))
        setShowBanner(false)
        setOpenSettings(false)
    }

    const togglePreference = (key) => {
        if (key === 'essential') return
        setPreferences(prev => ({ ...prev, [key]: !prev[key] }))
    }

    return (
        <>
            {/* Bottom Banner */}
            <AnimatePresence>
                {showBanner && !openSettings && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className='fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 p-6 md:px-16 lg:px-24 xl:px-32'
                    >
                        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
                            <div className='flex-1'>
                                <h3 className='text-lg font-semibold text-gray-800 mb-2'>We value your privacy</h3>
                                <p className='text-gray-600 text-sm leading-relaxed'>
                                    We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.
                                    By clicking "Accept All", you consent to our use of cookies.
                                </p>
                            </div>
                            <div className='flex flex-wrap gap-4 items-center'>
                                <button
                                    onClick={() => setOpenSettings(true)}
                                    className='text-gray-600 hover:text-gray-900 font-medium text-sm underline underline-offset-4'
                                >
                                    Customize
                                </button>
                                <button
                                    onClick={handleAcceptEssential}
                                    className='px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 font-medium transition-colors sm:w-auto w-full'
                                >
                                    Reject All
                                </button>
                                <button
                                    onClick={handleAcceptAll}
                                    className='px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-dull text-white font-medium shadow-md hover:shadow-lg transition-all sm:w-auto w-full'
                                >
                                    Accept All
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Preferences Modal */}
            <AnimatePresence>
                {openSettings && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4'
                        onClick={() => !showBanner && setOpenSettings(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className='bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className='p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10'>
                                <h2 className='text-xl font-bold text-gray-800'>Cookie Preferences</h2>
                                <button onClick={() => setOpenSettings(false)} className='w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100'>
                                    <img src={assets.close_icon || 'x'} alt="close" className='w-4 h-4' />
                                </button>
                            </div>

                            <div className='p-6 space-y-6'>
                                <p className='text-gray-600 text-sm'>
                                    When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies.
                                    Here you can change your preferences.
                                </p>

                                {/* Essential */}
                                <div className='flex items-start justify-between p-4 bg-gray-50 rounded-xl'>
                                    <div>
                                        <div className='flex items-center gap-2 mb-1'>
                                            <h4 className='font-semibold text-gray-800'>Strictly Necessary</h4>
                                            <span className='text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full'>Required</span>
                                        </div>
                                        <p className='text-xs text-gray-500'>These cookies are necessary for the website to function and cannot be switched off.</p>
                                    </div>
                                    <div className="relative inline-flex items-center cursor-not-allowed opacity-60">
                                        <input type="checkbox" className="sr-only peer" checked disabled />
                                        <div className="w-11 h-6 bg-blue-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300"></div>
                                        <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-full"></span>
                                    </div>
                                </div>

                                {/* Analytics */}
                                <div className='flex items-start justify-between p-4 border border-gray-100 rounded-xl hover:border-gray-200 transition-colors'>
                                    <div>
                                        <h4 className='font-semibold text-gray-800 mb-1'>Analytics</h4>
                                        <p className='text-xs text-gray-500'>Allow us to count visits and traffic sources so we can measure and improve the performance of our site.</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={preferences.analytics}
                                            onChange={() => togglePreference('analytics')}
                                        />
                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-600 transition-colors"></div>
                                        <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-full"></span>
                                    </label>
                                </div>

                                {/* Marketing */}
                                <div className='flex items-start justify-between p-4 border border-gray-100 rounded-xl hover:border-gray-200 transition-colors'>
                                    <div>
                                        <h4 className='font-semibold text-gray-800 mb-1'>Marketing</h4>
                                        <p className='text-xs text-gray-500'>Used by our advertising partners to build a profile of your interests and show you relevant adverts on other sites.</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={preferences.marketing}
                                            onChange={() => togglePreference('marketing')}
                                        />
                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:bg-blue-600 transition-colors"></div>
                                        <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-full"></span>
                                    </label>
                                </div>
                            </div>

                            <div className='p-6 border-t border-gray-100 flex items-center justify-end gap-3'>
                                <button
                                    onClick={() => setOpenSettings(false)}
                                    className='px-5 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-colors'
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSavePreferences}
                                    className='px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-dull text-white font-medium shadow-md hover:shadow-lg transition-all'
                                >
                                    Save Preferences
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default CookieConsent
