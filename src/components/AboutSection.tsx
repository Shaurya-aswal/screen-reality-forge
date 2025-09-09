const AboutSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About the Project
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Our chatbot helps farmers get instant advice on crops, pests, irrigation, weather, and government schemes. 
            Supports Malayalam + English voice and text for seamless communication.
          </p>
          
          <div className="bg-card rounded-xl p-6 sm:p-8 shadow-lg border border-border mb-8">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold text-sm">
                SIH Problem Statement: SIH25074
              </div>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              What makes us unique?
            </h3>
            
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-accent/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-2">RAG</div>
                <p className="text-sm text-muted-foreground">Retrieval Augmented Generation</p>
              </div>
              
              <div className="bg-accent/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-2">Fine-tuned LLM</div>
                <p className="text-sm text-muted-foreground">Specialized Agricultural AI</p>
              </div>
              
              <div className="bg-accent/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-2">Speech Interface</div>
                <p className="text-sm text-muted-foreground">Voice + Text Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;