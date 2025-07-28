# Webpack Setup for React Animation Exploration

This project now includes a custom webpack configuration alongside the existing Create React App setup.

## Available Scripts

### Create React App Scripts (Default)
- `npm start` - Runs the app using react-scripts (default CRA behavior)
- `npm run build` - Builds the app using react-scripts
- `npm test` - Runs tests using react-scripts

### Webpack Scripts (New)
- `npm run start:webpack` - Runs the app using webpack dev server on port 3000
- `npm run build:webpack` - Builds the app using webpack production configuration
- `npm run analyze` - Builds the app and opens the bundle analyzer report

## Webpack Configuration

The webpack setup includes two configurations:

### Development Configuration (`config/webpack.dev.config.js`)
- Hot reloading enabled
- Source maps for debugging
- Development server on port 3000
- Bundle analyzer generates static report

### Production Configuration (`config/webpack.prod.config.js`)
- Optimized builds with code splitting
- Minified output
- Content hashing for caching
- Bundle analyzer report generation

## Features Included

✅ **BundleAnalyzerPlugin** - Generates bundle size analysis reports  
✅ **TypeScript Support** - Full TypeScript compilation with Babel  
✅ **CSS Loading** - Support for CSS files  
✅ **Asset Handling** - Images, fonts, and Lottie animations  
✅ **Hot Reloading** - Fast development experience  
✅ **Code Splitting** - Optimized bundle splitting for production  
✅ **Environment Variables** - Support via dotenv-webpack  

## Features Excluded (as requested)

❌ **ModuleFederationPlugin** - Removed as per requirements

## Bundle Analysis

After running `npm run build:webpack`, you can find the bundle analysis report at:
`build/bundle_stats.html`

Open this file in your browser to analyze your bundle size and composition.

## Babel Configuration

The project includes a `.babelrc` file with:
- `@babel/preset-env` for modern JavaScript features
- `@babel/preset-react` for React JSX support
- `@babel/preset-typescript` for TypeScript compilation
- `@babel/plugin-transform-runtime` for optimized runtime helpers

## Directory Structure

```
config/
├── webpack.dev.config.js    # Development webpack configuration
└── webpack.prod.config.js   # Production webpack configuration
build/                       # Webpack production build output
├── bundle_stats.html       # Bundle analyzer report
└── ...                     # Built assets
dist/                       # Webpack development build output (if any)
```

## Migration Notes

- The existing CRA scripts remain unchanged and functional
- Webpack scripts are additional options for custom builds
- All existing dependencies and functionality are preserved
- Bundle analysis is available for both development and production builds
