import { MessageCircle, Shield, Sprout, CloudRain, Target } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Voice + Text Chat",
      description: "Communicate in Malayalam & English through voice or text for maximum accessibility",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Government Schemes",
      description: "Get updated information on all Kerala government schemes and subsidies for farmers",
      color: "text-green-600"
    },
    {
      icon: Sprout,
      title: "Crop & Pest Advisory",
      description: "Expert advice on crop selection, pest management, and disease prevention",
      color: "text-emerald-600"
    },
    {
      icon: CloudRain,
      title: "Weather & Irrigation",
      description: "Real-time weather updates and smart irrigation reminders for optimal farming",
      color: "text-cyan-600"
    },
    {
      icon: Target,
      title: "Personalized Recommendations",
      description: "Tailored farming advice based on your location, crop type, and seasonal conditions",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-background via-accent/5 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-40 h-40 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
              Key <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive agricultural assistance designed specifically for Kerala farmers with cutting-edge AI technology
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="feature-card rounded-2xl p-8 sm:p-10 group animate-scale-in relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Card Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <IconComponent className={`w-8 h-8 ${feature.color}`} />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary-light rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                      {feature.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">✓</span>
                        </div>
                        <span className="text-sm font-medium text-primary">Active</span>
                      </div>
                      
                      <div className="w-12 h-1 bg-gradient-to-r from-primary via-accent to-primary-light rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  </div>
                  
                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              );
            })}
          </div>
          
          {/* Bottom CTA Section */}
          <div className="text-center mt-16 sm:mt-20 animate-fade-in-up">
            <div className="card-enhanced rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Farming?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Join thousands of Kerala farmers who are already benefiting from AI-powered agricultural assistance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;