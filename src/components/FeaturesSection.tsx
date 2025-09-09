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
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Key Features
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive agricultural assistance designed specifically for Kerala farmers
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-6 sm:p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    ✅ {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;