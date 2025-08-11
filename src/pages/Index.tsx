import { useState } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import ProfileCard from "@/components/ProfileCard";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />;
      case "resume":
        return (
          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold gradient-text mb-6">Resume</h2>
            <p className="text-muted-foreground">Resume section coming soon...</p>
          </div>
        );
      case "portfolio":
        return (
          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold gradient-text mb-6">Portfolio</h2>
            <p className="text-muted-foreground">Portfolio section coming soon...</p>
          </div>
        );
      case "faq":
        return (
          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold gradient-text mb-6">FAQ</h2>
            <p className="text-muted-foreground">FAQ section coming soon...</p>
          </div>
        );
      case "contact":
        return (
          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold gradient-text mb-6">Contact</h2>
            <p className="text-muted-foreground">Contact section coming soon...</p>
          </div>
        );
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <Header />
      
      {/* Navigation */}
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      
      {/* Main Content */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card - Fixed on left */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProfileCard />
          </div>
          
          {/* Content Area */}
          <div className="lg:col-span-2">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
