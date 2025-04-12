
import { motion } from 'framer-motion';
import { MouseEventHandler, useRef } from 'react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const { clientX, clientY } = e;
    
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const moveX = (mouseX - centerX) / 20;
    const moveY = (mouseY - centerY) / 20;
    
    const elements = containerRef.current.querySelectorAll('.parallax');
    elements.forEach((el, i) => {
      const depth = Number(el.getAttribute('data-depth')) || 1;
      const htmlEl = el as HTMLElement;
      htmlEl.style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`;
    });
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-[80vh] overflow-hidden flex flex-col items-center justify-center text-center px-4 py-12 md:py-24"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-purple-900 opacity-80"></div>

      <div className="absolute inset-0">
        <div className="absolute parallax" data-depth="0.1" style={{ top: '10%', left: '10%', width: '20px', height: '20px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '50%' }}></div>
        <div className="absolute parallax" data-depth="0.2" style={{ top: '20%', right: '20%', width: '40px', height: '40px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '50%' }}></div>
        <div className="absolute parallax" data-depth="0.3" style={{ bottom: '30%', left: '30%', width: '30px', height: '30px', background: 'rgba(255, 255, 255, 0.15)', borderRadius: '50%' }}></div>
        <div className="absolute parallax" data-depth="0.4" style={{ bottom: '10%', right: '40%', width: '25px', height: '25px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '50%' }}></div>
      </div>

      <div className="z-10 max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
        >
          <span className="text-gradient">Amazing Websites</span> Portfolio
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
        >
          Explore our collection of stunning website designs with beautiful animations and interactive effects.
        </motion.p>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
        >
          <a 
            href="#websites"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Explore Portfolio
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <motion.div 
          className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
