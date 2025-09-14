import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Zap, TrendingUp, ExternalLink, Maximize2, Minimize2, RefreshCw, Brain } from 'lucide-react';

const DetectAnomaly: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showAiAlert, setShowAiAlert] = useState(true);

  useEffect(() => {
    // Realistic loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    // Hide AI alert after some time
    const alertTimer = setTimeout(() => {
      setShowAiAlert(false);
    }, 8000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(alertTimer);
    };
  }, []);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const refreshApp = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <>
      {/* AI Loading Alert - Glassmorphism Style */}
      <AnimatePresence>
        {showAiAlert && (
          <motion.div
            initial={{ opacity: 0, x: 100, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 100, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-6 right-6 z-50"
          >
            <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-4 shadow-xl max-w-sm">
              <div className="flex items-start space-x-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-red-400 to-orange-500 rounded-lg flex items-center justify-center"
                >
                  <Brain className="w-4 h-4 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">
                    AI Anomaly Detection Loading
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    AI is analyzing driving patterns for anomalies. This may take a few moments to complete.
                  </p>
                </div>
                <button
                  onClick={() => setShowAiAlert(false)}
                  className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Regular Page Layout */}
      {!isFullscreen && (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-100">
          {/* Hero Section */}
          <div className="pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="bg-gradient-to-br from-red-500 to-orange-600 p-4 rounded-2xl shadow-lg"
                  >
                    <AlertTriangle className="h-10 w-10 text-white" />
                  </motion.div>
                </div>
                <h1 
                  className="font-bold mb-6"
                  style={{
                    fontSize: 'clamp(1rem, 6vw, 4rem)',
                    background: 'linear-gradient(to right, #ef4444, #f97316, #eab308)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: '#ef4444' // fallback color
                  }}
                >
                  Detect Anomaly
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  AI-powered anomaly detection system that identifies unusual driving patterns and safety concerns in real-time
                </p>
              </motion.div>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-3 gap-8 mt-16">
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
            </div>
          </div>

          {/* Analytics App Container */}
          <div className="px-6 lg:px-8 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="max-w-8xl mx-auto"
            >
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
                {/* Header Bar */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                        <span className="font-semibold text-gray-700">Anomaly Detection Dashboard</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={refreshApp}
                        className="bg-gray-200 hover:bg-gray-300 rounded-lg p-2 transition-colors"
                        title="Refresh"
                      >
                        <RefreshCw className="h-4 w-4 text-gray-600" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleFullscreen}
                        className="bg-red-100 hover:bg-red-200 rounded-lg p-2 transition-colors"
                        title="Fullscreen"
                      >
                        <Maximize2 className="h-4 w-4 text-red-600" />
                      </motion.button>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://baiganinn-anomaldrive.hf.space"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-100 hover:bg-orange-200 rounded-lg p-2 transition-colors"
                        title="Open in new tab"
                      >
                        <ExternalLink className="h-4 w-4 text-orange-600" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* App Content */}
                <div className="relative bg-gray-50">
                  <AnimatePresence>
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 bg-white z-10 flex items-center justify-center"
                      >
                        <div className="text-center">
                          <div className="relative w-16 h-16 mx-auto mb-6">
                            <div className="absolute inset-0 border-4 border-red-200 rounded-full"></div>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="absolute inset-0 border-4 border-red-500 border-t-transparent rounded-full"
                            ></motion.div>
                          </div>
                          <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-lg font-semibold text-gray-700 mb-2"
                          >
                            Loading Anomaly Detection
                          </motion.h3>
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-500 text-sm"
                          >
                            Preparing your anomaly analysis...
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <iframe
                    src="https://baiganinn-anomaldrive.hf.space"
                    title="Anomaly Detection Analytics"
                    width="100%"
                    height="800px"
                    style={{ border: 'none' }}
                    onLoad={() => setIsLoading(false)}
                    className="w-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Fullscreen Mode */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
          >
            {/* Fullscreen Header */}
            <div className="bg-gray-900 border-b border-gray-700 px-6 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                  <span className="font-semibold text-white">Anomaly Detection - Fullscreen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={refreshApp}
                    className="bg-gray-700 hover:bg-gray-600 rounded-lg p-2 transition-colors"
                    title="Refresh"
                  >
                    <RefreshCw className="h-4 w-4 text-gray-300" />
                  </motion.button>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://baiganinn-anomaldrive.hf.space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-600 hover:bg-orange-700 rounded-lg p-2 transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink className="h-4 w-4 text-white" />
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleFullscreen}
                    className="bg-red-600 hover:bg-red-700 rounded-lg p-2 transition-colors"
                    title="Exit fullscreen"
                  >
                    <Minimize2 className="h-4 w-4 text-white" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Fullscreen Content */}
            <div className="relative h-[calc(100vh-60px)]">
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gray-900 z-10 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <div className="relative w-20 h-20 mx-auto mb-6">
                        <div className="absolute inset-0 border-4 border-gray-600 rounded-full"></div>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 border-4 border-red-500 border-t-transparent rounded-full"
                        ></motion.div>
                      </div>
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xl font-semibold text-white mb-2"
                      >
                        Loading Anomaly Detection
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400"
                      >
                        Preparing fullscreen experience...
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <iframe
                src="https://baiganinn-anomaldrive.hf.space"
                title="Anomaly Detection Analytics - Fullscreen"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DetectAnomaly;