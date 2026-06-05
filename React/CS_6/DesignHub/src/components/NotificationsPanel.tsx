import { useDesignHubStore } from '../store/store';

export function NotificationsPanel() {
  const notifications = useDesignHubStore((s) => s.notifications);
  const markAsRead = useDesignHubStore((s) => s.markAsRead);
  const clearNotifications = useDesignHubStore((s) => s.clearNotifications);
  
  const addNotification = useDesignHubStore((s) => s.addNotification);

  const unreadNotifications = notifications.filter((n) => !n.read);

  return (
    <div>
      <button 
        onClick={() => addNotification({ 
          id: Date.now().toString(), 
          message: 'Someone commented on your design!', 
          read: false 
        })}
      >
        Add Test Notification
      </button>

      <ul>
        {unreadNotifications.map((n) => (
          <li key={n.id}>
            {n.message}
            <button onClick={() => markAsRead(n.id)} style={{ marginLeft: '10px' }}>
              Mark as Read
            </button>
          </li>
        ))}
      </ul>
      
      <button onClick={clearNotifications}>Clear All Notifications</button>
    </div>
  );
}