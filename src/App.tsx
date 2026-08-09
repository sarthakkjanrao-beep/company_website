import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './sections/Hero';
import { Solutions } from './sections/Solutions';
import { AIServices } from './sections/AIServices';
import { Testimonials } from './sections/Testimonials';
import { AboutUs } from './sections/AboutUs';
import { CompanyContact } from './sections/CompanyContact';
import { Footer } from './components/layout/Footer';
import { BookingModal } from './components/ui/BookingModal';
// import { ThemeSwitcher } from './components/ui/ThemeSwitcher';

// Chatbot components preserved for future use
// import { ChatbotToggle } from './components/chat/ChatbotToggle';
// import { Chatbot } from './components/chat/Chatbot';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  // const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Track active scroll section smoothly
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'solutions', 'services', 'testimonials', 'about-us', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionChange = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Account for fixed navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen text-white selection:bg-[#3b82f6] selection:text-white">
      {/* Background grain texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Top Floating Glass Navbar */}
      <Navbar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        onBookCall={() => setIsBookingOpen(true)}
      />

      {/* Floating Theme Switcher (Files preserved) */}
      {/* <ThemeSwitcher /> */}

      {/* Chatbot currently muted (Files preserved) */}
      {/* <ChatbotToggle isOpen={isChatOpen} onClick={() => setIsChatOpen(!isChatOpen)} /> */}
      {/* <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} /> */}

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

      {/* All-in-One Smooth Scroll Landing Page */}
      <main className="w-full overflow-x-hidden">
        <Hero
          onBookCall={() => setIsBookingOpen(true)}
          onExplore={() => handleSectionChange('solutions')}
        />
        <div id="services">
          <Solutions onBookCall={() => setIsBookingOpen(true)} />
          <AIServices onBookCall={() => setIsBookingOpen(true)} />
          <Testimonials onBookCall={() => setIsBookingOpen(true)} />
          <AboutUs onBookCall={() => setIsBookingOpen(true)} />
        </div>
        <CompanyContact onBookCall={() => setIsBookingOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onSectionChange={handleSectionChange}
        onBookCall={() => setIsBookingOpen(true)}
      />
    </div>
  );
}

export default App;
