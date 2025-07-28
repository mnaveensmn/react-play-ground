import React, { useState, useEffect } from 'react';
import './App.css';
import { Capacitor } from '@capacitor/core';
import { Device } from '@capacitor/device';
import { Toast } from '@capacitor/toast';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { App as CapacitorApp } from '@capacitor/app';

interface DeviceInfo {
  platform: string;
  model: string;
  operatingSystem: string;
  osVersion: string;
  webViewVersion: string;
}

const App: React.FC = () => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [isNative, setIsNative] = useState(false);

  useEffect(() => {
    // Check if running on native platform
    setIsNative(Capacitor.isNativePlatform());
    
    // Get device information
    const getDeviceInfo = async () => {
      try {
        const info = await Device.getInfo();
        setDeviceInfo(info);
      } catch (error) {
        console.log('Error getting device info:', error);
      }
    };

    getDeviceInfo();

    // Listen for app state changes (native only)
    if (Capacitor.isNativePlatform()) {
      CapacitorApp.addListener('appStateChange', ({ isActive }) => {
        console.log('App state changed. Is active?', isActive);
      });
    }

    return () => {
      CapacitorApp.removeAllListeners();
    };
  }, []);

  const showToast = async () => {
    try {
      await Toast.show({
        text: 'Hello from Capacitor!',
        duration: 'short',
        position: 'bottom'
      });
    } catch (error) {
      console.log('Toast not available:', error);
      alert('Hello from Web!');
    }
  };

  const triggerHaptic = async () => {
    try {
      await Haptics.impact({ style: ImpactStyle.Light });
    } catch (error) {
      console.log('Haptics not available:', error);
    }
  };

  const handleButtonClick = () => {
    showToast();
    triggerHaptic();
  };

  return (
    <div className="App">
      <div className="content">
        <h1>Native Support Exploration</h1>
        
        <div className="platform-info">
          <h2>Platform Information</h2>
          <p><strong>Running on:</strong> {isNative ? 'Native App' : 'Web Browser'}</p>
          {deviceInfo && (
            <div className="device-info">
              <p><strong>Platform:</strong> {deviceInfo.platform}</p>
              <p><strong>Model:</strong> {deviceInfo.model}</p>
              <p><strong>OS:</strong> {deviceInfo.operatingSystem} {deviceInfo.osVersion}</p>
              <p><strong>WebView:</strong> {deviceInfo.webViewVersion}</p>
            </div>
          )}
        </div>

        <div className="button-container">
          <button className="hello-button" onClick={handleButtonClick}>
            Hello World
          </button>
          <p className="button-description">
            {isNative 
              ? 'This will show a native toast and trigger haptic feedback!' 
              : 'This will show a web alert (Capacitor features work in native apps)'}
          </p>
        </div>

        <div className="features-info">
          <h3>Available Capacitor Features:</h3>
          <ul>
            <li>✅ Device Information</li>
            <li>✅ Toast Notifications</li>
            <li>✅ Haptic Feedback</li>
            <li>✅ App State Monitoring</li>
            <li>🚀 Ready for iOS & Android deployment</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
