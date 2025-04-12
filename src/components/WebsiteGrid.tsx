
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
  const [perspective, setPerspective] = useState(1000);
  const [rotateX, setRotateX] = useState(20);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setRotateX(0);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!gridRef.current) return;
    
    const rect = gridRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const moveX = (mouseX - centerX) / 50;
    const moveY = (mouseY - centerY) / 50;
    
    gridRef.current.style.transform = `perspective(${perspective}px) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
  };

  const handleMouseLeave = () => {
    if (gridRef.current) {
      gridRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
  };

  const containerVariants = {
    closed: {
      rotateX: 20,
      scale: 0.9,
      opacity: 0
    },
    open: {
      rotateX: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="perspective-container w-full px-4 md:px-12 mx-auto py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        ref={gridRef}
        className="preserve-3d grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={containerVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center'
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
