import userTypes from "@/assets/user-types.png";

const SocialProofSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Loved by 15 million teams and individuals
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="text-center group">
            <div className="mb-6 relative">
              <div className="w-24 h-24 mx-auto bg-primary-glow/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">📚</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-3 uppercase tracking-wide text-sm">
              FOR CURIOUS READERS
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Organize all your favorite blogs, news sites, YouTube channels and trusted publications in one place.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="mb-6 relative">
              <div className="w-24 h-24 mx-auto bg-primary-glow/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">💼</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-3 uppercase tracking-wide text-sm">
              FOR BUSY PROFESSIONALS
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Train Leo, your AI research assistant, to read your feeds and filter out the noise.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="mb-6 relative">
              <div className="w-24 h-24 mx-auto bg-primary-glow/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🤝</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-3 uppercase tracking-wide text-sm">
              FOR BUSINESS
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Arm your team with the content they need to accelerate research, marketing, and sales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;