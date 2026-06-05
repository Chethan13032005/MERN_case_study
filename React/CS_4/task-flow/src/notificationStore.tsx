import { create } from 'zustand';

export interface Notification {
  id: string;
  message: string;
  type: 'info' | 'error' | 'success';
  read: boolean;
}

interface NotificationStore {
  notifications: Notification[];
  addNotification: (message: string, type: Notification['type']) => void;
  markAsRead: (id: string) => void;
}


export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  addNotification: (message, type) => {
    set((state) => ({
      notifications: [
        ...state.notifications,
        {
          id: crypto.randomUUID(),
          message,
          type,
          read: false,
        },
      ],
    }));
  },
  markAsRead: (id) => {
    set((state) => ({
      notifications: state.notifications.map((notifi) =>
        notifi.id === id ? { ...notifi, read: true } : notifi
      ),
    }));
  },
}));
