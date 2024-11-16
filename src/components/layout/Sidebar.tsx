import { Home, Grid, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const Sidebar = ({ currentPath, onNavigate }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: 'Profile', path: '/dashboard' },
    { icon: Grid, label: 'NFT Collection', path: '/dashboard/collection' },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
            <span className="text-indigo-600 font-semibold">KA</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Khusan Akhmedov</h3>
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

export default Sidebar;