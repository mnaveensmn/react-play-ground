const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3001,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'], // Add .ts and .tsx
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/, // Process both JS and TS files
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'], // Add TS preset
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app_header',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/Header.tsx', // Point to the .tsx file
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};