import React from 'react';
import { useLocation } from 'react-router-dom';
import { BottomNavigation } from './BottomNavigation';

interface MobileLayoutProps {
  children: React.ReactNode;
}

export const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
  const location = useLocation();
  const showBottomNav = location.pathname !== '/';
  const isChatPage = location.pathname === '/chat';

  return (
    <div className="min-h-screen bg-background mobile-container">
      <main className={`${showBottomNav ? 'pb-20' : ''} ${isChatPage ? 'h-screen flex flex-col' : ''} mobile-safe-area`}>
        {children}
      </main>
      {showBottomNav && <BottomNavigation />}
    </div>
  );
};
