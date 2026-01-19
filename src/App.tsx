import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <>
      {showLanding ? (
        <LandingPage onStart={() => setShowLanding(false)} />
      ) : (
        <Dashboard />
      )}
    </>
  );
}
