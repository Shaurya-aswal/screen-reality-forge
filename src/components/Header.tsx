import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs sm:text-sm">KF</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-foreground">Kerala Farmer AI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
              Farming Tips
            </a>
            <a href="#" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
              Weather
            </a>
            <a href="#" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
              Market Prices
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Button variant="ghost" className="text-sm sm:text-base text-muted-foreground hover:text-foreground px-3 sm:px-4">
                സൈൻ ഇൻ
              </Button>
            </div>
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;