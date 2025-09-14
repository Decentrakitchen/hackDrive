import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Flame, Navigation } from 'lucide-react';

const Hotspot: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-red-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-100 p-4 rounded-full">
              <Flame className="h-12 w-12 text-yellow-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent">
              Traffic Hotspots
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Identify high-traffic areas, congestion patterns, and optimal routes 
            to improve traffic flow and reduce travel time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <MapPin className="h-10 w-10 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Traffic Analysis</h3>
            <p className="text-gray-600">
              Deep analysis of traffic patterns to identify congestion hotspots and peak hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Navigation className="h-10 w-10 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Route Optimization</h3>
            <p className="text-gray-600">
              Smart routing recommendations based on real-time traffic data and historical patterns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Flame className="h-10 w-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Heat Mapping</h3>
            <p className="text-gray-600">
              Visual heat maps showing traffic intensity and popular routes across different time periods.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-12 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Coming Soon: Interactive Traffic Hotspot Map
          </h2>
          <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
            <p className="text-gray-500 text-lg">Interactive Map Preview</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hotspot;