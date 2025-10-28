import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Industries", path: "/industries" },
  { name: "Contact", path: "/contact" },
];

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sliding Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[85%] transition-transform duration-700 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "linear-gradient(to left, hsla(var(--primary) / 0.75), hsla(var(--accent) / 0.70), hsl(0 0% 10% / 0.75))",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-8 right-8 text-primary-foreground hover:scale-110 transition-all duration-300 ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
          style={{
            transitionDelay: isOpen ? "400ms" : "0ms"
          }}
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        {/* Menu Items */}
        <nav className="flex flex-col items-center justify-center h-full px-8 space-y-8">
          {menuLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={`text-primary-foreground font-heading font-bold hover:scale-110 transition-all duration-500 ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
              style={{
                fontSize: `${2.5 - index * 0.2}rem`,
                transitionDelay: isOpen ? `${(index + 1) * 100}ms` : "0ms",
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
