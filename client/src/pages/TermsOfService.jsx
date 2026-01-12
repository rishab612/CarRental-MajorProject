import React from 'react';
import { motion } from 'motion/react';
import { FileText, Shield, Car, CreditCard, AlertTriangle, Scale, Mail, Phone, MapPin } from 'lucide-react';

const TermsOfService = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-20 pt-28">
            {/* Hero Section */}
            <section className="max-w-5xl mx-auto px-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <span className="bg-purple-100 text-purple-600 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider">
                        Legal Agreement
                    </span>
                    <h1 className="text-5xl font-bold text-gray-900 mt-6 mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        By using Zoom Ride's services, you agree to these terms and conditions. Please read them carefully before making a booking.
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                        <strong>Effective Date:</strong> January 12, 2026
                    </p>
                </motion.div>
            </section>

            {/* Main Content */}
            <section className="max-w-5xl mx-auto px-6">
                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-12">

                    {/* 1. Acceptance of Terms */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                            <FileText className="w-8 h-8 text-purple-500 mr-3" />
                            1. Acceptance of Terms
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            By accessing or using <strong>Zoom Ride</strong>, you agree to be legally bound by these Terms of Service. If you do not agree to these terms, you must not use our services, website, or mobile application. Continued use of our platform constitutes acceptance of any updates or modifications to these terms.
                        </p>
                    </div>

                    {/* 2. Eligibility */}
                    <div className="bg-blue-50 p-6 rounded-2xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            2. Eligibility to Use Services
                        </h2>
                        <p className="text-gray-700 mb-4">To use Zoom Ride's car rental services, you must meet the following requirements:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>You must be <strong>at least 18 years old</strong></li>
                            <li>You must hold a <strong>valid driving license</strong> issued by a recognized authority</li>
                            <li>License verification (manual or OCR-based) is <strong>mandatory</strong> before booking confirmation</li>
                            <li>Zoom Ride reserves the right to <strong>reject bookings</strong> if verification fails or if eligibility criteria are not met</li>
                        </ul>
                    </div>

                    {/* 3. Account Registration */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            3. Account Registration
                        </h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Users must provide accurate and complete information during registration</li>
                            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                            <li>Any activity conducted through your account is your responsibility</li>
                            <li>Notify us immediately if you suspect unauthorized access to your account</li>
                            <li>Providing false information may result in account suspension or termination</li>
                        </ul>
                    </div>

                    {/* 4. Booking & Reservation */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                            <Car className="w-8 h-8 text-blue-500 mr-3" />
                            4. Booking & Reservation
                        </h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Booking is confirmed <strong>only after successful payment</strong></li>
                            <li>Pickup and return dates/times must be strictly followed</li>
                            <li>Late returns may attract additional charges calculated on an hourly or daily basis</li>
                            <li>Booking availability is subject to vehicle availability, condition, and location</li>
                            <li>Zoom Ride reserves the right to cancel bookings in case of unforeseen circumstances</li>
                        </ul>
                    </div>

                    {/* 5. Pricing & Payments */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                            <CreditCard className="w-8 h-8 text-green-500 mr-3" />
                            5. Pricing & Payments
                        </h2>
                        <p className="text-gray-600 mb-4">Prices are calculated per day based on the selected rental period. Additional charges may apply for:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                            <li>Late return of the vehicle</li>
                            <li>Vehicle damage beyond normal wear and tear</li>
                            <li>Traffic fines and violations incurred during the rental period</li>
                            <li>Extra mileage (if applicable and specified in rental agreement)</li>
                            <li>Cleaning fees (if vehicle is returned excessively dirty)</li>
                        </ul>
                        <p className="text-gray-600">
                            <strong>Payment Security:</strong> All payments are processed via secure third-party gateways like <strong>Razorpay</strong>. Zoom Ride does not store credit/debit card details or UPI information.
                        </p>
                    </div>

                    {/* 6. Security Deposit */}
                    <div className="bg-yellow-50 p-6 rounded-2xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            6. Security Deposit
                        </h2>
                        <p className="text-gray-700 mb-4">A refundable security deposit may be collected at the time of booking or vehicle pickup.</p>
                        <p className="text-gray-700 mb-4">The deposit may be partially or fully withheld in case of:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Vehicle damage (body, interior, tyres, or accessories)</li>
                            <li>Traffic violations or fines</li>
                            <li>Breach of rental terms and conditions</li>
                            <li>Theft or loss of vehicle/accessories</li>
                        </ul>
                        <p className="text-gray-700 mt-4">
                            The deposit will be refunded within 7-10 business days after vehicle inspection and clearance.
                        </p>
                    </div>

                    {/* 7. Vehicle Usage Rules */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                            <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
                            7. Vehicle Usage Rules
                        </h2>
                        <p className="text-gray-600 mb-4"><strong>Users must NOT:</strong></p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                            <li>Drive under the influence of alcohol, drugs, or any intoxicating substances</li>
                            <li>Allow unauthorized drivers to operate the vehicle</li>
                            <li>Use the vehicle for illegal activities, including but not limited to trafficking or smuggling</li>
                            <li>Participate in racing, stunts, drifting, or off-road driving (unless explicitly allowed)</li>
                            <li>Exceed the maximum seating capacity of the vehicle</li>
                            <li>Smoke inside the vehicle or transport hazardous materials</li>
                        </ul>
                        <p className="text-red-600 font-bold">
                            Violation of these rules may lead to immediate termination of the rental, legal action, and loss of security deposit.
                        </p>
                    </div>

                    {/* 8. Insurance Coverage */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                            <Shield className="w-8 h-8 text-blue-500 mr-3" />
                            8. Insurance Coverage
                        </h2>
                        <p className="text-gray-600 mb-4">All vehicles are covered by <strong>basic insurance</strong> as per legal requirements.</p>
                        <p className="text-gray-600 mb-4"><strong>Insurance does NOT cover:</strong></p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                            <li>Negligent or reckless driving</li>
                            <li>Drunk driving or driving under the influence</li>
                            <li>Unauthorized usage or unauthorized drivers</li>
                            <li>Intentional damage or misuse</li>
                        </ul>
                        <p className="text-gray-600">
                            Users may be liable for <strong>deductible amounts</strong> as specified in the insurance policy. Optional insurance plans are available at the time of booking for enhanced coverage.
                        </p>
                    </div>

                    {/* 9. Damage, Loss & Liability */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            9. Damage, Loss & Liability
                        </h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Users must report accidents, damage, or theft <strong>immediately</strong> to Zoom Ride support</li>
                            <li>Users are responsible for any damage to the vehicle during the rental period</li>
                            <li>Loss of accessories, documents, or keys must be reported and may incur replacement charges</li>
                            <li>Zoom Ride is <strong>not responsible</strong> for personal belongings left in the vehicle</li>
                            <li>Police FIR may be required for theft or major accidents</li>
                        </ul>
                    </div>

                    {/* 10. Cancellation & Refund */}
                    <div className="bg-orange-50 p-6 rounded-2xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            10. Cancellation & Refund Policy
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong>Free cancellation:</strong> More than 48 hours before pickup</li>
                            <li><strong>50% refund:</strong> 24-48 hours before pickup</li>
                            <li><strong>No refund:</strong> Less than 24 hours before pickup or no-show</li>
                            <li>No refund for early vehicle return unless otherwise stated</li>
                            <li>Refunds are processed within 7-10 business days</li>
                            <li>Cancellation fees may apply based on the insurance plan selected</li>
                        </ul>
                    </div>

                    {/* 11. Invoice & Documentation */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            11. Invoice & Documentation
                        </h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>A digital invoice will be generated after successful payment</li>
                            <li>Users can download invoices from their account or via email</li>
                            <li>Invoice errors must be reported within <strong>7 days</strong> of booking</li>
                            <li>Invoices serve as proof of rental and payment</li>
                        </ul>
                    </div>

                    {/* 12. Third-Party Services */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            12. Third-Party Services
                        </h2>
                        <p className="text-gray-600 mb-4">Zoom Ride may use third-party services for:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                            <li>Payment processing (Razorpay)</li>
                            <li>Notifications via SMS or Email</li>
                            <li>Driving license verification (OCR or manual)</li>
                            <li>Cloud storage and data management</li>
                        </ul>
                        <p className="text-gray-600">
                            Zoom Ride is <strong>not responsible</strong> for third-party service failures, downtime, or data breaches caused by external providers.
                        </p>
                    </div>

                    {/* 13. Suspension & Termination */}
                    <div className="bg-red-50 p-6 rounded-2xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            13. Suspension & Termination
                        </h2>
                        <p className="text-gray-700 mb-4">Zoom Ride may suspend or terminate your access to services if:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>False or fraudulent information is provided</li>
                            <li>Terms of Service are violated</li>
                            <li>Fraudulent activity or misuse is detected</li>
                            <li>Payment defaults or chargebacks occur</li>
                            <li>Vehicle is used for illegal purposes</li>
                        </ul>
                        <p className="text-gray-700 mt-4">
                            Termination does not exempt users from pending payments or liabilities.
                        </p>
                    </div>

                    {/* 14. Limitation of Liability */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            14. Limitation of Liability
                        </h2>
                        <p className="text-gray-600 mb-4">Zoom Ride is <strong>not liable</strong> for:</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                            <li>Indirect, incidental, or consequential damages</li>
                            <li>Service interruptions due to technical issues or maintenance</li>
                            <li>Delays caused by traffic, weather, or other external factors</li>
                            <li>Loss of data, profits, or business opportunities</li>
                            <li>Personal injury or death caused by user negligence</li>
                        </ul>
                    </div>

                    {/* 15. Privacy & Data Protection */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            15. Privacy & Data Protection
                        </h2>
                        <p className="text-gray-600">
                            User data is collected, stored, and processed in accordance with our <a href="/privacy" className="text-blue-600 hover:underline font-medium">Privacy Policy</a>. Sensitive personal data, including driving license details and payment information, is protected using industry-standard encryption and security measures.
                        </p>
                    </div>

                    {/* 16. Governing Law */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                            <Scale className="w-8 h-8 text-purple-500 mr-3" />
                            16. Governing Law & Jurisdiction
                        </h2>
                        <p className="text-gray-600">
                            These Terms of Service are governed by the <strong>laws of India</strong>. Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts in <strong>Bengaluru, Karnataka, India</strong>.
                        </p>
                    </div>

                    {/* 17. Changes to Terms */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            17. Changes to Terms of Service
                        </h2>
                        <p className="text-gray-600">
                            Zoom Ride reserves the right to update or modify these Terms of Service at any time without prior notice. Any changes will be posted on this page with an updated "Effective Date." Continued use of our services after changes constitutes acceptance of the revised terms.
                        </p>
                    </div>

                    {/* 18. Contact Information */}
                    <div className="bg-gray-100 p-8 rounded-2xl">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            18. Contact Us
                        </h2>
                        <p className="text-gray-700 mb-6">
                            If you have any questions, concerns, or complaints regarding these Terms of Service, please contact us:
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <Mail className="w-6 h-6 text-purple-500 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Support Email</p>
                                    <a href="mailto:zoomriders@gmail.com" className="text-lg text-purple-600 hover:underline font-medium">
                                        zoomriders@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="w-6 h-6 text-purple-500 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Support Phone</p>
                                    <a href="tel:+918708313673" className="text-lg text-purple-600 hover:underline font-medium">
                                        +91 8708313673
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 text-purple-500 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Office Address</p>
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

export default TermsOfService;
