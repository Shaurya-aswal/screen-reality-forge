import userTypes from "@/assets/user-types.png";

const SocialProofSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by millions of users worldwide
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="text-center group">
            <div className="mb-8 relative">
              <div className="w-24 h-24 mx-auto bg-primary-glow/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎓</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-foreground mb-4 uppercase tracking-wider text-sm">
              FOR STUDENTS & LEARNERS
            </h3>
            
            <p className="text-muted-foreground leading-relaxed px-4">
              Get instant help with homework, research papers, and complex concepts. Learn faster with personalized explanations and study guides.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="mb-8 relative">
              <div className="w-24 h-24 mx-auto bg-primary-glow/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">💼</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-foreground mb-4 uppercase tracking-wider text-sm">
              FOR PROFESSIONALS
            </h3>
            
            <p className="text-muted-foreground leading-relaxed px-4">
              Streamline your workflow with AI-powered assistance. From writing emails to analyzing data, boost your productivity effortlessly.
            </p>
          </div>
          
          <div className="text-center group">
            <div className="mb-8 relative">
              <div className="w-24 h-24 mx-auto bg-primary-glow/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🚀</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-foreground mb-4 uppercase tracking-wider text-sm">
              FOR BUSINESSES
            </h3>
            
            <p className="text-muted-foreground leading-relaxed px-4">
              Transform your business operations with intelligent automation. Handle customer support, content creation, and strategic planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;