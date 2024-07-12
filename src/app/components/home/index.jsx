import React from "react";
import Header from "../../sections/common/header/header";
import HeroSection from "../../sections/hero/heroSection";
import ServicesSection from "../../sections/services/servicesSection";
import Team from "../../sections/team/Team";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <Team />
    </>
  );
};

export default HomePage;
