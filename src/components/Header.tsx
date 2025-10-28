import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import CircularMenu from "./CircularMenu";
import SideMenu from "./SideMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCircularMenuOpen, setIsCircularMenuOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [justClosed, setJustClosed] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Industries", path: "/industries" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

  const handleMouseEnter = () => {
    if (justClosed) return;
    
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsCircularMenuOpen(false);
    }, 200);
    setCloseTimeout(timeout);
  };

  const handleClose = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsCircularMenuOpen(false);
    setJustClosed(true);
    setTimeout(() => setJustClosed(false), 200);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">SF</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-heading font-bold text-foreground">Sangam Fasteners</h1>
              <p className="text-xs text-muted-foreground">Pvt Ltd</p>
            </div>
          </Link>

          {/* Centered Circular Menu Trigger - Desktop Only */}
          <button
            onClick={() => setIsCircularMenuOpen(!isCircularMenuOpen)}
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 p-3 text-foreground hover:text-primary transition-all duration-300 group"
            aria-label="Toggle circular menu"
          >
            <div className="relative w-8 h-6 flex flex-col justify-between items-center">
              <span className="w-full h-0.5 bg-current transition-all duration-300 group-hover:-translate-y-0.5"></span>
              <span className="text-[10px] font-medium transition-opacity duration-300">MENU</span>
              <span className="w-full h-0.5 bg-current transition-all duration-300 group-hover:translate-y-0.5"></span>
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>

      </div>
    </header>

    {/* Circular Menu Overlay - Desktop */}
      <CircularMenu 
        isOpen={isCircularMenuOpen} 
        onClose={handleClose}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* Side Menu - Mobile */}
      <SideMenu 
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
  </>
  );
};

export default Header;
