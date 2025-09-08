import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Goodbye
              <br />
              <span className="text-foreground">information</span>
              <br />
              <span className="text-foreground">overload</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Keep up with the topics and trends you care about, without the overwhelm
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-light text-primary-foreground px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                GET STARTED FOR FREE
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-muted-foreground hover:text-foreground px-8 py-6 text-lg font-medium flex items-center gap-2 rounded-lg hover:bg-secondary/50 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                SEE HOW IT WORKS
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/94ac2e36-70bf-452f-a24a-60dd4ff2dd1c.png" 
                alt="Professional with tablet in a modern digital environment" 
                className="w-full max-w-lg mx-auto"
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