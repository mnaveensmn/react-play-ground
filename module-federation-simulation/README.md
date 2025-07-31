# Module Federation Simulation 🚀

This project demonstrates **Micro Frontend architecture** using **Webpack Module Federation**.

## 🏗️ Project Structure

```
module-federation-simulation/
├── provider-app/          # Exposes components (Port 3001)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Button.tsx  # Exposed via Module Federation
│   │   │   └── Header.tsx  # Exposed via Module Federation
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── webpack.config.js   # Module Federation setup (exposes)
│   └── package.json
└── consumer-app/          # Consumes components (Port 3002)
    ├── src/
    │   ├── App.tsx        # Uses remote components
    │   ├── index.tsx
    │   └── types.d.ts     # Type declarations for remote modules
    ├── webpack.config.js  # Module Federation setup (remotes)
    └── package.json
```

## 🚀 How to Run

### Step 1: Install Dependencies

**Provider App:**
```bash
cd provider-app
npm install
```

**Consumer App:**
```bash
cd consumer-app
npm install
```

### Step 2: Start Applications

**Terminal 1 - Start Provider App (must start first):**
```bash
cd provider-app
npm start
```
- Opens at: http://localhost:3001
- Exposes: Button and Header components

**Terminal 2 - Start Consumer App:**
```bash
cd consumer-app
npm start
```
- Opens at: http://localhost:3002
- Consumes components from Provider App

## 🎯 What You'll See

### Provider App (localhost:3001)
- Shows the components that are available for federation
- Demonstrates the Button and Header components locally

### Consumer App (localhost:3002)
- **Remote Header**: Loaded from Provider App
- **Remote Buttons**: Loaded from Provider App with different variants
- **Local Button**: Native to Consumer App
- **Error Handling**: Shows fallback if Provider App is not running

## 🧠 Learning Points

### 1. **Module Federation Configuration**

**Provider App (webpack.config.js):**
```javascript
new ModuleFederationPlugin({
  name: 'providerApp',
  filename: 'remoteEntry.js',
  exposes: {
    './Button': './src/components/Button',
    './Header': './src/components/Header',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
})
```

**Consumer App (webpack.config.js):**
```javascript
new ModuleFederationPlugin({
  name: 'consumerApp',
  remotes: {
    providerApp: 'providerApp@http://localhost:3001/remoteEntry.js',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
})
```

### 2. **Dynamic Imports**
```javascript
const RemoteButton = React.lazy(() => import('providerApp/Button'));
```

### 3. **Error Boundaries & Fallbacks**
- Graceful handling when remote apps are unavailable
- Loading states with Suspense

### 4. **Shared Dependencies**
- React and ReactDOM are shared as singletons
- Prevents version conflicts

## 🔧 Key Technologies

- **Webpack 5**: Module Federation
- **React 18**: Component framework
- **TypeScript**: Type safety
- **Babel**: JavaScript transpilation

## 🚨 Important Notes

1. **Start Order**: Always start Provider App before Consumer App
2. **Port Dependencies**: Consumer App expects Provider App on port 3001
3. **Network**: Both apps must be running for full functionality
4. **Types**: TypeScript declarations help with development experience

## 🎓 Next Steps

- Try modifying components in Provider App and see real-time updates in Consumer App
- Add more components to expose/consume
- Experiment with different module federation patterns
- Add routing and multiple remote apps


#npx cap run android --live-reload --host 192.0.0.2 --port 3002