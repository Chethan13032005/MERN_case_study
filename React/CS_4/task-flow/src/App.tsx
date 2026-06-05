import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import { NotificationSender } from './component/NotificationSender';
import { NotificationList } from './component/NotificationList';


function Dashboard() {
  const { theme, toggleTheme } = useTheme();

  const appStyle: React.CSSProperties = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#1e1e1e',
    color: theme === 'light' ? '#000000' : '#ffffff',
    minHeight: '100vh',
    padding: '20px',
    fontFamily: 'sans-serif',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={appStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Notifications with Zustand</h2>
        <button 
          onClick={toggleTheme}
          style={{ padding: '8px 12px', cursor: 'pointer', borderRadius: '4px' }}
        >
          Toggle Theme
        </button>
      </div>
      
      <NotificationSender />
      <NotificationList />
    </div>
  );
}


export default function App() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
}


//npm install zustand