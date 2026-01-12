import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Users, FileText, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-20 pt-28">
            {/* Hero Section */}
            <section className="max-w-5xl mx-auto px-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider">
                        Privacy & Data Protection
                    </span>
                    <h1 className="text-5xl font-bold text-gray-900 mt-6 mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Your privacy matters to us. This policy explains how Zoom Ride collects, uses, stores, and protects your personal information when you use our car rental services.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                        <strong>Effective Date:</strong> January 12, 2026
                    </p>
                </motion.div>
            </section>

            {/* Main Content */}
            <section className="max-w-5xl mx-auto px-6">
                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-12">

                    {/* 1. Introduction */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                            <Shield className="w-8 h-8 text-blue-500 mr-3" />
                            1. Introduction
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Welcome to <strong>Zoom Ride</strong>. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website, mobile application, and car rental services. We are committed to ensuring that your privacy is protected and that your personal data is handled responsibly in compliance with applicable laws.
                        </p>
                    </div>

                    {/* 2. Information We Collect */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            2. Information We Collect
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">a) Personal Information</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li>Full name</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Age (to verify eligibility)</li>
                                    <li>Pickup location and address</li>
                                    <li>Driving license details (number and scanned images)</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">b) Payment Information</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li>Razorpay Payment ID</li>
                                    <li>Transaction amount and status</li>
                                    <li className="font-medium text-red-600">❌ We do NOT store credit/debit card details</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">c) Booking Information</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li>Selected car and model</li>
                                    <li>Pickup and return dates</li>
                                    <li>Booking history and status</li>
                                    <li>Insurance plan selected</li>
                                    <li>Invoice and receipt details</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">d) Technical Information</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li>IP address</li>
                                    <li>Device type and operating system</li>
                                    <li>Browser type and version</li>
                                    <li>Cookies and session data</li>
                                    <li>Log files and usage analytics</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 3. How We Use Your Information */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            3. How We Use Your Information
                        </h2>
                        <p className="text-gray-600 mb-4">We collect and use your personal data for the following purposes:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>To process and confirm your car bookings</li>
                            <li>To verify your driving license and ensure legal eligibility</li>
                            <li>To process payments securely via Razorpay</li>
                            <li>To generate invoices and booking confirmations</li>
                            <li>To send booking updates and notifications</li>
                            <li>To provide customer support and respond to inquiries</li>
                            <li>To prevent fraud and ensure platform security</li>
                            <li>To improve our services and user experience</li>
                            <li>To comply with legal and regulatory requirements</li>
                        </ul>
                    </div>

                    {/* 4. Driving License & Identity Verification */}
                    <div className="bg-blue-50 p-6 rounded-2xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                            <FileText className="w-8 h-8 text-blue-500 mr-3" />
                            4. Driving License & Identity Verification
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Your driving license is a critical document for car rental services. Here's how we handle it:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>License images are collected <strong>for verification purposes only</strong></li>
                            <li>Used to ensure you meet legal driving eligibility requirements</li>
                            <li>Stored securely on encrypted servers with restricted access</li>
                            <li>Shared only with legal authorities if required by law or court order</li>
                            <li>License data is retained for legal compliance and deleted after the retention period</li>
                        </ul>
                    </div>

                    {/* 5. Payment Security */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                            <Lock className="w-8 h-8 text-green-500 mr-3" />
                            5. Payment Security
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Your payment security is our top priority. All transactions are processed through <strong>Razorpay</strong>, a PCI-DSS compliant payment gateway.
                        </p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Zoom Ride <strong>does NOT store</strong> your credit/debit card details</li>
                            <li>Razorpay follows industry-standard PCI-DSS security protocols</li>
                            <li>We only store the transaction ID and payment status for record-keeping</li>
                            <li>All payment data is encrypted during transmission</li>
                        </ul>
                    </div>

                    {/* 6. Cookies & Tracking */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            6. Cookies & Tracking Technologies
                        </h2>
                        <p className="text-gray-600 mb-4">We use cookies to enhance your browsing experience:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li><strong>Session Cookies:</strong> To keep you logged in during your visit</li>
                            <li><strong>Analytics Cookies:</strong> To understand how users interact with our platform</li>
                            <li><strong>Preference Cookies:</strong> To remember your settings and preferences</li>
                        </ul>
                        <p className="text-gray-600 mt-4">
                            <strong>Your Control:</strong> You can disable cookies in your browser settings, but this may affect certain functionalities of the website.
                        </p>
                    </div>

                    {/* 7. Data Sharing */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            7. Data Sharing & Third Parties
                        </h2>
                        <p className="text-gray-600 mb-4">We may share your data with trusted third parties under the following circumstances:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li><strong>Payment Gateways:</strong> Razorpay for processing transactions</li>
                            <li><strong>Cloud Storage Providers:</strong> For secure data storage</li>
                            <li><strong>Government Authorities:</strong> When legally required by law or court orders</li>
                            <li><strong>Law Enforcement:</strong> In cases of fraud, theft, or criminal investigations</li>
                        </ul>
                        <p className="text-red-600 font-bold mt-4">
                            ❌ We do NOT sell, rent, or trade your personal data to third parties for marketing purposes.
                        </p>
                    </div>

                    {/* 8. Data Storage & Security */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            8. Data Storage & Security
                        </h2>
                        <p className="text-gray-600 mb-4">We implement industry-standard security measures to protect your data:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Encrypted storage using SSL/TLS protocols</li>
                            <li>Access to data is limited to authorized personnel only</li>
                            <li>Regular security audits and vulnerability assessments</li>
                            <li>Secure servers with firewalls and intrusion detection systems</li>
                        </ul>
                        <p className="text-gray-600 mt-4">
                            While we take all reasonable precautions, no method of electronic storage is 100% secure. We cannot guarantee absolute security but strive to maintain the highest standards.
                        </p>
                    </div>

                    {/* 9. Data Retention */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            9. Data Retention Policy
                        </h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li><strong>Booking Data:</strong> Retained for 7 years for tax and legal compliance</li>
                            <li><strong>License Images:</strong> Removed after verification or end of rental period</li>
                            <li><strong>Payment Records:</strong> Stored as per Indian tax laws and RBI guidelines</li>
                            <li><strong>Account Data:</strong> Retained until you request account deletion</li>
                        </ul>
                    </div>

                    {/* 10. User Rights */}
                    <div className="bg-green-50 p-6 rounded-2xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                            <Users className="w-8 h-8 text-green-500 mr-3" />
                            10. Your Rights
                        </h2>
                        <p className="text-gray-700 mb-4">You have the following rights regarding your personal data:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong>Access:</strong> Request a copy of your personal data</li>
                            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                            <li><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
                            <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
                            <li><strong>Contact Support:</strong> Reach out to our support team for any privacy concerns</li>
                        </ul>
                        <p className="text-gray-700 mt-4">
                            To exercise any of these rights, please contact us at <a href="mailto:zoomriders@gmail.com" className="text-blue-600 hover:underline font-medium">zoomriders@gmail.com</a>
                        </p>
                    </div>

                    {/* 11. Children's Privacy */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            11. Children's Privacy
                        </h2>
                        <p className="text-gray-600">
                            Our services are intended for users <strong>18 years of age and above</strong>. We do not knowingly collect personal information from minors. If we discover that a minor has provided us with personal data, we will delete it immediately.
                        </p>
                    </div>

                    {/* 12. Legal Compliance */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            12. Legal Compliance
                        </h2>
                        <p className="text-gray-600 mb-4">This Privacy Policy complies with:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>The Information Technology Act, 2000 (India)</li>
                            <li>The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
                            <li>Digital Personal Data Protection Act, 2023 (India)</li>
                            <li>Motor Vehicles Act, 1988 (for license verification)</li>
                            <li>Payment and Settlement Systems Act, 2007</li>
                        </ul>
                    </div>

                    {/* 13. Policy Changes */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            13. Changes to This Privacy Policy
                        </h2>
                        <p className="text-gray-600">
                            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised "Effective Date" at the top. We encourage you to review this policy periodically. Continued use of our services after changes constitutes acceptance of the updated policy.
                        </p>
                    </div>

                    {/* 14. Contact Information */}
                    <div className="bg-gray-100 p-8 rounded-2xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            14. Contact Us
                        </h2>
                        <p className="text-gray-700 mb-6">
                            If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please contact us:
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <Mail className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Email</p>
                                    <a href="mailto:zoomriders@gmail.com" className="text-lg text-blue-600 hover:underline font-medium">
                                        zoomriders@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Phone</p>
                                    <a href="tel:+918708313673" className="text-lg text-blue-600 hover:underline font-medium">
                                        +91 8708313673
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 text-blue-500 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Address</p>
                                    <p className="text-lg text-gray-800">
                                        101 Alpha Blocks<br />
                                        Marathalli, Bengaluru, India - 560103
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
