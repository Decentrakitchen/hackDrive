import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Map, Users } from 'lucide-react';

const DensityMap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Map className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Density Mapping
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Visualize population density, vehicle concentration, and demand patterns 
            to make data-driven decisions for urban planning and business optimization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <BarChart3 className="h-10 w-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Data Visualization</h3>
            <p className="text-gray-600">
              Advanced visualization tools to display density patterns across different geographic areas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Users className="h-10 w-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Population Analytics</h3>
            <p className="text-gray-600">
              Analyze population density trends and movement patterns for better resource allocation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Map className="h-10 w-10 text-indigo-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Geographic Insights</h3>
            <p className="text-gray-600">
              Comprehensive geographic analysis with layered data views and customizable parameters.
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
            Coming Soon: Advanced Density Mapping Dashboard
          </h2>
          <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
            <p className="text-gray-500 text-lg">Density Map Dashboard Preview</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DensityMap;