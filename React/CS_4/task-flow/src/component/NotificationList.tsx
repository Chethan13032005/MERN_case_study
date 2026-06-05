import React from 'react';
import { useNotificationStore } from '../notificationStore';

export function NotificationList() {
  const notifications = useNotificationStore((state) => state.notifications);
  const markAsRead = useNotificationStore((state) => state.markAsRead);

  const unreadNotifications = notifications.filter((n) => !n.read);

  return (
    <div>
      <h2>Notifications</h2>
      
      {unreadNotifications.length === 0 ? (
        <p>No unread notifications</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {unreadNotifications.map((notif) => (
            <li key={notif.id} style={{ marginBottom: '10px' }}>
              [{notif.type.toUpperCase()}] {notif.message}
              <button 
                onClick={() => markAsRead(notif.id)} 
                style={{ marginLeft: '10px', cursor: 'pointer' }}
              >
                Mark as Read
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}