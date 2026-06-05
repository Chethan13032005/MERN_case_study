import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

const AdminPanel = lazy(() => import('./AdminPanel'));
const ProfileSettings = lazy(() => import('./ProfileSettings'));

function App() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
          <Link to="/admin">Admin Panel</Link>
        </nav>

        <h1>EduStream Dashboard</h1>

        <ErrorBoundary>
          <Routes>
            <Route 
              path="/" 
              element={
                <div>
                  <h2>Welcome back!</h2>
                  <button onClick={() => setShowSettings(!showSettings)}>
                    {showSettings ? 'Hide Profile Settings' : 'Load Profile Settings'}
                  </button>
                  
                  {showSettings && (
                    <Suspense fallback={<p>Loading spinner... ⏳</p>}>
                      <ProfileSettings />
                    </Suspense>
                  )}
                </div>
              } 
            />

            <Route 
              path="/admin" 
              element={
                <Suspense fallback={<h2>Loading Admin Panel...</h2>}>
                  <AdminPanel />
                </Suspense>
              } 
            />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;