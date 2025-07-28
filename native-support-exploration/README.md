# Native Support Exploration

This project explores native browser APIs and features with React, webpack, and Capacitor for cross-platform mobile development.

## Available Scripts

### Webpack (Recommended)
- `npm run start:webpack` - Start development server with webpack
- `npm run build:webpack` - Build for production with webpack
- `npm run analyze` - Build and analyze bundle size

### Capacitor Mobile Development
- `npm run cap:build` - Build app and sync with native platforms
- `npm run cap:android` - Open Android project in Android Studio
- `npm run cap:ios` - Open iOS project in Xcode
- `npm run cap:run:android` - Run on Android device/emulator
- `npm run cap:run:ios` - Run on iOS device/simulator

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

## Mobile Development with Capacitor

### Initial Setup (Already Done)
```bash
# Install Capacitor
npm install @capacitor/core @capacitor/cli

# Initialize Capacitor
npx cap init

# Add platforms
npm install @capacitor/ios @capacitor/android
npx cap add ios
npx cap add android

# Install useful plugins
npm install @capacitor/device @capacitor/toast @capacitor/haptics @capacitor/app
```

### Development Workflow

1. **Build and sync your app:**
   ```bash
   npm run cap:build
   ```

2. **For Android development:**
   ```bash
   npm run cap:android
   ```
   This opens the project in Android Studio where you can run it on a device or emulator.

3. **For iOS development (macOS only):**
   ```bash
   npm run cap:ios
   ```
   This opens the project in Xcode where you can run it on a device or simulator.

4. **Quick run commands:**
   ```bash
   npm run cap:run:android  # Run on Android
   npm run cap:run:ios      # Run on iOS
   ```

## Features Implemented

- ✅ **Device Information**: Get platform, model, OS version, etc.
- ✅ **Toast Notifications**: Native toast messages
- ✅ **Haptic Feedback**: Touch feedback on supported devices
- ✅ **App State Monitoring**: Listen to app lifecycle events
- ✅ **Cross-platform**: Runs on web, iOS, and Android

## Project Structure

This project uses:
- **React 19** with TypeScript
- **Webpack 5** for bundling
- **Capacitor 7** for native mobile development
- CSS with modern features
- Hot module replacement in development

## Native Capabilities

The app demonstrates several Capacitor APIs:
- Device information detection
- Platform-specific behavior
- Native UI components (toasts)
- Hardware interaction (haptics)
- App lifecycle management

## Prerequisites for Mobile Development

### Android
- [Android Studio](https://developer.android.com/studio)
- Android SDK (API level 22 or higher)
- Java Development Kit (JDK) 17

### iOS (macOS only)
- [Xcode](https://developer.apple.com/xcode/) 12.0 or later
- iOS 13.0 or later deployment target
- CocoaPods (`sudo gem install cocoapods`)

## Troubleshooting

1. **Android build issues**: Make sure ANDROID_HOME and JAVA_HOME are set correctly
2. **iOS build issues**: Run `npx cap sync ios` and check Xcode for specific errors
3. **Plugin not working**: Ensure you've run `npm run cap:build` after adding new plugins