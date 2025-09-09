import { Mail, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Kerala Farmers Assistant
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Empowering Kerala farmers with AI-driven agricultural assistance, 
                weather updates, and government scheme information in Malayalam and English.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="mailto:contact@keralafarming.com" 
                  className="bg-primary/10 hover:bg-primary/20 p-3 rounded-lg transition-colors group"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
                
                <a 
                  href="https://github.com/kerala-farming-assistant" 
                  className="bg-primary/10 hover:bg-primary/20 p-3 rounded-lg transition-colors group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
                
                <a 
                  href="https://twitter.com/kerala_farming" 
                  className="bg-primary/10 hover:bg-primary/20 p-3 rounded-lg transition-colors group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
                
                <a 
                  href="https://linkedin.com/company/kerala-farming" 
                  className="bg-primary/10 hover:bg-primary/20 p-3 rounded-lg transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#impact" className="text-muted-foreground hover:text-primary transition-colors">
                    Impact
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#help" className="text-muted-foreground hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#feedback" className="text-muted-foreground hover:text-primary transition-colors">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Kerala Farmers Assistant. Built for SIH25074. 
              <span className="block sm:inline sm:ml-2 mt-2 sm:mt-0">
                Made with ❤️ for Kerala farmers
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;