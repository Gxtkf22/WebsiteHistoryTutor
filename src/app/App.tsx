import { useEffect } from 'react';
import { Hero } from './components/Hero';
import { ForWhom } from './components/ForWhom';
import { Curriculum } from './components/Curriculum';
import { WhySpecial } from './components/WhySpecial';
import { Details } from './components/Details';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <ForWhom />
      <Curriculum />
      <WhySpecial />
      <Details />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
