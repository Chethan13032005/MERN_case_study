import React from 'react';
import { BankingDashboard } from './BankingDashboard';

const App: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      flexDirection: 'column'
    }}>
      <BankingDashboard />
    </div>
  );
};

export default App;