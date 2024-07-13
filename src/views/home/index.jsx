import React, { useEffect, useState } from "react";
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
  return (
    <>
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
