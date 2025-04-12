
import { useEffect, useRef, useState } from 'react';
import WebsiteCard from './WebsiteCard';
import { motion } from 'framer-motion';

interface Website {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface WebsiteGridProps {
  websites: Website[];
}

const WebsiteGrid = ({ websites }: WebsiteGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!gridRef.current || !isOpen) return;
    
    setIsInteracting(true);
    
    const rect = gridRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const moveX = (mouseX - centerX) / 50; // Further reduced sensitivity
    const moveY = (mouseY - centerY) / 50; // Further reduced sensitivity
    
    // Apply smooth transition for the grid tilt effect
    gridRef.current.style.transform = `perspective(1200px) rotateX(${-moveY * 0.3}deg) rotateY(${moveX * 0.3}deg) translateZ(5px)`;
  };

  const handleMouseLeave = () => {
    if (gridRef.current) {
      setIsInteracting(false);
      // Apply smooth transition back to neutral position
      gridRef.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    }
  };

  const containerVariants = {
    closed: {
      rotateX: 10,
      scale: 0.97,
      opacity: 0
    },
    open: {
      rotateX: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 1, 0.35, 1],
        staggerChildren: 0.08
      }
    }
  };

  return (
    <motion.div 
      className="perspective-container w-full px-4 md:px-12 mx-auto py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        ref={gridRef}
        className="preserve-3d grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-transform duration-500 ease-out"
        variants={containerVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
          willChange: 'transform'
        }}
      >
        {websites.map((website, index) => (
          <WebsiteCard
            key={website.id}
            title={website.title}
            description={website.description}
            imageUrl={website.imageUrl}
            category={website.category}
            delay={index}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default WebsiteGrid;
