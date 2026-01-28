import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MotionConfig from './lib/MotionConfig';
import LenisProvider from './components/LenisProvider';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <MotionConfig>
      <LenisProvider>
        <App />
      </LenisProvider>
    </MotionConfig>
  </React.StrictMode>
);
