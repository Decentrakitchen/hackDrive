# 🚗 Hackaza - AI-Powered Fleet Management Platform

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-green.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.12-purple.svg)](https://www.framer.com/motion/)

**Revolutionizing fleet management with AI-powered geotrack analysis, anomaly detection, and route optimization for the modern world.**

## 🌟 Features

### 🤖 AI-Powered Analytics
- **Driver Trust Detection**: Advanced ML algorithms to identify anomalous driving patterns
- **Route Optimization**: Smart traffic analysis with real-time heatmaps
- **Congestion Prediction**: Forecasting popular routes and traffic patterns
- **Real-time Monitoring**: 24/7 fleet surveillance with instant alerts

### 🎨 Modern UI/UX
- **Glass Morphism Design**: Beautiful backdrop blur effects and modern aesthetics
- **Responsive Layout**: Seamless experience across all devices
- **Smooth Animations**: Powered by Framer Motion for fluid interactions
- **Interactive Components**: Engaging hover effects and micro-interactions

### 📊 Advanced Features
- **Machine Learning Integration**: Multiple ML models for comprehensive analysis
- **Data Visualization**: Interactive charts and real-time dashboards
- **Fleet Analytics**: Comprehensive insights into vehicle performance
- **Anomaly Detection**: Proactive identification of potential issues

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hackaza/hackaza-frontend.git
   cd hackaza
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.1.1**: Latest React with concurrent features
- **TypeScript**: Type-safe development
- **React Router 7.9.1**: Modern routing solution

### Styling & Animation
- **TailwindCSS 3.4.17**: Utility-first CSS framework
- **Framer Motion 12.23.12**: Production-ready motion library
- **Lucide React**: Beautiful icon library

### UI Components
- **Custom Component Library**: Built with shadcn/ui patterns
- **Class Variance Authority**: Type-safe component variants
- **Tailwind Merge**: Intelligent class merging

### Build Tools
- **CRACO**: Create React App Configuration Override
- **PostCSS**: CSS processing with Autoprefixer
- **ESLint**: Code linting and formatting

## 📁 Project Structure

```
hackaza/
├── public/
│   ├── partners/           # Partner/sponsor logos
│   └── models/            # ML model files
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Base UI components
│   │   ├── Navbar.tsx    # Navigation component
│   │   ├── Hero.tsx      # Landing page hero
│   │   ├── Sponsors.tsx  # Partner showcase
│   │   └── Footer.tsx    # Site footer
│   ├── pages/            # Application pages
│   │   ├── Home.tsx      # Landing page
│   │   ├── DetectAnomaly.tsx
│   │   ├── Hotspot.tsx
│   │   └── DensityMap.tsx
│   ├── lib/              # Utility functions
│   └── App.tsx           # Main application component
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # TailwindCSS configuration
├── postcss.config.js     # PostCSS configuration
└── craco.config.js       # CRACO configuration
```

## 🎯 Available Scripts

### Development
```bash
npm start          # Start development server
npm run build      # Build for production
npm run test       # Run test suite
npm run lint       # Run ESLint
```

### Analysis & Optimization
```bash
npm run preview    # Preview production build
npm run analyze    # Analyze bundle size
```

## 🧠 ML Models Integration

The platform includes several pre-trained models for comprehensive fleet analysis:

- **Isolation Forest**: Anomaly detection in driving patterns
- **LSTM Autoencoder**: Sequential pattern analysis
- **One-Class SVM**: Outlier detection
- **Optimization Models**: Route and resource optimization

## 🎨 Design System

### Color Palette
- **Primary**: Blue to Purple gradients
- **Secondary**: Gray scales with high contrast
- **Accent**: Vibrant colors for CTAs and highlights

### Animation Library
- **Blob animations**: Organic background movements
- **Float effects**: Subtle hover animations
- **Glow effects**: Interactive button states
- **Slide transitions**: Smooth page transitions

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Enhanced tablet experience
- **Desktop**: Full-featured desktop interface
- **4K Ready**: Scales beautifully on high-resolution displays

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=https://api.hackaza.com
REACT_APP_VERSION=1.0.0
REACT_APP_ENVIRONMENT=development
```

### TailwindCSS Customization
The project includes extensive TailwindCSS customizations:
- Custom animations and keyframes
- Extended color palette
- Custom spacing and typography
- Backdrop blur utilities

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Deployment Platforms
- **Vercel**: Optimized for React applications
- **Netlify**: Continuous deployment from Git
- **AWS S3**: Static site hosting
- **Docker**: Containerized deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **TailwindCSS** for the utility-first approach
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons
- **shadcn/ui** for component patterns

## 📞 Support

- **Email**: contact@hackaza.com
- **Documentation**: [docs.hackaza.com](https://docs.hackaza.com)
- **Issues**: [GitHub Issues](https://github.com/hackaza/hackaza-frontend/issues)

---

<div align="center">
  <strong>Built with ❤️ by the Hackaza Team</strong>
  <br />
  <sub>Revolutionizing fleet management through AI technology</sub>
</div>