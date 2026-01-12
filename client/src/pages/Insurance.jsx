import React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck,
    AlertTriangle,
    HelpCircle,
    FileText,
    PhoneCall,
    CheckCircle2,
    XSquare,
    Info,
    ArrowRight,
    ShieldAlert
} from 'lucide-react';

const Insurance = () => {
    const plans = [
        {
            name: "Basic Insurance",
            description: "Included by default with every rental.",
            price: "Free",
            features: [
                "Third-party liability (mandatory)",
                "Collision Damage Waiver (CDW) - Partial",
                "Covers vehicle body damage",
            ],
            exclusions: ["Tyres", "Glass", "Underbody", "Interior"],
            recommended: false
        },
        {
            name: "Standard Protection",
            description: "Better coverage for peace of mind.",
            price: "₹499/day",
            features: [
                "Everything in Basic",
                "Theft Protection (with FIR)",
                "Reduced Deductible amount",
            ],
            exclusions: ["Off-road use", "Drunk driving"],
            recommended: true
        },
        {
            name: "Zero Depreciation",
            description: "Maximum protection for total peace of mind.",
            price: "₹999/day",
            features: [
                "Full damage coverage",
                "₹0 liability for the user",
                "Covers Tyres & Glass",
                "24/7 Premium Support",
            ],
            exclusions: ["Invalid license", "Extreme racing"],
            recommended: false
        }
    ];

    const exclusions = [
        { title: "Drunk Driving", icon: <AlertTriangle className="text-red-500" /> },
        { title: "Invalid License", icon: <FileText className="text-red-500" /> },
        { title: "Over-speeding / Rash Driving", icon: <AlertTriangle className="text-red-500" /> },
        { title: "Unauthorized Driver", icon: <XSquare className="text-red-500" /> },
        { title: "Off-road / Racing Use", icon: <AlertTriangle className="text-red-500" /> },
        { title: "Natural Disasters", icon: <Info className="text-blue-500" />, note: "unless add-on" },
        { title: "Lost Keys / Interior Damage", icon: <XSquare className="text-red-500" /> },
    ];

    const steps = [
        { title: "Accident Safety", description: "Ensure everyone is safe and move to a secure location." },
        { title: "Inform Support", description: "Contact Zoom Ride support immediately via the helpline." },
        { title: "FIR Requirement", description: "File an FIR at the nearest police station for major accidents/theft." },
        { title: "Photo Upload", description: "Take clear photos of the damage and upload them via the app." },
        { title: "Claim Review", description: "Our team will review the claim within 48-72 hours." },
    ];

    const faqs = [
        { q: "What is a Deductible?", a: "A deductible (or excess) is the maximum amount you are liable to pay in case of damage before the insurance covers the rest." },
        { q: "Is insurance mandatory?", a: "Yes, basic third-party liability is mandatory by law and is included in your rental price." },
        { q: "What happens if I lose the keys?", a: "Key loss is generally not covered by insurance. You will be charged the replacement cost." },
        { q: "Does insurance cover personal belongings?", a: "No, our insurance covers the vehicle and third-party liability only. Personal items are not covered." }
    ];

    return (
        <div className="bg-gray-50 min-h-screen pb-20 pt-28">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider">
                        Protected Journeys
                    </span>
                    <h1 className="text-5xl font-bold text-gray-900 mt-6 mb-4">
                        Why Insurance Matters
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        At Zoom Ride, your safety and peace of mind are our top priorities.
                        Understanding your coverage helps you drive with confidence, knowing you're
                        protected against the unexpected.
                    </p>
                </motion.div>
            </section>

            {/* Pricing Cards */}
            <section className="max-w-7xl mx-auto px-6 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border ${plan.recommended ? 'border-blue-500 scale-105' : 'border-gray-100'}`}
                        >
                            {plan.recommended && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                                    Recommended
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <p className="text-gray-500 mb-6">{plan.description}</p>
                            <div className="text-4xl font-bold text-gray-900 mb-8">{plan.price}</div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map(f => (
                                    <li key={f} className="flex items-center text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-gray-100">
                                <p className="text-sm font-bold text-gray-400 uppercase mb-4">Exclusions:</p>
                                <div className="flex flex-wrap gap-2">
                                    {plan.exclusions.map(ex => (
                                        <span key={ex} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-lg text-xs font-medium">
                                            {ex}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Coverage Details */}
            <section className="max-w-7xl mx-auto px-6 mb-20">
                <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                                <ShieldCheck className="w-8 h-8 text-blue-500 mr-3" />
                                Detailed Coverage
                            </h2>
                            <div className="space-y-6 text-gray-600">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2">Collision Damage Waiver (CDW)</h4>
                                    <p>Limits your financial liability for damage to the vehicle's bodywork. It typically does not cover tyres, windows, or the interior.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2">Theft Protection</h4>
                                    <p>Covers the cost of replacing the vehicle if it's stolen. Requires submisson of an official Police FIR and all sets of keys.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2">Third-Party Liability</h4>
                                    <p>Provides legal protection against claims for damage or injury caused to other people or their property.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-blue-50 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                                <ShieldAlert className="w-6 h-6 mr-2" />
                                Critical Exclusions
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {exclusions.map(ex => (
                                    <div key={ex.title} className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-sm">
                                        {ex.icon}
                                        <span className="text-sm font-medium text-gray-700">{ex.title}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-sm text-blue-700 italic">
                                * Violating these terms will void your insurance coverage immediately.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Claims Process */}
            <section className="bg-gray-900 text-white py-20 mb-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-16">Simple Claim Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {steps.map((step, idx) => (
                            <div key={step.title} className="relative">
                                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                                    {idx + 1}
                                </div>
                                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                                {idx < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-6 left-[60%] w-full h-0.5 bg-gray-800" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deductibles & FAQ */}
            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                <div>
                    <h2 className="text-3xl font-bold mb-8">Understanding Deductibles</h2>
                    <div className="prose text-gray-600 mb-8">
                        <p>A <strong>deductible</strong> (also known as "excess") is the amount you are responsible for paying if the car is damaged or stolen. The insurance covers any costs above this amount.</p>
                    </div>
                    <table className="w-full text-left rounded-xl overflow-hidden shadow-sm border border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-4 font-bold text-gray-900">Vehicle Type</th>
                                <th className="px-6 py-4 font-bold text-gray-900">Standard Deductible</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                            <tr>
                                <td className="px-6 py-4">Hatchback / Sedan</td>
                                <td className="px-6 py-4">₹5,000</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4">SUVs / Luxury</td>
                                <td className="px-6 py-4">₹15,000</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4">Premium Sports</td>
                                <td className="px-6 py-4">₹30,000</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="mt-4 text-xs text-gray-400">
                        * Choosing "Zero Depreciation" plan reduces your deductible to ₹0.
                    </p>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-8 flex items-center">
                        <HelpCircle className="w-8 h-8 text-blue-500 mr-3" />
                        Common Questions
                    </h2>
                    <div className="space-y-6">
                        {faqs.map(faq => (
                            <div key={faq.q} className="border-b border-gray-100 pb-6">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h4>
                                <p className="text-gray-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support & Contact */}
            <section className="max-w-7xl mx-auto px-6">
                <div className="bg-blue-600 rounded-3xl p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Need Emergency Assistance?</h2>
                        <p className="text-blue-100 text-lg mb-8 md:mb-0">Our support team is available 24/7 for insurance claims and road help.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                        <a href="tel:+918708313673" className="flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-gray-50 transition-colors">
                            <PhoneCall className="w-5 h-5 mr-3" />
                            +91 8708313673
                        </a>
                        <a href="mailto:zoomriders@gmail.com" className="flex items-center justify-center bg-blue-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-800 transition-colors">
                            <FileText className="w-5 h-5 mr-3" />
                            Email Contact
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-400 text-sm">
                    <p>© 2026 Zoom Ride. All insurance policies are subject to the terms of the rental agreement. Legal Disclaimer: This page provides a summary of coverage and does not constitute a legal contract.</p>
                </div>
            </section>
        </div>
    );
};

export default Insurance;
