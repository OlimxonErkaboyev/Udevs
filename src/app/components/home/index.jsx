import React from "react";
import Header from "../../sections/common/header/header";
import HeroSection from "../../sections/hero/heroSection";
import ServicesSection from "../../sections/services/servicesSection";
import Team from "../../sections/team/Team";
import ApplicationSection from "../../sections/application/ApplicationSection";
import SystemsSection from "../../sections/systems/SystemsSection";
import Design from "../../sections/design/DesignSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <Team />
      <ApplicationSection />
      <SystemsSection />
      <Design />
    </>
  );
};

export default HomePage;
