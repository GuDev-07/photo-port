import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Hero } from '../../modules/Hero';
import { PortfolioGallery } from '../../modules/PortfolioGallery';
import { FeedbackSection } from '../../modules/FeedbackSection';
import { ContactForm } from '../../modules/ContactForm';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PortfolioGallery />
        <FeedbackSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};
