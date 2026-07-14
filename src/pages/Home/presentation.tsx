import React from "react";
import { ContactForm } from "../../modules/ContactForm/presentation";
import { FeedbackSection } from "../../modules/FeedbackSection/presentation";
import { Footer } from "../../modules/Footer/presentation";
import { Hero } from "../../modules/Hero/presentation";
import { Navbar } from "../../modules/Navbar/presentation";
import { PortfolioGallery } from "../../modules/PortfolioGallery/presentation";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="grow">
        <Hero />
        <PortfolioGallery />
        <FeedbackSection />
        <ContactForm />
        <Footer />
      </main>
    </div>
  );
};
