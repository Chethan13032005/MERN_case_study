import { useDesignHubStore } from '../store/store';

export function UserProfile() {
  const user = useDesignHubStore((s) => s.user);
  const setUser = useDesignHubStore((s) => s.setUser);

  if (!user) return <button onClick={() => setUser({ id: 'u1', name: 'Alex' })}>Login</button>;
  
  return <div>Welcome, {user.name}</div>;
}