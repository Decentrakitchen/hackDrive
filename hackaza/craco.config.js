const path = require('path');

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/lib': path.resolve(__dirname, 'src/lib'),
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  babel: {
    presets: [
      ['@babel/preset-react', { runtime: 'automatic' }],
    ],
  },
}