import { Users, TrendingUp, Globe } from "lucide-react";

const ImpactSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-primary/5 via-accent/10 to-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
              Our <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Transforming agriculture in Kerala through cutting-edge technology and sustainable innovation
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-16">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                Why it matters for <span className="gradient-text">farmers</span>
              </h3>
              
              <div className="space-y-6">
                <div className="feature-card rounded-2xl p-6 sm:p-8 group">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Increased Productivity</h4>
                      <p className="text-muted-foreground text-lg leading-relaxed">Access to expert AI-driven advice that improves crop yields by up to 30% and enhances overall farming efficiency through data-driven insights</p>
                    </div>
                  </div>
                </div>
                
                <div className="feature-card rounded-2xl p-6 sm:p-8 group">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-br from-accent/20 to-primary/20 p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Better Access to Schemes</h4>
                      <p className="text-muted-foreground text-lg leading-relaxed">Instant access to comprehensive information about government subsidies, support programs, and agricultural schemes tailored to your specific needs</p>
                    </div>
                  </div>
                </div>
                
                <div className="feature-card rounded-2xl p-6 sm:p-8 group">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-br from-primary-glow/30 to-primary/20 p-4 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Language Accessibility</h4>
                      <p className="text-muted-foreground text-lg leading-relaxed">Natural voice and text communication in Malayalam and English, making advanced technology accessible to every farmer regardless of digital literacy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="card-enhanced rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent"></div>
                
                <div className="relative z-10">
                  <div className="mb-10">
                    <div className="text-6xl sm:text-8xl font-black gradient-text mb-4 animate-scale-in">1 Crore+</div>
                    <p className="text-xl sm:text-2xl text-muted-foreground font-medium">Farmers in Kerala can benefit from our platform</p>
                  </div>
                  
                  <div className="border-t border-gradient-to-r from-transparent via-border to-transparent pt-8">
                    <h4 className="text-2xl font-bold text-foreground mb-8">
                      Supporting UN <span className="gradient-text">SDGs</span>
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="feature-card rounded-2xl p-6 sm:p-8 group">
                        <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform">🌾</div>
                        <h5 className="text-lg font-bold text-foreground mb-2">Goal 2</h5>
                        <p className="text-sm font-medium text-muted-foreground">Zero Hunger</p>
                      </div>
                      
                      <div className="feature-card rounded-2xl p-6 sm:p-8 group">
                        <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
                        <h5 className="text-lg font-bold text-foreground mb-2">Goal 15</h5>
                        <p className="text-sm font-medium text-muted-foreground">Sustainable Agriculture</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border/30">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">95%</div>
                      <p className="text-xs text-muted-foreground">Accuracy</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">24/7</div>
                      <p className="text-xs text-muted-foreground">Available</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">30%</div>
                      <p className="text-xs text-muted-foreground">Yield ↑</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center animate-fade-in-up">
            <div className="card-enhanced rounded-3xl p-8 sm:p-12 max-w-5xl mx-auto">
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Join the <span className="gradient-text">Agricultural Revolution</span>
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Be part of Kerala's digital farming transformation. Get access to AI-powered agricultural insights that are changing lives across the state.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground px-10 py-4 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Get Started Today
                </button>
                <button className="border-2 border-primary text-primary px-10 py-4 rounded-2xl font-bold text-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;