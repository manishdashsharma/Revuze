/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import * as Icons from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { siteConfig } from '../../utils/site'

// Components
const StarRating = ({ rating }) => {
    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                    key={star}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: star * 0.1 }}>
                    <Icons.Star
                        fill={star <= rating ? '#FCD34D' : 'none'}
                        stroke={star <= rating ? '#FCD34D' : '#9CA3AF'}
                        className="w-5 h-5"
                    />
                </motion.div>
            ))}
        </div>
    )
}

const GradientBackground = () => (
    <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
    </div>
)

const PricingToggle = ({ isYearly, setIsYearly }) => (
    <div className="flex items-center justify-center space-x-4 mb-8">
        <span className={`text-lg ${!isYearly ? 'text-indigo-400' : 'text-gray-400'}`}>Monthly</span>
        <motion.button
            className="w-16 h-8 bg-indigo-900 rounded-full p-1"
            onClick={() => setIsYearly(!isYearly)}>
            <motion.div
                className="w-6 h-6 bg-indigo-400 rounded-full"
                animate={{ x: isYearly ? 32 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
        </motion.button>
        <span className={`text-lg ${isYearly ? 'text-indigo-400' : 'text-gray-400'}`}>Yearly</span>
    </div>
)

export default function HomePage() {
    const [activeTestimonial, setActiveTestimonial] = useState(0)
    const [isYearly, setIsYearly] = useState(false)
    const [scrollY, setScrollY] = useState(0)
    const testimonialCount = siteConfig.testimonials.length
    const intervalTime = 5000

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prevIndex) => (prevIndex + 1) % testimonialCount)
        }, intervalTime)

        return () => clearInterval(interval)
    }, [testimonialCount])

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const testimonialVariants = {
        enter: { x: 1000, opacity: 0 },
        center: { x: 0, opacity: 1 },
        exit: { x: -1000, opacity: 0 }
    }

    return (
        <div className="min-h-screen text-gray-100 relative overflow-hidden">
            <GradientBackground />

            {/* Header/Nav */}
            <motion.header
                className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-lg"
                style={{
                    boxShadow: `0 0 20px rgba(99, 102, 241, ${Math.min(scrollY / 1000, 0.25)})`
                }}>
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <motion.div
                            className="flex items-center space-x-3"
                            whileHover={{ scale: 1.05 }}>
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.8 }}>
                                <Icons.MessageSquare className="w-8 h-8 text-indigo-400" />
                            </motion.div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                                {siteConfig.name}
                            </span>
                        </motion.div>

                        <div className="flex items-center space-x-8">
                            {['Features', 'Pricing', 'Testimonials'].map((item) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-300 hover:text-indigo-400 transition-colors"
                                    whileHover={{ scale: 1.1 }}>
                                    {item}
                                </motion.a>
                            ))}
                            <motion.button
                                className="px-4 py-2 bg-indigo-600 rounded-lg font-medium hover:bg-indigo-500"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}>
                                Get Started
                            </motion.button>
                        </div>
                    </div>
                </nav>
            </motion.header>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}>
                        <motion.h1
                            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 mb-8"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.7 }}>
                            {siteConfig.description}
                        </motion.h1>
                        <motion.p
                            className="max-w-2xl mx-auto text-xl text-gray-300 mb-10"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.9 }}>
                            Transform your customer feedback into actionable insights with our powerful platform
                        </motion.p>
                        <motion.div
                            className="flex justify-center space-x-4"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.1 }}>
                            <motion.button
                                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:from-indigo-500 hover:to-purple-500"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}>
                                Get Started Free
                            </motion.button>
                            <motion.button
                                className="px-8 py-4 border border-indigo-400/30 rounded-lg font-semibold hover:bg-indigo-400/10"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}>
                                View Demo
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Stats Dashboard Preview */}
                    <motion.div
                        className="mt-20 bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.3 }}>
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Customer Satisfaction</h3>
                                <div className="flex items-center space-x-4">
                                    <StarRating rating={4.8} />
                                    <span className="text-2xl font-bold text-indigo-400">4.8</span>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                {['1D', '1W', '1M', '1Y'].map((period) => (
                                    <button
                                        key={period}
                                        className="px-3 py-1 rounded-lg text-sm font-medium hover:bg-indigo-400/20">
                                        {period}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="h-64">
                            <ResponsiveContainer
                                width="100%"
                                height="100%">
                                <LineChart data={siteConfig.ratingData}>
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="#374151"
                                    />
                                    <XAxis
                                        dataKey="month"
                                        stroke="#9CA3AF"
                                    />
                                    <YAxis stroke="#9CA3AF" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#1F2937',
                                            border: 'none',
                                            borderRadius: '8px',
                                            color: '#F3F4F6'
                                        }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="rating"
                                        stroke="#818CF8"
                                        strokeWidth={2}
                                        dot={{ fill: '#818CF8', strokeWidth: 2 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section
                id="features"
                className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}>
                        <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
                        <p className="text-xl text-gray-400">Everything you need to collect and analyze feedback</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {siteConfig.features.map((feature, index) => {
                            const Icon = Icons[feature.icon]
                            return (
                                <motion.div
                                    key={index}
                                    className="group relative bg-gray-800/50 backdrop-blur-xl p-6 rounded-xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}>
                                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <motion.div
                                        className="relative"
                                        whileHover={{ scale: 1.1 }}>
                                        <Icon className="w-12 h-12 text-indigo-400 mb-4" />
                                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                        <p className="text-gray-400">{feature.description}</p>
                                    </motion.div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section
                id="pricing"
                className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}>
                        <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
                        <p className="text-xl text-gray-400">No hidden fees. No surprises.</p>
                    </motion.div>

                    <PricingToggle
                        isYearly={isYearly}
                        setIsYearly={setIsYearly}
                    />

                    <div className="grid md:grid-cols-3 gap-8">
                        {siteConfig.pricing.plans.map((plan, index) => {
                            const price = isYearly ? plan.price * 10 : plan.price
                            return (
                                <motion.div
                                    key={index}
                                    className={`relative bg-gray-800/50 backdrop-blur-xl p-8 rounded-xl border ${
                                        plan.popular ? 'border-indigo-500 shadow-lg shadow-indigo-500/20' : 'border-gray-700/50'
                                    }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}>
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                            <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</span>
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline mb-6">
                                        <span className="text-4xl font-bold">{siteConfig.pricing.currency}</span>
                                        <span className="text-5xl font-bold">{price}</span>
                                        <span className="text-gray-400 ml-2">/{plan.billing}</span>
                                    </div>
                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feature, fIndex) => (
                                            <motion.li
                                                key={fIndex}
                                                className="flex items-center gap-2"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: fIndex * 0.1 }}>
                                                <Icons.Check className="w-5 h-5 text-green-500" />
                                                <span>{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <motion.button
                                        className={`w-full py-3 rounded-lg font-semibold ${
                                            plan.popular
                                                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500'
                                                : 'bg-gray-700 hover:bg-gray-600'
                                        }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}>
                                        {plan.cta}
                                    </motion.button>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section
                id="testimonials"
                className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}>
                        <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
                        <p className="text-xl text-gray-400">Join thousands of satisfied users worldwide</p>
                    </motion.div>

                    <div className="relative overflow-hidden">
                        <motion.div className="flex justify-center">
                            <AnimatePresence initial={false}>
                                <motion.div
                                    key={activeTestimonial}
                                    className="w-full max-w-2xl"
                                    variants={testimonialVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
                                    <div className="bg-gray-800/50 backdrop-blur-xl p-8 rounded-xl border border-gray-700/50">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-16 h-16 rounded-full overflow-hidden">
                                                <motion.img
                                                    src="/api/placeholder/150/150"
                                                    alt={siteConfig.testimonials[activeTestimonial].name}
                                                    className="w-full h-full object-cover"
                                                    whileHover={{ scale: 1.1 }}
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold">{siteConfig.testimonials[activeTestimonial].name}</h4>
                                                <p className="text-gray-400">{siteConfig.testimonials[activeTestimonial].role}</p>
                                            </div>
                                        </div>
                                        <p className="text-lg text-gray-300 italic">{siteConfig.testimonials[activeTestimonial].content}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>

                        <div className="flex justify-center mt-8 gap-2">
                            {siteConfig.testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    className={`w-2 h-2 rounded-full ${index === activeTestimonial ? 'bg-indigo-500' : 'bg-gray-600'}`}
                                    onClick={() => setActiveTestimonial(index)}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gray-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        {siteConfig.stats.metrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}>
                                <motion.div
                                    className="text-4xl font-bold text-indigo-400 mb-2"
                                    initial={{ scale: 0.5 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 }}>
                                    {metric.value}
                                </motion.div>
                                <div className="text-gray-400">{metric.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-gray-900/80 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Icons.MessageSquare className="w-6 h-6 text-indigo-400" />
                                <span className="text-xl font-bold">{siteConfig.name}</span>
                            </div>
                            <p className="text-gray-400">Transform your customer feedback into actionable insights</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Product</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#features"
                                        className="text-gray-400 hover:text-indigo-400">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#pricing"
                                        className="text-gray-400 hover:text-indigo-400">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#testimonials"
                                        className="text-gray-400 hover:text-indigo-400">
                                        Testimonials
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-indigo-400">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-indigo-400">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-indigo-400">
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href={`mailto:${siteConfig.company.email}`}
                                        className="text-gray-400 hover:text-indigo-400">
                                        {siteConfig.company.email}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                        <p>
                            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

            {/* Floating Elements */}
            <div className="fixed top-40 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="fixed top-60 right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>
    )
}

