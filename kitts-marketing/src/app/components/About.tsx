'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Kitts Marketing</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Founded in 2017 by Eric Green, Kitts Marketing blends AI innovation with traditional marketing expertise to deliver results for businesses of all sizes. From building automation agents to executing advanced paid media campaigns, our team is obsessed with driving growth through data and creativity.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Results-Driven</h3>
                  <p className="text-gray-600 dark:text-gray-300">We focus on measurable outcomes and ROI</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Innovation First</h3>
                  <p className="text-gray-600 dark:text-gray-300">Leveraging cutting-edge AI and technology</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">Client Partnership</h3>
                  <p className="text-gray-600 dark:text-gray-300">Building long-term relationships for success</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">🏢</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
