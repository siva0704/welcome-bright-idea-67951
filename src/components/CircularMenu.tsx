import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface CircularMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const menuLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Industries", path: "/industries" },
  { name: "Contact", path: "/contact" },
];

const CircularMenu = ({ isOpen, onClose, onMouseEnter, onMouseLeave }: CircularMenuProps) => {
  return (
    <>
      {/* Transparent Bridge Area to prevent hover gaps */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ height: "200px" }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />

      {/* Half-Circle Background Overlay */}
      <div
        className={`fixed top-0 left-1/2 -translate-x-1/2 z-40 transition-all duration-700 ease-out pointer-events-none ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{
          width: isOpen ? "200vw" : "0",
          height: isOpen ? "100vh" : "0",
          borderRadius: "0 0 100% 100%",
          background: "radial-gradient(ellipse at top, hsla(var(--primary) / 0.65), hsla(var(--accent) / 0.60), hsl(0 0% 0% / 0.8))",
          clipPath: "ellipse(100% 100% at 50% 0%)",
          transformOrigin: "top center",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Menu Content */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={(e) => {
          // Prevent closing when clicking inside menu
          e.stopPropagation();
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-8 right-8 text-primary-foreground hover:scale-110 transition-all duration-300 ${
            isOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-180"
          }`}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        {/* Menu Items in Pyramid Layout */}
        <nav className="relative w-full max-w-4xl px-8">
          <div className="flex flex-col items-center space-y-6">
            {menuLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={`text-primary-foreground font-heading font-bold hover:scale-110 transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  fontSize: `${3 - index * 0.3}rem`,
                  transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default CircularMenu;
