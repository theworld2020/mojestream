import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Privacy from './components/Privacy';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import CSAEPolicyPage from './components/CSAEPolicyPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import { ROUTE_HOME, ROUTE_CSAE_POLICY, ROUTE_PRIVACY_POLICY } from './constants';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState(ROUTE_HOME);

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentRoute) {
      case ROUTE_CSAE_POLICY:
        return <CSAEPolicyPage />;
      case ROUTE_PRIVACY_POLICY:
        return <PrivacyPolicyPage />;
      case ROUTE_HOME:
      default:
        // Render Home Page components
        return (
          <>
            <Hero />
            <Features />
            <Screenshots />
            <Privacy />
            <FooterCTA />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-white selection:bg-teal-500 selection:text-white font-sans flex flex-col">
      <Navbar onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;