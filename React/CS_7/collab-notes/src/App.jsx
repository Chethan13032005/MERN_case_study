import React from 'react';
import NotesList from './components/NotesList';
import CollaboratorsList from './components/CollaboratorsList';
import { usePreferencesStore } from './store/usePreferencesStore';
import { useSessionStore } from './store/useSessionStore';
import { useHistoryStore } from './store/useHistoryStore';

export default function App() {
  const { theme, fontSize, setTheme, setFontSize } = usePreferencesStore();
  const { userId, role, login, logout } = useSessionStore();
  const { history, clearHistory } = useHistoryStore();

  const handleLogin = () => {
    login('collab-user-99', 'mock-token', Date.now() + 3600000);
  };

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#222', color: theme === 'light' ? '#000' : '#fff', fontSize: `${fontSize}px`, padding: '20px', minHeight: '100vh' }}>
      <h1>CollabNotes Dashboard</h1>
      
      <div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
        <button onClick={() => setFontSize(fontSize === 14 ? 16 : 14)}>Toggle Font</button>
      </div>

      <br />

      <div>
        {userId ? (
          <div>
            <span>User: {userId} (Role: {role}) </span>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>

      <hr />

      <NotesList />
      
      <hr />

      <CollaboratorsList />

      <hr />

      <div>
        <h3>Action History <button onClick={clearHistory}>Clear</button></h3>
        <ul>
          {/* Removed the TypeScript types from entry and idx here */}
          {history.map((entry, idx) => (
            <li key={idx}>
              {entry.action} on {entry.noteId} at {new Date(entry.timestamp).toLocaleTimeString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}