import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto">
          <div className="text-left lg:pr-8 xl:pr-12 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight tracking-tight">
              Your digital
              <br />
              <span className="text-primary font-extrabold">farming assistant</span>
              <br />
              <span className="text-foreground">for Kerala</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xl leading-relaxed font-medium">
              Get expert agricultural advice, weather updates, and crop management solutions tailored for Kerala farmers
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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
          
          <div className="relative order-1 lg:order-2 lg:pl-4 xl:pl-8">
            <div className="relative z-10 flex justify-center lg:justify-end">
              <img 
                src="/lovable-uploads/94ac2e36-70bf-452f-a24a-60dd4ff2dd1c.png" 
                alt="Kerala farmer using digital farming assistance" 
                className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Clean integrated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-glow/3 via-background to-background -z-10"></div>
    </section>
  );
};

export default HeroSection;