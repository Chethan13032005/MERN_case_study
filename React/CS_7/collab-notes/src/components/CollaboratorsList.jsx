import { create } from 'zustand';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useCollaboratorStore = create((set) => ({
  collaborators: [],
  setCollaborators: (collaborators) => set({ collaborators }),
}));


const fetchCollaboratorsFromAPI = async () => {
  await new Promise((res) => setTimeout(res, 1000)); 
  return [
    { id: '1', name: 'Alice (Frontend)' },
    { id: '2', name: 'Bob (Backend)' },
    { id: '3', name: 'Charlie (Design)' },
  ];
};


export default function CollaboratorsList() {
  const setCollaborators = useCollaboratorStore((s) => s.setCollaborators);
  const collaborators = useCollaboratorStore((s) => s.collaborators);

  const { data, isLoading } = useQuery({
    queryKey: ['collaborators'],
    queryFn: fetchCollaboratorsFromAPI,
  });

  
  useEffect(() => {
    if (data) {
      setCollaborators(data);
    }
  }, [data, setCollaborators]);

  if (isLoading) return <div>Loading team members...</div>;

  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h3>Active Collaborators</h3>
      <ul>
        {collaborators.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}