import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNoteStore } from '../store/useNoteStore';

// Simulated API Call
const fetchNotesFromAPI = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    { id: '1', text: 'Welcome to CollabNotes!' },
    { id: '2', text: 'Zustand makes state management easy.' },
  ];
};

export default function NotesList() {
  // Grab state and actions from our Zustand store
  const notes = useNoteStore((s) => s.notes);
  const setNotes = useNoteStore((s) => s.setNotes);

  // Fetch data using React Query
  const { data, isLoading } = useQuery({
    queryKey: ['notes'],
    queryFn: fetchNotesFromAPI,
  });

  // Sync the fetched data into Zustand
  useEffect(() => {
    if (data) {
      setNotes(data);
    }
  }, [data, setNotes]);

  if (isLoading) return <div>Loading notes from cloud...</div>;

  return (
    <div>
      <h2>Active Notes</h2>
      <ul>
        {/* The '?' prevents crashes if 'notes' is ever undefined */}
        {notes?.map((n) => (
          <li key={n.id}>{n.text}</li>
        ))}
        
        {/* Friendly fallback if the array is empty */}
        {notes?.length === 0 && <li style={{listStyle: 'none'}}>No notes found.</li>}
      </ul>
    </div>
  );
}