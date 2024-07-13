import React, { useEffect, useState } from "react";
import Header from "../../app/sections/common/header/header";
import HeroSection from "../../app/sections/hero/heroSection";
import ServicesSection from "../../app/sections/services/servicesSection";
import Team from "../../app/sections/team/Team";
import ApplicationSection from "../../app/sections/application/ApplicationSection";
import SystemsSection from "../../app/sections/systems/SystemsSection";
import Design from "../../app/sections/design/DesignSection";
import OptimizationSection from "../../app/sections/optimization/optimizationSection";
import ConsultingSection from "../../app/sections/consulting/consultingSection";
import Tools from "../../app/sections/tools/ToolsSection";
import Clients from "../../app/sections/clients/ClientsSection";
import Projects from "../../app/sections/projects/projects";
import Work from "../../app/sections/howToWeWork/howToWeWork";
import Contact from "../../app/sections/contactUS/contactUs";

const HomePage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 900);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <Team />
      <ApplicationSection />
      <SystemsSection />
      <Design />
      <OptimizationSection />
      <ConsultingSection />
      <Tools />
      <Clients />
      <Projects />
      <Work />
      <Contact />
    </>
  );
};

export default HomePage;
