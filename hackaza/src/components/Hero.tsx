import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Map, TrendingUp, AlertTriangle, Route, BarChart3 } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as any,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as any,
      },
    },
  };

  const features = [
    {
      icon: Shield,
      title: "Driver Trust Issues?",
      subtitle: "AI-Powered Anomaly Detection",
      description: "Our ML model can accurately and with high precision detect anomalous driving patterns, helping you identify risky behaviors before they become accidents. Real-time monitoring ensures your fleet operates safely.",
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50",
    },
    {
      icon: Route,
      title: "Route Optimization & Heatmaps",
      subtitle: "Smart Traffic Analysis",
      description: "Discover optimal routes through advanced heatmap analysis. Our system identifies traffic patterns, congestion points, and suggests the most efficient paths to save time and fuel costs.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: TrendingUp,
      title: "Popular Routes Prediction",
      subtitle: "Congestion Forecasting",
      description: "Predict future traffic patterns and popular routes using historical data and machine learning. Stay ahead of congestion and plan your operations with confidence and precision.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-32 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8"
      >
        {/* Main Headline */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Analyze geotrack data,
            </span>
            <br />
            <span className="text-gray-900">
              and optimize your business
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              using AI like never before
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform your fleet management with cutting-edge AI technology that predicts, analyzes, and optimizes every aspect of your operations.
          </p>
        </motion.div>

        {/* Three Feature Grid */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${feature.bgGradient} p-8 shadow-xl border border-white/20 backdrop-blur-sm`}
            >
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              <h4 className={`text-lg font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent mb-4`}>
                {feature.subtitle}
              </h4>
              
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative gradient overlay */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full -translate-y-16 translate-x-16`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "99.8%", label: "Accuracy Rate" },
            { number: "50K+", label: "Routes Analyzed" },
            { number: "24/7", label: "Real-time Monitoring" },
            { number: "30%", label: "Cost Reduction" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;