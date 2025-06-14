'use client';

import { motion } from 'framer-motion';

const services = [
  {
    id: 'ai-agents',
    title: 'AI Agents',
    description: 'Leverage cutting-edge AI technology to automate your marketing processes and enhance customer engagement. Our custom AI agents streamline operations and deliver personalized experiences at scale.',
    icon: '🤖',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Create stunning, high-performance websites that convert. From responsive design to e-commerce solutions, we build digital experiences that drive results and exceed expectations.',
    icon: '🌐',
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Build your brand presence across all major platforms with strategic content creation and community management. We help you connect with your audience and drive meaningful engagement.',
    icon: '📱',
  },
  {
    id: 'seo',
    title: 'SEO',
    description: 'Improve your search engine rankings and drive organic traffic with our comprehensive SEO strategies. We combine technical expertise with content optimization to maximize your visibility.',
    icon: '🔍',
  },
  {
    id: 'paid-media',
    title: 'Paid Media',
    description: 'Maximize your ROI with targeted paid advertising campaigns. From PPC to social media ads, we create and optimize campaigns that deliver measurable results and drive conversions.',
    icon: '📈',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-5xl mb-6 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
