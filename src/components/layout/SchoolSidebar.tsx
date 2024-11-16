import React from 'react';
import { Home, BookOpen, Users, Award, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SchoolSidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const SchoolSidebar = ({ currentPath, onNavigate }: SchoolSidebarProps) => {
  const menuItems = [
    { icon: Home, label: 'School Profile', path: '/school/profile' },
    { icon: BookOpen, label: 'Classes', path: '/school/classes' },
    { icon: Users, label: 'Manage School', path: '/school/manage' },
    { icon: Award, label: 'Mint NFT', path: '/school/mint' },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
            <span className="text-indigo-600 font-semibold">SC</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">School name</h3>
            <p className="text-sm text-gray-500">0x1234...5678</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => onNavigate(item.path)}
            className={cn(
              "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors",
              currentPath === item.path && "bg-indigo-50 text-indigo-600"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button 
          onClick={() => onNavigate('/logout')}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};