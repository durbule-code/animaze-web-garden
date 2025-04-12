
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WebsiteCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  delay?: number;
  className?: string;
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({
  title,
  description,
  imageUrl,
  category,
  delay = 0,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isExpanded) return;
    
    const card = cardRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setMousePosition({ x, y });
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: delay * 0.1,
        ease: [0.4, 0.0, 0.2, 1]  
      } 
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "website-card group cursor-pointer",
        isExpanded ? "website-card-expanded" : "hover:z-10",
        className
      )}
      initial="hidden"
      animate="visible"
      variants={variants}
      onClick={toggleExpand}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isExpanded 
          ? 'none' 
          : `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`,
        transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
      }}
    >
      <div className="relative w-full h-full flex flex-col">
        <div className="relative overflow-hidden" style={{ height: isExpanded ? '60%' : '200px' }}>
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="absolute top-2 right-2 bg-primary/90 text-white text-xs px-2 py-1 rounded-full">
            {category}
          </div>
        </div>
        
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
          <p className={`text-sm text-muted-foreground ${isExpanded ? 'block' : 'line-clamp-2'}`}>
            {description}
          </p>
          
          {isExpanded && (
            <div className="mt-4">
              <h4 className="text-md font-semibold mb-2">Features</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Responsive design</li>
                <li>Modern UI elements</li>
                <li>Fast loading times</li>
                <li>SEO optimized</li>
              </ul>
              
              <div className="mt-6 flex justify-center">
                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md transition">
                  Visit Website
                </button>
              </div>
            </div>
          )}
        </div>
        
        {isExpanded && (
          <button 
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              toggleExpand();
            }}
          >
            <X size={20} />
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default WebsiteCard;
