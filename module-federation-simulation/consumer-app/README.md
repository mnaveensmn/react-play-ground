# Consumer App - Module Federation Demo

This is the consumer app that demonstrates Module Federation by consuming remote components from the Provider App.

## What it does

- Consumes `Button` and `Header` components from the Provider App (running on port 3001)
- Runs on port 3002
- Demonstrates how micro-frontends can share components across different applications

## Setup

1. Make sure the Provider App is running first:
   ```bash
   cd ../provider-app
   npm install
   npm start
   ```

2. Then run this Consumer App:
   ```bash
   npm install
   npm start
   ```

## Key Files

- `webpack.config.js` - Configures Module Federation to consume remote components
- `src/App.tsx` - Main component that imports and uses remote components
- `src/types.d.ts` - TypeScript definitions for remote modules

## Module Federation Configuration

The consumer app is configured to:
- Run on port 3002
- Consume components from `providerApp@http://localhost:3001/remoteEntry.js`
- Share React and React-DOM dependencies with the provider app

## Learning Points

- Remote components are loaded asynchronously using `React.lazy()`
- Suspense is used to handle loading states
- Shared dependencies prevent duplication of React libraries
- TypeScript support through custom module declarations
