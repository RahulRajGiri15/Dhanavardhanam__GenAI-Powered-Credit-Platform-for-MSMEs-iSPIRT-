
import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import LoanApplication from "../LoanApplication/LoanApplication";
import Footer from "../Footer/Footer";

const MainContent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <LoanApplication />
      </main>
      <Footer />
    </div>
  );
};

export default MainContent;
