import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mnaveensmn.consumerapp',
  appName: 'Consumer App',
  webDir: 'build',
  server: {
    cleartext: true,
    allowNavigation: [
      '192.0.0.2:3001',
      '192.0.0.2:3002',
      'localhost:3001',
      'localhost:3002'
    ]
  },
  ios: {
    allowsLinkPreview: false,
    webContentsDebuggingEnabled: true,
    contentInset: 'automatic'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
  },
};

export default config;
