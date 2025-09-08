import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your digital
              <br />
              <span className="text-primary">farming assistant</span>
              <br />
              <span className="text-foreground">for Kerala</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Get expert agricultural advice, weather updates, and crop management solutions tailored for Kerala farmers
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-light text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                START FARMING CHAT
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-muted-foreground hover:text-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-medium flex items-center justify-center gap-2 rounded-lg hover:bg-secondary/50 transition-all duration-300 w-full sm:w-auto"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                HOW IT HELPS
              </Button>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/94ac2e36-70bf-452f-a24a-60dd4ff2dd1c.png" 
                alt="Kerala farmer using digital farming assistance" 
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Clean integrated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/5 via-background to-background -z-10"></div>
    </section>
  );
};

export default HeroSection;