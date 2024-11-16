import React, { useState } from "react";
import { GraduationCap, Shield, Award } from "lucide-react";
import NavBar from "./components/NavBar";
import ErrorBoundary from "./components/ErrorBoundary";

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const App: React.FC = () => {
  const [isWalletModalOpen, setWalletModalOpen] = useState<boolean>(false);

  // Features Section Component
  const Features: React.FC = () => (
    <div className="py-20 bg-white w-full">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 px-8">
        {/* Feature 1 */}
        <FeatureCard
          icon={<Shield className="h-8 w-8 text-indigo-600" strokeWidth={1.5} />}
          title="Secure Verification"
          description="Blockchain-powered certificates that cannot be forged or tampered with."
        />

        {/* Feature 2 */}
        <FeatureCard
          icon={<Award className="h-8 w-8 text-indigo-600" strokeWidth={1.5} />}
          title="Digital Certificates"
          description="Issue and manage digital certificates as unique NFTs for each class completion."
        />

        {/* Feature 3 */}
        <FeatureCard
          icon={<GraduationCap className="h-8 w-8 text-indigo-600" strokeWidth={1.5} />}
          title="Student Portal"
          description="Easy-to-use dashboard for students to access and share their achievements."
        />
      </div>
    </div>
  );

  // FeatureCard Component for reusable feature blocks
  const FeatureCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }> = ({ icon, title, description }) => (
    <div className="group flex flex-col items-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-indigo-100 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-100/20 w-full">
      <div className="p-4 rounded-full bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-4 text-gray-600 text-center">{description}</p>
    </div>
  );

  // Hero Section Component
  const Hero: React.FC = () => (
    <div className="pt-32 pb-20 bg-gradient-to-b from-indigo-50 via-white to-white w-full">
      <div className="text-center w-full px-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text sm:text-6xl md:text-7xl">
          The Future of Academic Credentials
        </h1>
        <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-600 md:text-xl">
          Transform your academic certificates into secure, verifiable digital assets. 
          Join the revolution in educational certification.
        </p>
        <div className="mt-8">
          <button
            className="px-8 py-4 text-lg font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            onClick={() => setWalletModalOpen(true)} // Open wallet modal
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <ErrorBoundary>
      <DynamicContextProvider
        settings={{
          environmentId: import.meta.env.VITE_DYNAMIC_ENV_ID!,
          walletConnectors: [EthereumWalletConnectors],
        }}
      >
        <div className="min-h-screen bg-white w-full">
          <NavBar onConnectWallet={() => setWalletModalOpen(true)} />
          <Hero />
          <Features />
        </div>
      </DynamicContextProvider>
    </ErrorBoundary>
  );
};

export default App;
