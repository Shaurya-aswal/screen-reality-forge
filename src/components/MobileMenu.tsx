import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Farming Tips
              </a>
              <a
                href="#"
                className="text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Weather
              </a>
              <a
                href="#"
                className="text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Market Prices
              </a>
              <div className="pt-2 border-t border-border">
                <Button
                  variant="ghost"
                  className="w-full text-left justify-start text-muted-foreground hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  സൈൻ ഇൻ
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;