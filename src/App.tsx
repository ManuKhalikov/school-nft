import React, { useState } from 'react';
import { Book, GraduationCap, School, LogIn, Shield, Award, } from 'lucide-react';
import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";


import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";


interface NavigationProps {
  onConnectWallet: () => void;
}

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [isWalletModalOpen, setWalletModalOpen] = useState(false);
  const NavBar: React.FC<NavigationProps> = ({ onConnectWallet }) => (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Book className="h-8 w-8 text-indigo-600" strokeWidth={1.5} />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">
              EduChain
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</a>
            
            {!isLoggedIn && (
              <button className="flex items-center px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                <LogIn className="h-4 w-4 mr-2" />
                Account
              </button>
            )}
            
            {isLoggedIn && !userRole && (
              <>
                <button className="flex items-center px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Sign up as Student
                </button>
                <button className="flex items-center px-4 py-2 rounded-full bg-violet-600 text-white hover:bg-violet-700 transition-colors">
                  <School className="h-4 w-4 mr-2" />
                  Sign up as School
                </button>
              </>
            )}
            
            {userRole === 'student' && (
              <button className="flex items-center px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                <GraduationCap className="h-4 w-4 mr-2" />
                <a href="/StudentDash" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</a>
                Dashboard
              </button>
            )}
            
            {userRole === 'school' && (
              <button className="flex items-center px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                <School className="h-4 w-4 mr-2" />
                School Dashboard
              </button>
            )}
          </div>

          <DynamicWidget />
        </div>
      </div>
    </nav>
  );

  const Hero = () => (
    <div className="pt-32 pb-20 bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text sm:text-6xl md:text-7xl">
            The Future of Academic Credentials
          </h1>
          <p className="mt-6 max-w-md mx-auto text-lg text-gray-600 md:text-xl md:max-w-3xl">
            Transform your academic certificates into secure, verifiable digital assets. 
            Join the revolution in educational certification.
          </p>
          <div className="mt-8">
            <button className="px-8 py-4 text-lg font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const Features = () => (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="group flex flex-col items-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-indigo-100 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-100/20">
            <div className="p-4 rounded-full bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
              <Shield className="h-8 w-8 text-indigo-600" strokeWidth={1.5} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Secure Verification</h3>
            <p className="mt-4 text-gray-600 text-center">
              Blockchain-powered certificates that cannot be forged or tampered with.
            </p>
          </div>
          
          <div className="group flex flex-col items-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-indigo-100 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-100/20">
            <div className="p-4 rounded-full bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
              <Award className="h-8 w-8 text-indigo-600" strokeWidth={1.5} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Digital Certificates</h3>
            <p className="mt-4 text-gray-600 text-center">
              Issue and manage digital certificates as unique NFTs for each class completion.
            </p>
          </div>
          
          <div className="group flex flex-col items-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-indigo-100 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-100/20">
            <div className="p-4 rounded-full bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
              <GraduationCap className="h-8 w-8 text-indigo-600" strokeWidth={1.5} />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Student Portal</h3>
            <p className="mt-4 text-gray-600 text-center">
              Easy-to-use dashboard for students to access and share their achievements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <DynamicContextProvider
      settings={{
        // Find your environment id at https://app.dynamic.xyz/dashboard/developer
        environmentId: import.meta.env.VITE_DYNAMIC_ENV_ID!,
        
        walletConnectors: [
          EthereumWalletConnectors
        ],
      }}
    >
    <div className="min-h-screen bg-white">
      <NavBar onConnectWallet={() => setWalletModalOpen(true)}/>
      <Hero />
      <Features />
    </div>
    </DynamicContextProvider>
  );
};

export default HomePage;