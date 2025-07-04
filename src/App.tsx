import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Footer from './components/Footer';
import PrivacyCompliance from './components/PrivacyCompliance';
import TermsOfEngagement from './components/TermsOfEngagement';
import LegalFramework from './components/LegalFramework';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyCompliance />;
      case 'terms':
        return <TermsOfEngagement />;
      case 'legal':
        return <LegalFramework />;
      default:
        return (
          <>
            <Header />
            <Hero />
            <About />
            <Services />
            <Solutions />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      {renderPage()}
      {currentPage === 'home' && <Footer onNavigate={setCurrentPage} />}
      {currentPage !== 'home' && (
        <div className="fixed bottom-8 left-8 z-50">
          <button
            onClick={() => setCurrentPage('home')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            ← Back to Home
          </button>
        </div>
      )}
    </div>
  );
}

export default App;