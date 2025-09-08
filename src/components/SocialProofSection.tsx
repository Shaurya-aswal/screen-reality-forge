import userTypes from "@/assets/user-types.png";

const SocialProofSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by Kerala farmers across all districts
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto px-4 sm:px-0">
          <div className="text-center group">
            <div className="mb-6 sm:mb-8 relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-primary-glow/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl">🌾</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4 uppercase tracking-wider text-sm">
              FOR CROP FARMERS
            </h3>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2 sm:px-4">
              Get personalized advice for rice, coconut, spices, and cash crops. Learn modern farming techniques and pest management.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="mb-6 sm:mb-8 relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-primary-glow/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl">🌦️</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4 uppercase tracking-wider text-sm">
              FOR WEATHER ALERTS
            </h3>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2 sm:px-4">
              Receive real-time monsoon updates, weather forecasts, and seasonal farming guidance specific to Kerala climate.
            </p>
          </div>
          
          <div className="text-center group sm:col-span-2 lg:col-span-1">
            <div className="mb-6 sm:mb-8 relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-primary-glow/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl">💰</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 sm:mb-4 uppercase tracking-wider text-sm">
              FOR MARKET PRICES
            </h3>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2 sm:px-4">
              Stay updated with current market rates, government schemes, and subsidies available for Kerala farmers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;