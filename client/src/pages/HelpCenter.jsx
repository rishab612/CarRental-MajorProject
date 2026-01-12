import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
    BookOpen, Car, CreditCard, FileText, Shield, MapPin,
    AlertCircle, User, HelpCircle, Phone, Mail, ChevronDown,
    Search, Clock, CheckCircle
} from 'lucide-react';

const HelpCenter = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        { q: "Do I need a credit card to book?", a: "No, you can pay using UPI, debit cards, credit cards, or digital wallets via Razorpay." },
        { q: "Can someone else drive the car?", a: "No, only the person whose driving license is verified can drive the rented vehicle. Unauthorized drivers violate our terms." },
        { q: "Is fuel included in the rental?", a: "No, fuel is not included. The vehicle will be provided with a specific fuel level, and it must be returned at the same level." },
        { q: "Can I extend my booking?", a: "Yes, you can extend your booking by contacting support, subject to vehicle availability and additional charges." },
        { q: "What if the car breaks down?", a: "Contact our 24/7 emergency support immediately at +91 8708313673. Roadside assistance will be provided." },
        { q: "How do I cancel my booking?", a: "Go to 'My Bookings', select the booking, and click 'Cancel'. Refund policies apply based on cancellation timing." },
        { q: "What happens if I return the car late?", a: "Late returns incur additional hourly or daily charges as per our pricing policy." },
        { q: "Can I change my pickup location?", a: "Changes to pickup location may be possible if requested at least 24 hours in advance, subject to availability." }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pb-20 pt-28">
            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <span className="bg-green-100 text-green-600 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider">
                        Support & Assistance
                    </span>
                    <h1 className="text-5xl font-bold text-gray-900 mt-6 mb-4">
                        Help Center
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Find answers to common questions, learn how to use Zoom Ride, and get the support you need.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search for help articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-lg"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Main Content */}
            <section className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

                    {/* Quick Help Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer"
                    >
                        <BookOpen className="w-10 h-10 text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Getting Started</h3>
                        <p className="text-gray-600 text-sm">Learn the basics of using Zoom Ride</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer"
                    >
                        <Car className="w-10 h-10 text-green-500 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Booking a Car</h3>
                        <p className="text-gray-600 text-sm">Step-by-step booking guidance</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer"
                    >
                        <CreditCard className="w-10 h-10 text-purple-500 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Payments</h3>
                        <p className="text-gray-600 text-sm">Payment methods and security</p>
                    </motion.div>
                </div>

                {/* Detailed Help Sections */}
                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-12">

                    {/* 1. Getting Started */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <BookOpen className="w-8 h-8 text-blue-500 mr-3" />
                            1. Getting Started
                        </h2>
                        <div className="space-y-4">
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h4 className="font-bold text-gray-800 mb-2">What is Zoom Ride?</h4>
                                <p className="text-gray-600">Zoom Ride is a premium car rental platform offering a wide range of vehicles for short-term and long-term rentals across major cities in India.</p>
                            </div>
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h4 className="font-bold text-gray-800 mb-2">How to create an account</h4>
                                <p className="text-gray-600">Click 'Sign Up', provide your name, email, and phone number. Verify your email and you're ready to book!</p>
                            </div>
                            <div className="border-l-4 border-blue-500 pl-4">
                                <h4 className="font-bold text-gray-800 mb-2">Age and License Requirements</h4>
                                <p className="text-gray-600">You must be <strong>18+ years old</strong> and hold a <strong>valid driving license</strong> issued by a recognized authority in India.</p>
                            </div>
                        </div>
                    </div>

                    {/* 2. Booking a Car */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <Car className="w-8 h-8 text-green-500 mr-3" />
                            2. Booking a Car
                        </h2>
                        <ol className="list-decimal list-inside text-gray-600 space-y-3">
                            <li><strong>Search:</strong> Enter your city, pickup date, and return date</li>
                            <li><strong>Select:</strong> Browse available cars and choose one that fits your needs</li>
                            <li><strong>Fill Details:</strong> Enter personal information and upload license images</li>
                            <li><strong>Choose Insurance:</strong> Select from Basic, Standard, or Zero Dep coverage</li>
                            <li><strong>Pay:</strong> Complete payment via Razorpay (UPI, cards, wallets)</li>
                            <li><strong>Confirm:</strong> Receive booking confirmation and invoice via email</li>
                        </ol>
                        <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-700"><strong>Why booking may fail:</strong> Invalid payment, license verification failed, or vehicle no longer available.</p>
                        </div>
                    </div>

                    {/* 3. Payments & Billing */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <CreditCard className="w-8 h-8 text-purple-500 mr-3" />
                            3. Payments & Billing
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-5 rounded-xl">
                                <h4 className="font-bold text-gray-800 mb-2">Supported Payment Methods</h4>
                                <ul className="text-gray-600 space-y-1 text-sm">
                                    <li>✓ UPI (GPay, PhonePe, Paytm)</li>
                                    <li>✓ Credit & Debit Cards</li>
                                    <li>✓ Digital Wallets</li>
                                    <li>✓ Net Banking</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-5 rounded-xl">
                                <h4 className="font-bold text-gray-800 mb-2">Payment Security</h4>
                                <p className="text-gray-600 text-sm">All payments are processed via <strong>Razorpay</strong>, which is PCI-DSS certified. Your card details are never stored on our servers.</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mt-4"><strong>When is payment deducted?</strong> Payment is charged immediately upon booking confirmation.</p>
                    </div>

                    {/* 4. Invoices */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <FileText className="w-8 h-8 text-orange-500 mr-3" />
                            4. Invoices & Receipts
                        </h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Invoice is generated immediately after successful payment</li>
                            <li>Download from "My Bookings" section or check your email</li>
                            <li>If invoice shows "pending", refresh the page or contact support</li>
                            <li>Report invoice errors within 7 days of booking</li>
                        </ul>
                    </div>

                    {/* 5. License Verification */}
                    <div className="bg-blue-50 p-6 rounded-2xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <Shield className="w-8 h-8 text-blue-500 mr-3" />
                            5. Driving License Verification
                        </h2>
                        <div className="space-y-4">
                            <p className="text-gray-700"><strong>Why is it required?</strong> To ensure you are legally eligible to drive and to comply with Motor Vehicles Act regulations.</p>
                            <p className="text-gray-700"><strong>Accepted licenses:</strong> Valid Indian driving license (permanent or temporary with valid date).</p>
                            <p className="text-gray-700"><strong>Upload process:</strong> Capture or upload clear images of the front and back of your license. Our system uses OCR for quick verification.</p>
                            <p className="text-red-600 font-medium">If verification fails, check image quality, ensure license is valid, or contact support for manual verification.</p>
                        </div>
                    </div>

                    {/* 6. Pickup & Return */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <MapPin className="w-8 h-8 text-red-500 mr-3" />
                            6. Pickup & Return
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-bold text-gray-800 mb-2">What to carry</h4>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>Original driving license</li>
                                    <li>Government-issued ID (Aadhaar, Passport, PAN)</li>
                                    <li>Booking confirmation</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 mb-2">Vehicle Inspection</h4>
                                <p className="text-gray-600">Inspect the car for existing damage before pickup. Report any issues to avoid disputes later.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 mb-2">Late Return Policy</h4>
                                <p className="text-gray-600">Late returns incur hourly charges. Repeated violations may result in account suspension.</p>
                            </div>
                        </div>
                    </div>

                    {/* 7. Insurance & Safety */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <Shield className="w-8 h-8 text-green-500 mr-3" />
                            7. Insurance & Safety
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-gray-800 mb-3">✅ Covered</h4>
                                <ul className="text-gray-600 space-y-1 text-sm">
                                    <li>Third-party liability</li>
                                    <li>Collision Damage Waiver (CDW)</li>
                                    <li>Theft protection</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 mb-3">❌ NOT Covered</h4>
                                <ul className="text-gray-600 space-y-1 text-sm">
                                    <li>Drunk driving</li>
                                    <li>Unauthorized usage</li>
                                    <li>Off-road or racing</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6 bg-red-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-700"><strong>Emergency Support:</strong> Call +91 8708313673 for 24/7 roadside assistance.</p>
                        </div>
                    </div>

                    {/* 8. Cancellations & Refunds */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <Clock className="w-8 h-8 text-orange-500 mr-3" />
                            8. Cancellations & Refunds
                        </h2>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-800">Free Cancellation</p>
                                    <p className="text-gray-600 text-sm">More than 48 hours before pickup - 100% refund</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <AlertCircle className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-800">Partial Refund</p>
                                    <p className="text-gray-600 text-sm">24-48 hours before pickup - 50% refund</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-gray-800">No Refund</p>
                                    <p className="text-gray-600 text-sm">Less than 24 hours or no-show - No refund</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 mt-4">Refunds are processed within 7-10 business days to the original payment method.</p>
                    </div>

                    {/* 9. Charges & Penalties */}
                    <div className="bg-red-50 p-6 rounded-2xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            9. Charges & Penalties
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong>Late return:</strong> ₹200-500 per hour (varies by vehicle)</li>
                            <li><strong>Damage:</strong> Assessed based on repair costs, may deduct from security deposit</li>
                            <li><strong>Traffic fines:</strong> User is responsible for all fines incurred during rental</li>
                            <li><strong>Cleaning fees:</strong> ₹500-1000 if returned excessively dirty</li>
                            <li><strong>Lost keys:</strong> ₹2000-5000 replacement charge</li>
                        </ul>
                    </div>

                    {/* 10. Account & Profile */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <User className="w-8 h-8 text-purple-500 mr-3" />
                            10. Account & Profile
                        </h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Update personal details from "Profile" section</li>
                            <li>Change email/phone by verifying new contact</li>
                            <li>Reset password via "Forgot Password" link</li>
                            <li>Request account deletion by contacting support (data will be retained as per legal requirements)</li>
                        </ul>
                    </div>

                    {/* 11. Troubleshooting */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <AlertCircle className="w-8 h-8 text-yellow-500 mr-3" />
                            11. Troubleshooting
                        </h2>
                        <div className="space-y-3">
                            {[
                                { issue: "App/website not loading", fix: "Clear cache, check internet, try different browser" },
                                { issue: "Payment deducted but booking failed", fix: "Contact support with transaction ID, refund will be initiated" },
                                { issue: "Invoice not downloading", fix: "Try from desktop, check email, or request resend" },
                                { issue: "License upload error", fix: "Ensure images are clear, less than 5MB, JPG/PNG format" },
                                { issue: "Booking status stuck", fix: "Refresh page, log out/in, or contact support" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                                    <p className="font-bold text-gray-800 mb-1">{item.issue}</p>
                                    <p className="text-gray-600 text-sm">{item.fix}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 12. Contact Support */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            12. Contact Support
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <Mail className="w-8 h-8 text-blue-500 mb-3" />
                                <h4 className="font-bold text-gray-800 mb-2">Email Support</h4>
                                <a href="mailto:zoomriders@gmail.com" className="text-blue-600 hover:underline">zoomriders@gmail.com</a>
                                <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <Phone className="w-8 h-8 text-green-500 mb-3" />
                                <h4 className="font-bold text-gray-800 mb-2">Phone Support</h4>
                                <a href="tel:+918708313673" className="text-green-600 hover:underline">+91 8708313673</a>
                                <p className="text-sm text-gray-500 mt-2">Mon-Sun: 9 AM - 9 PM</p>
                            </div>
                        </div>
                        <div className="mt-6 bg-red-100 p-4 rounded-lg">
                            <p className="text-red-800 font-medium">🚨 <strong>24/7 Emergency:</strong> Call +91 8708313673 for accidents or breakdowns</p>
                        </div>
                    </div>

                    {/* 13. Legal & Policies */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            13. Legal & Policies
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <a href="/tos" className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors text-center">
                                <FileText className="w-6 h-6 mx-auto mb-2 text-gray-700" />
                                <p className="text-sm font-medium text-gray-800">Terms of Service</p>
                            </a>
                            <a href="/privacy" className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors text-center">
                                <Shield className="w-6 h-6 mx-auto mb-2 text-gray-700" />
                                <p className="text-sm font-medium text-gray-800">Privacy Policy</p>
                            </a>
                            <a href="/insurance" className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors text-center">
                                <Shield className="w-6 h-6 mx-auto mb-2 text-gray-700" />
                                <p className="text-sm font-medium text-gray-800">Insurance Policy</p>
                            </a>
                            <div className="bg-gray-100 p-4 rounded-lg text-center opacity-75">
                                <FileText className="w-6 h-6 mx-auto mb-2 text-gray-700" />
                                <p className="text-sm font-medium text-gray-800">Refund Policy</p>
                            </div>
                        </div>
                    </div>

                    {/* 14. FAQs */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <HelpCircle className="w-8 h-8 text-blue-500 mr-3" />
                            14. Frequently Asked Questions
                        </h2>
                        <div className="space-y-3">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="font-medium text-gray-800 text-left">{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                                    </button>
                                    {openFaq === idx && (
                                        <div className="px-4 pb-4 text-gray-600 bg-gray-50">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default HelpCenter;
