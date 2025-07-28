# Native Support Exploration

This project explores native browser APIs and features with React and webpack.

## Available Scripts

### Webpack (Recommended)
- `npm run start:webpack` - Start development server with webpack
- `npm run build:webpack` - Build for production with webpack
- `npm run analyze` - Build and analyze bundle size

### React Scripts
- `npm start` - Start development server with create-react-app
- `npm run build` - Build for production with create-react-app
- `npm test` - Run tests
- `npm run eject` - Eject from create-react-app (not recommended)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run start:webpack
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

This project uses webpack configuration for bundling and includes:
- TypeScript support
- CSS loading
- Asset handling
- Bundle analysis
- Hot module replacement in development


## Capacitor Configuration

1. `npm install @capacitor/core @capacitor/cli`

2. `npm install @capacitor/core @capacitor/cli`

3. `npx cap init`

4. `npm install @capacitor/ios @capacitor/android`

5. Update the Capacitor config to use the correct build directory for webpack builds and add some basic configuration: `capacitor.config.ts`

6. `npm run build:webpack`

7. `npx cap add ios`

8. `npx cap add android`

9. `npx cap run ios` or `npx cap run android`