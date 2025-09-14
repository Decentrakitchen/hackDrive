import React from 'react';
import { motion } from 'framer-motion';

const Sponsors: React.FC = () => {
  // Sample sponsor logos - these will load from your public/partners folder
  const sponsors = [
    { name: 'AstanaHub', logo: '/partners/astanahub.png' },
    { name: 'Dodopizza', logo: '/partners/dodopizza.png' },
    { name: 'InDrive', logo: '/partners/indrive.png' },
    { name: 'Digital and Space ministry', logo: '/partners/ministry.png' },
    { name: 'AlmatyHub', logo: '/partners/almatyhub.jpg' },
    { name: 'Decentra', logo: '/partners/decentrathon.png' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ml-3">
              Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of companies worldwide who trust our AI-powered platform to optimize their fleet operations and drive business growth.
          </p>
        </motion.div>

        {/* Infinite Scrolling Sponsors */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10"></div>
          
          <div className="overflow-hidden">
            <motion.div
              animate={{
                x: [0, -100 * sponsors.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex space-x-16"
              style={{ width: `${200 * sponsors.length}%` }}
            >
              {/* First set of sponsors */}
              {sponsors.map((sponsor, index) => (
                <motion.div
                  key={`first-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="flex-shrink-0 w-48 h-24 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 flex items-center justify-center group backdrop-blur-sm"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-12 w-auto max-w-[80%] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-text')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'fallback-text text-center';
                        fallback.innerHTML = `
                          <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span class="text-white font-bold text-lg">${sponsor.name.charAt(0)}</span>
                          </div>
                          <span class="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">${sponsor.name}</span>
                        `;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {sponsors.map((sponsor, index) => (
                <motion.div
                  key={`second-${index}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="flex-shrink-0 w-48 h-24 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 flex items-center justify-center group backdrop-blur-sm"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-12 w-auto max-w-[80%] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-text')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'fallback-text text-center';
                        fallback.innerHTML = `
                          <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span class="text-white font-bold text-lg">${sponsor.name.charAt(0)}</span>
                          </div>
                          <span class="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300">${sponsor.name}</span>
                        `;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;