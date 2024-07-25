// components/Notification.tsx

import { useState, useEffect } from 'react';
import styles from './Notification.module.scss';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification = ({ message, onClose }: NotificationProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    isVisible && (
      <div className={styles.notification}>
        <p>{message}</p>
        <button onClick={() => setIsVisible(false)}>X</button>
      </div>
    )
  );
};

export default Notification;
