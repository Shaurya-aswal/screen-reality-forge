const AboutSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-muted/30 via-background to-accent/10 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About the <span className="gradient-text">Project</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              Our AI-powered chatbot revolutionizes farming in Kerala by providing instant, expert advice on crops, pests, irrigation, weather, and government schemes through seamless Malayalam and English voice and text interfaces.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="card-enhanced rounded-2xl p-8 sm:p-10 animate-slide-in-left">
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground px-6 py-3 rounded-full font-bold text-sm shadow-lg">
                  🏆 SIH Problem Statement: SIH25074
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
                What makes us <span className="gradient-text">unique</span>?
              </h3>
              
              <div className="grid gap-6">
                <div className="feature-card rounded-xl p-6 group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform">
                      🧠
                    </div>
                    <div className="text-xl font-bold text-foreground">RAG Technology</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">Advanced Retrieval Augmented Generation for accurate, context-aware agricultural guidance</p>
                </div>
                
                <div className="feature-card rounded-xl p-6 group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary-glow rounded-lg flex items-center justify-center text-foreground font-bold text-lg group-hover:scale-110 transition-transform">
                      🤖
                    </div>
                    <div className="text-xl font-bold text-foreground">Fine-tuned LLM</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">Specialized AI model trained specifically for Kerala's agricultural conditions and practices</p>
                </div>
                
                <div className="feature-card rounded-xl p-6 group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-accent rounded-lg flex items-center justify-center text-foreground font-bold text-lg group-hover:scale-110 transition-transform">
                      🎤
                    </div>
                    <div className="text-xl font-bold text-foreground">Voice Interface</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">Natural speech recognition and synthesis in both Malayalam and English languages</p>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="card-enhanced rounded-2xl p-8 sm:p-10 text-center">
                  <div className="mb-8">
                    <div className="text-6xl sm:text-7xl font-black gradient-text mb-4">AI</div>
                    <h4 className="text-2xl font-bold text-foreground mb-2">Powered Agriculture</h4>
                    <p className="text-muted-foreground">Bringing cutting-edge technology to Kerala's farming community</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
                      <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                      <p className="text-sm text-muted-foreground font-medium">Always Available</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6 border border-accent/20">
                      <div className="text-3xl font-bold text-primary mb-2">2+</div>
                      <p className="text-sm text-muted-foreground font-medium">Languages</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-primary-glow/20 to-primary/10 rounded-xl p-6 border border-primary-glow/30">
                      <div className="text-3xl font-bold text-primary mb-2">100%</div>
                      <p className="text-sm text-muted-foreground font-medium">Accurate Data</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-accent/20 to-primary-light/10 rounded-xl p-6 border border-accent/30">
                      <div className="text-3xl font-bold text-primary mb-2">∞</div>
                      <p className="text-sm text-muted-foreground font-medium">Scalable</p>
                    </div>
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

export default AboutSection;