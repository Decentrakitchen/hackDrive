import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Map, Users, ExternalLink, Maximize2, Minimize2, RefreshCw } from 'lucide-react';

const DensityMap: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // Realistic loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
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
      {/* Regular Page Layout */}
      {!isFullscreen && (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
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
                    className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl shadow-lg"
                  >
                    <Map className="h-10 w-10 text-white" />
                  </motion.div>
                </div>
                <h1 
                  className="font-bold mb-6"
                  style={{
                    fontSize: 'clamp(3rem, 8vw, 7rem)',
                    background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: '#3b82f6' // fallback color
                  }}
                >
                  Density Mapping
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  AI-powered density analysis to visualize population patterns and optimize urban planning
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
                        <Map className="h-5 w-5 text-blue-500" />
                        <span className="font-semibold text-gray-700">Density Mapping Dashboard</span>
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
                        className="bg-blue-100 hover:bg-blue-200 rounded-lg p-2 transition-colors"
                        title="Fullscreen"
                      >
                        <Maximize2 className="h-4 w-4 text-blue-600" />
                      </motion.button>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://baiganinn-hackdrive.hf.space"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-100 hover:bg-purple-200 rounded-lg p-2 transition-colors"
                        title="Open in new tab"
                      >
                        <ExternalLink className="h-4 w-4 text-purple-600" />
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
                            <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full"
                            ></motion.div>
                          </div>
                          <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-lg font-semibold text-gray-700 mb-2"
                          >
                            Loading Density Map
                          </motion.h3>
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-500 text-sm"
                          >
                            Preparing your density analysis...
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <iframe
                    src="https://baiganinn-hackdrive.hf.space"
                    title="Density Mapping Analytics"
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
                  <Map className="h-5 w-5 text-blue-400" />
                  <span className="font-semibold text-white">Density Mapping - Fullscreen</span>
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
                    href="https://baiganinn-hackdrive.hf.space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 rounded-lg p-2 transition-colors"
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
                          className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full"
                        ></motion.div>
                      </div>
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xl font-semibold text-white mb-2"
                      >
                        Loading Density Map
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
                src="https://baiganinn-hackdrive.hf.space"
                title="Density Mapping Analytics - Fullscreen"
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

export default DensityMap;