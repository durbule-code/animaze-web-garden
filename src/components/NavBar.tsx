
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a href="/" className="text-white text-xl font-bold">WebShowcase</a>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Websites', 'Services', 'About', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-primary relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          <div className="flex md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-white focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black z-50 flex flex-col p-8"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-end mb-8">
              <button 
                onClick={toggleMobileMenu} 
                className="text-white focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-6 items-center justify-center flex-grow">
              {['Home', 'Websites', 'Services', 'About', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-2xl hover:text-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={toggleMobileMenu}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
