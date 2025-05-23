"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp, Shield, BarChart3, Zap, LineChart, Wallet } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: <TrendingUp className="h-10 w-10 text-violet-400" />,
    title: "Optimized Returns",
    description: "Smart strategies to maximize your liquidity pool returns",
  },
  {
    icon: <Shield className="h-10 w-10 text-violet-400" />,
    title: "Risk Management",
    description: "Built-in stop loss and take profit mechanisms",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-violet-400" />,
    title: "Market Analysis",
    description: "Real-time market cap and APR analysis",
  },
  {
    icon: <Zap className="h-10 w-10 text-violet-400" />,
    title: "Automated Execution",
    description: "Set your parameters and let the system handle the rest",
  },
  {
    icon: <LineChart className="h-10 w-10 text-violet-400" />,
    title: "Performance Tracking",
    description: "Monitor your liquidity positions in real-time",
  },
  {
    icon: <Wallet className="h-10 w-10 text-violet-400" />,
    title: "Flexible Withdrawals",
    description: "Withdraw your funds at any time with ease",
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Why Choose Our Platform?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform optimizes your liquidity pool investments with advanced risk management and market
            analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-800 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
