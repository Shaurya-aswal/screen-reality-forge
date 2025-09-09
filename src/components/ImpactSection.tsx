import { Users, TrendingUp, Globe } from "lucide-react";

const ImpactSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Impact
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transforming agriculture in Kerala through technology and innovation
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Why it matters for farmers
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Increased Productivity</h4>
                    <p className="text-muted-foreground">Access to expert advice improves crop yields and farming efficiency</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Better Access to Schemes</h4>
                    <p className="text-muted-foreground">Easy information about government subsidies and support programs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Language Accessibility</h4>
                    <p className="text-muted-foreground">Voice and text support in Malayalam makes technology accessible to all</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 sm:p-8 shadow-lg border border-border">
              <div className="text-center mb-6">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">1 Crore+</div>
                <p className="text-muted-foreground">Farmers in Kerala can benefit from our platform</p>
              </div>
              
              <div className="border-t border-border pt-6">
                <h4 className="font-semibold text-foreground mb-4 text-center">
                  Supporting UN Sustainable Development Goals
                </h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🌾</div>
                    <p className="text-sm font-medium text-foreground">Zero Hunger</p>
                  </div>
                  
                  <div className="bg-accent/20 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🌱</div>
                    <p className="text-sm font-medium text-foreground">Sustainable Agriculture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;