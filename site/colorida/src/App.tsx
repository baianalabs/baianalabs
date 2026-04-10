/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import ChatWidget from "./components/ChatWidget";
import RegistrationPortal from "./components/RegistrationPortal";

export default function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface bg-antigravity-gradient relative">
      <Logo isWatermark={true} />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <Testimonials />
        <About />
        <ContactForm />
        <CTA onActivate={() => setIsRegistrationOpen(true)} />
      </main>
      <Footer />
      <ChatWidget />
      <RegistrationPortal 
        isOpen={isRegistrationOpen} 
        onClose={() => setIsRegistrationOpen(false)} 
      />
    </div>
  );
}
