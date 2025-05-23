"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-primary/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px] opacity-20" />
      </div>

      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-64 h-64 relative mr-1 mt-0flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="LiquiDOT Logo"
                fill
                priority
                className="object-contain transform translate-y-2"
              />
            </div>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl mt-2">
              The Liquidity Pool Manager
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-x-4"
          >
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white border-0"
              asChild
            >
              <a href="#manager">Get Started</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-violet-300 text-violet-500 hover:bg-violet-50 hover:text-violet-700"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
