import React, { useState } from 'react';
import {
  useDynamicContext,
  DynamicWidget
} from "@dynamic-labs/sdk-react-core";

import { Book, GraduationCap, School, LogIn } from 'lucide-react';


interface NavigationProps {
  onConnectWallet: () => void;
}

const NavBar: React.FC<NavigationProps> = ({ onConnectWallet }) => {
  const [userRole, setUserRole] = useState<string | null>(null); // Ensure state is properly initialized
  const { primaryWallet, user } = useDynamicContext();

  return (
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
            
              <Book className="h-8 w-8 text-indigo-600" strokeWidth={1.5} />
              
              <a
                href="/"
              >
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">
                EduChain
              </span>
              </a>
            </div>

            <div className="flex items-center space-x-4">
             
              {(primaryWallet || user) && !userRole && (
                <>
                  <button
                    className="flex items-center px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                    onClick={() => setUserRole('student')}
                  >
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Sign up as Student
                  </button>
                  <button
                    className="flex items-center px-4 py-2 rounded-full bg-violet-600 text-white hover:bg-violet-700 transition-colors"
                    onClick={() => setUserRole('school')}
                  >
                    <School className="h-4 w-4 mr-2" />
                    Sign up as School
                  </button>
                </>
              )}

              {userRole === 'student' && (
                <a
                  href="/StudentDash"
                  className="flex items-center px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                >
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Dashboard
                </a>
              )}

              {userRole === 'school' && (
                <a
                  href="/SchoolDash"
                  className="flex items-center px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                >
                  <School className="h-4 w-4 mr-2" />
                  School Dashboard
                </a>
              )}
            </div>

            <DynamicWidget />
          </div>
        </div>
      </nav>
  );
};

export default NavBar;
