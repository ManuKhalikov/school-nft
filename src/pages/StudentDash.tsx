import React, { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import ProfileSection from '@/components/dashboard/ProfileSection';
import NFTCollection from '@/components/dashboard/NFTCollection';

const StudentDashboard = () => {
  const [currentPath, setCurrentPath] = useState('/dashboard');

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar currentPath={currentPath} onNavigate={handleNavigate} />
      
      <main className="flex-1 overflow-y-auto">
        {currentPath === '/dashboard' && <ProfileSection />}
        {currentPath === '/dashboard/collection' && <NFTCollection />}
      </main>
    </div>
  );
};

export default StudentDashboard;