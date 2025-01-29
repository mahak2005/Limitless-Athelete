"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Your Sports Marketing Campaigns,
            <br />
            <span className="text-blue-600">All in one place!</span>
          </h1>
        </motion.div>
      </div>
    </section>
  )
}

