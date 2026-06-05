import { UserProfile } from './components/UserProfile';
import { FileList } from './components/FileList';
import { CommentsPanel } from './components/CommentsPanel';
import { NotificationsPanel } from './components/NotificationsPanel';

export default function App() {
  return (
    <div>
      <h1>DesignHub Control Tower</h1>
      
      <div>
        <h2>User Profile</h2>
        <UserProfile />
      </div>

      <div>
        <h2>Notifications</h2>
        <NotificationsPanel />
      </div>

      <div>
        <h2>File Manager</h2>
        <FileList />
      </div>

      <div>
        <h2>Comments</h2>
        <CommentsPanel fileId="file-123" />
      </div>
    </div>
  );
}