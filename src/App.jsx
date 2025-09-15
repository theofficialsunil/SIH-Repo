import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import VirtualTour from "./components/VirtualTour";
import NarratedWalkthrough from "./components/NarratedWalkthrough";
import MonasteryMap from "./components/MonasteryMap";
import DigitalArchive from "./components/DigitalArchive";
import CulturalCalendar from "./components/CulturalCalendar";
import BookingAndParticipation from "./components/BookingAndParticipation";
import Footer from "./components/Footer";

function App() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <HeroSection />
      <VirtualTour />
      <NarratedWalkthrough />
      <MonasteryMap />
      <DigitalArchive />
      <CulturalCalendar />
      <BookingAndParticipation />
      <Footer />
    </>
  );
}

export default App;
