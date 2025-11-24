import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { PixelTransition } from './components/PixelTransition';

export default function App() {
  const [activeSection, setActiveSection] = useState<'hero' | 'about' | 'projects' | 'contact'>('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextSection, setNextSection] = useState<'hero' | 'about' | 'projects' | 'contact'>('hero');

  const handleSectionChange = (section: 'hero' | 'about' | 'projects' | 'contact') => {
    if (section === activeSection || isTransitioning) return;
    
    setNextSection(section);
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveSection(section);
    }, 600);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 overflow-hidden">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange}
        isTransitioning={isTransitioning}
      />
      
      <PixelTransition isActive={isTransitioning} />

      <main className="relative">
        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {activeSection === 'hero' && <Hero onNavigate={handleSectionChange} />}
          {activeSection === 'about' && <About />}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'contact' && <Contact />}
        </div>
      </main>
    </div>
  );
}