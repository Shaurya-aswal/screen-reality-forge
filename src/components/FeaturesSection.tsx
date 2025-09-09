import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

const FeaturesSection = () => {
  const FeatureOne = () => {
    return (
      <div>
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-2">
          Harvesting Dreams
        </p>
        <p className="font-normal text-base text-white/90 mb-4">
          Kerala's Agricultural Legacy Reimagined
        </p>
        <p className="font-normal text-sm sm:text-base max-w-lg text-neutral-200">
          ✅ Voice + Text Chat in Malayalam & English<br/>
          ✅ Government Schemes Information<br/>
          ✅ Real-time Weather Updates
        </p>
      </div>
    );
  };

  const FeatureTwo = () => {
    return (
      <div>
        <p className="font-bold text-xl sm:text-2xl md:text-3xl text-white mb-2">
          Cultivating Growth
        </p>
        <p className="font-normal text-sm text-white/90 mb-3">
          Hands-On Farming, Kerala's Heritage
        </p>
        <p className="font-normal text-xs sm:text-sm max-w-lg text-neutral-200">
          ✅ Crop & Pest Advisory<br/>
          ✅ Smart Irrigation Reminders<br/>
          ✅ Expert Disease Prevention
        </p>
      </div>
    );
  };

  const FeatureThree = () => {
    return (
      <div>
        <p className="font-bold text-xl sm:text-2xl md:text-3xl text-white mb-2">
          Bundles of Joy
        </p>
        <p className="font-normal text-sm text-white/90 mb-3">
          Community & Abundance in Every Harvest
        </p>
        <p className="font-normal text-xs sm:text-sm max-w-lg text-neutral-200">
          ✅ Community Support<br/>
          ✅ Harvest Optimization<br/>
          ✅ Sustainable Farming
        </p>
      </div>
    );
  };

  const FeatureFour = () => {
    return (
      <div>
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-2">
          Harvesting Intelligence
        </p>
        <p className="font-normal text-base text-white/90 mb-4">
          AI-Powered Guidance for Kerala Farmers
        </p>
        <p className="font-normal text-sm sm:text-base max-w-lg text-neutral-200">
          ✅ Personalized Recommendations<br/>
          ✅ RAG + Fine-tuned LLM Technology<br/>
          ✅ Smart Agricultural Insights
        </p>
      </div>
    );
  };

  const cards = [
    {
      id: 1,
      content: <FeatureOne />,
      className: "md:col-span-2",
      thumbnail: "/lovable-uploads/dbe884c3-b406-4ca7-bd56-d65d1c520d96.png",
    },
    {
      id: 2,
      content: <FeatureTwo />,
      className: "col-span-1",
      thumbnail: "/lovable-uploads/a24bd889-92ce-4312-8fc5-98f1a127265e.png",
    },
    {
      id: 3,
      content: <FeatureThree />,
      className: "col-span-1",
      thumbnail: "/lovable-uploads/f26473ac-2faa-4b25-a393-86dd74bf77c9.png",
    },
    {
      id: 4,
      content: <FeatureFour />,
      className: "md:col-span-2",
      thumbnail: "/lovable-uploads/5c3c6b38-e7be-40cc-ba84-e15980a6330a.png",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Key Features
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive agricultural assistance designed specifically for Kerala farmers
            </p>
          </div>
          
          <div className="min-h-[600px] sm:min-h-[700px] lg:min-h-[800px]">
            <LayoutGrid cards={cards} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;