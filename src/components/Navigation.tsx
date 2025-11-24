import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  activeSection: 'hero' | 'about' | 'projects' | 'contact';
  onSectionChange: (section: 'hero' | 'about' | 'projects' | 'contact') => void;
  isTransitioning: boolean;
}

export function Navigation({ activeSection, onSectionChange, isTransitioning }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero' as const, label: 'Home' },
    { id: 'about' as const, label: 'About' },
    { id: 'projects' as const, label: 'Projects' },
    { id: 'contact' as const, label: 'Contact' },
  ];

  const handleNavClick = (section: 'hero' | 'about' | 'projects' | 'contact') => {
    onSectionChange(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-800 relative">
      {/* Pixel decorations on nav */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-neutral-700"></div>
      <div className="absolute top-0 right-0 w-2 h-2 bg-neutral-700"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Different for mobile and desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="tracking-wider flex items-center gap-2"
          >
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-neutral-500"></div>
              <div className="w-2 h-2 bg-neutral-600"></div>
            </div>
            {/* Desktop Logo */}
            <span className="hidden md:block text-xl pixel-title">Portfolio</span>
            {/* Mobile Logo - Compact */}
            <div className="md:hidden flex items-center gap-1">
              <div className="w-8 h-8 border-2 border-neutral-500 flex items-center justify-center relative">
                <span className="pixel-font text-xs">P</span>
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-neutral-600"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-neutral-600"></div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(item.id)}
                disabled={isTransitioning}
                className={`relative px-4 py-2 transition-colors ${
                  activeSection === item.id
                    ? 'text-neutral-50'
                    : 'text-neutral-400 hover:text-neutral-50'
                } disabled:opacity-50 group`}
              >
                {item.label}
                {activeSection === item.id && (
                  <>
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-50"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                    {/* Pixel accent for active */}
                    <div className="absolute bottom-0 left-0 w-1 h-1 bg-neutral-50"></div>
                    <div className="absolute bottom-0 right-0 w-1 h-1 bg-neutral-50"></div>
                  </>
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative p-2 border-2 border-neutral-700 hover:border-neutral-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-neutral-600"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-neutral-600"></div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden"
        >
          <div className="pt-4 pb-2 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20 
                }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleNavClick(item.id)}
                disabled={isTransitioning}
                className={`w-full text-left px-4 py-3 border-2 transition-all relative ${
                  activeSection === item.id
                    ? 'border-neutral-50 bg-neutral-50 text-neutral-950'
                    : 'border-neutral-800 hover:border-neutral-700'
                } disabled:opacity-50`}
              >
                <span className="pixel-font text-xs">{item.label}</span>
                {/* Pixel corners */}
                <div className={`absolute -top-1 -left-1 w-3 h-3 ${
                  activeSection === item.id ? 'bg-neutral-900' : 'bg-neutral-700'
                }`}></div>
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${
                  activeSection === item.id ? 'bg-neutral-900' : 'bg-neutral-700'
                }`}></div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
}