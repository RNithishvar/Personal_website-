import { useEffect } from 'react';
import Lenis from 'lenis';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Magnetic effect implementation for buttons/links
    const magneticElements = document.querySelectorAll('.magnetic');
    
    magneticElements.forEach((element) => {
      element.addEventListener('mousemove', (e) => {
        const position = element.getBoundingClientRect();
        const x = e.clientX - position.left - position.width / 2;
        const y = e.clientY - position.top - position.height / 2;
        
        // Apply transform
        element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });

      element.addEventListener('mouseleave', () => {
        element.style.transform = 'translate(0px, 0px)';
        element.style.transition = 'transform 0.5s ease';
      });
      
      element.addEventListener('mouseenter', () => {
        element.style.transition = 'none';
      });
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-accent/30 selection:text-foreground">
      <Cursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Skills />
      </main>

      <Contact />
    </div>
  );
}

export default App;
