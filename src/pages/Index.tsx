
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import WebsiteGrid from '@/components/WebsiteGrid';
import NavBar from '@/components/NavBar';
import { motion } from 'framer-motion';

// Sample website data
const websiteData = [
  {
    id: 1,
    title: "Corporate Business Template",
    description: "A professional corporate website template with a sleek design and modern interface. Perfect for businesses looking to establish a strong online presence.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
    category: "Business"
  },
  {
    id: 2,
    title: "Healthcare Portal",
    description: "A comprehensive healthcare website template featuring patient portals, appointment scheduling, and health resources. Built with accessibility in mind.",
    imageUrl: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop",
    category: "Healthcare"
  },
  {
    id: 3,
    title: "E-commerce Shop",
    description: "A feature-rich online store template with product showcases, shopping cart, and secure checkout. Optimized for conversions and user experience.",
    imageUrl: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=2071&auto=format&fit=crop",
    category: "E-commerce"
  },
  {
    id: 4,
    title: "Creative Portfolio",
    description: "A stunning portfolio website for creatives, featuring image galleries, project showcases, and smooth animations. Perfect for artists and designers.",
    imageUrl: "https://images.unsplash.com/photo-1567722066597-2bdf36d13481?q=80&w=2070&auto=format&fit=crop",
    category: "Portfolio"
  },
  {
    id: 5,
    title: "Restaurant & Dining",
    description: "An elegant website template for restaurants and cafes with menu displays, reservation system, and location information. Appetizing design included.",
    imageUrl: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=2074&auto=format&fit=crop",
    category: "Restaurant"
  },
  {
    id: 6,
    title: "Educational Platform",
    description: "A comprehensive learning management system with course catalogs, student dashboards, and interactive learning tools. Built for educational institutions.",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop",
    category: "Education"
  },
  {
    id: 7,
    title: "Travel & Adventure",
    description: "An immersive travel website with destination guides, booking systems, and vivid imagery. Designed to inspire wanderlust and plan adventures.",
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
    category: "Travel"
  },
  {
    id: 8,
    title: "Real Estate Listings",
    description: "A property marketplace template with listing features, search filters, and agent profiles. Optimized for showcasing properties effectively.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    category: "Real Estate"
  },
  {
    id: 9,
    title: "Fitness & Wellness",
    description: "A dynamic website for fitness centers and wellness businesses, featuring class schedules, membership options, and health resources.",
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    category: "Fitness"
  }
];

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    // For background parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('.scroll-parallax');
      
      parallaxElements.forEach((element) => {
        const speed = Number(element.getAttribute('data-speed')) || 0.2;
        const offset = -scrollY * speed;
        (element as HTMLElement).style.transform = `translateY(${offset}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="websites" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Website Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our diverse collection of website templates, each crafted with precision and attention to detail.
            </p>
          </motion.div>
          
          <WebsiteGrid websites={websiteData} />
        </div>
      </section>
      
      <section id="services" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive web development services tailored to your needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { 
                title: "Web Design", 
                description: "Custom, responsive websites designed to impress and convert.", 
                icon: "🎨" 
              },
              { 
                title: "Development", 
                description: "Cutting-edge technologies powering robust, scalable applications.", 
                icon: "💻" 
              },
              { 
                title: "E-commerce", 
                description: "Online stores designed to sell products and services effectively.", 
                icon: "🛒" 
              },
              { 
                title: "SEO Optimization", 
                description: "Strategic improvements to increase your search engine rankings.", 
                icon: "📈" 
              },
              { 
                title: "Content Management", 
                description: "User-friendly systems to update and manage your content easily.", 
                icon: "📝" 
              },
              { 
                title: "Maintenance", 
                description: "Ongoing support and updates to keep your website running smoothly.", 
                icon: "🔧" 
              }
            ].map((service, index) => (
              <motion.div 
                key={service.title}
                className="bg-card rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We are a team of passionate web designers and developers dedicated to creating stunning, functional websites that deliver results.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With over 10 years of experience in the industry, we've helped hundreds of businesses establish a strong online presence and achieve their digital goals.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                {['Innovation', 'Quality', 'Reliability', 'Creativity'].map((value) => (
                  <span key={value} className="bg-secondary px-4 py-2 rounded-full text-sm">
                    {value}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/ac0af90c-9726-4d4c-ba25-a63b0e230653.png" 
                  alt="Website Gallery" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-xl">
                <p className="font-bold text-xl">10+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Ready to start your project? Reach out to us and let's create something amazing together.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <motion.form 
              className="bg-card p-8 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-md bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-md bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-md bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-3 rounded-md bg-secondary/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 hover:shadow-lg"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
      
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-white text-2xl font-bold">WebShowcase</h3>
              <p className="text-gray-400 mt-2">Creating stunning websites since 2013</p>
            </div>
            
            <div className="flex space-x-4">
              {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <hr className="border-gray-800 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 WebShowcase. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <a 
                  key={link} 
                  href="#" 
                  className="text-gray-400 text-sm hover:text-gray-300 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
