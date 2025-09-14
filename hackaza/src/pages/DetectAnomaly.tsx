import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Zap, TrendingUp } from 'lucide-react';

const DetectAnomaly: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-red-100 p-4 rounded-full">
              <AlertTriangle className="h-12 w-12 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Detect Anomaly
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Advanced AI-powered anomaly detection system that identifies unusual driving patterns, 
            potential accidents, and safety concerns in real-time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Zap className="h-10 w-10 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Detection</h3>
            <p className="text-gray-600">
              Monitor driving patterns and detect anomalies instantly with our advanced ML algorithms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <TrendingUp className="h-10 w-10 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Predictive Analytics</h3>
            <p className="text-gray-600">
              Predict potential safety issues before they happen using historical data patterns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <AlertTriangle className="h-10 w-10 text-red-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Alert System</h3>
            <p className="text-gray-600">
              Immediate notifications for detected anomalies with detailed insights and recommendations.
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
            Coming Soon: Advanced Anomaly Detection Dashboard
          </h2>
          <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
            <p className="text-gray-500 text-lg">Interactive Dashboard Preview</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DetectAnomaly;