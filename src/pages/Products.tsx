import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerGrid from "@/components/StaggerGrid";
import MagneticText from "@/components/MagneticText";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

const Products = () => {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [gridColumns, setGridColumns] = useState(3);
  const scrollProgress = useScrollProgress();

  const products = [
    {
      category: "bolts",
      name: "Full Thread Stud Bolts",
      description: "High-tensile steel bolts for structural applications",
      material: "Carbon Steel, Stainless Steel",
      sizes: "M6 to M100",
      standards: "ASTM, DIN, ISO",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
    },
    {
      category: "bolts",
      name: "Double-Ended Studs",
      description: "Versatile connectors for machinery assembly",
      material: "Alloy Steel, Brass",
      sizes: "M8 to M64",
      standards: "ASME, BS",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    },
    {
      category: "bolts",
      name: "Axel Studs",
      description: "Precision-engineered for automotive axles",
      material: "High-Grade Steel",
      sizes: "M10 to M48",
      standards: "ISO, SAE",
      image: "https://images.unsplash.com/photo-1581092160607-ee67865f7e78",
    },
    {
      category: "nuts",
      name: "Hex Nuts",
      description: "Standard and lock nuts in various grades",
      material: "Carbon Steel, SS304, SS316",
      sizes: "M6 to M100",
      standards: "DIN, ISO, ASTM",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
    },
    {
      category: "nuts",
      name: "Special Fasteners",
      description: "Brass inserts and threaded inserts",
      material: "Brass, Bronze, Stainless Steel",
      sizes: "Custom",
      standards: "ISO, DIN",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    },
    {
      category: "rods",
      name: "Threaded Rods",
      description: "Continuous threading for construction and piping",
      material: "Mild Steel, Stainless Steel",
      sizes: "M6 to M100",
      standards: "ASTM, DIN",
      image: "https://images.unsplash.com/photo-1581092160607-ee67865f7e78",
    },
    {
      category: "forged",
      name: "Drop Forged Balls",
      description: "Machined parts for valves and assemblies",
      material: "Carbon Steel, Alloy Steel",
      sizes: "Custom",
      standards: "ASME, API",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
    },
    {
      category: "machined",
      name: "Precision Turned Parts",
      description: "Fittings for oil & gas and renewable energy",
      material: "Stainless Steel, Brass",
      sizes: "Custom",
      standards: "ISO, ASME",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    },
  ];

  const filteredProducts = categoryFilter === "all" 
    ? products 
    : products.filter(p => p.category === categoryFilter);

  // Detect grid columns based on screen size
  useEffect(() => {
    const updateGridColumns = () => {
      const width = window.innerWidth;
      if (width < 640) setGridColumns(1); // mobile
      else if (width < 1024) setGridColumns(2); // tablet
      else setGridColumns(3); // desktop
    };

    updateGridColumns();
    window.addEventListener('resize', updateGridColumns);
    return () => window.removeEventListener('resize', updateGridColumns);
  }, []);

  // Handle individual card hover effect
  useEffect(() => {
    const handleMouseEnter = (e: Event) => {
      const card = e.currentTarget as HTMLElement;
      const index = parseInt(card.getAttribute('data-card-index') || '0');
      const cardBelowIndex = index + gridColumns;
      
      // Find the card directly below
      const cardBelow = document.querySelector(`[data-card-index="${cardBelowIndex}"]`);
      if (cardBelow) {
        cardBelow.classList.add('card-pushed-down');
      }
    };

    const handleMouseLeave = (e: Event) => {
      const card = e.currentTarget as HTMLElement;
      const index = parseInt(card.getAttribute('data-card-index') || '0');
      const cardBelowIndex = index + gridColumns;
      
      // Remove the push effect from the card below
      const cardBelow = document.querySelector(`[data-card-index="${cardBelowIndex}"]`);
      if (cardBelow) {
        cardBelow.classList.remove('card-pushed-down');
      }
    };

    // Attach listeners to all product cards
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [filteredProducts, gridColumns]);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full">
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress" 
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="reveal-left" speed="slow">
            <MagneticText className="text-4xl md:text-5xl font-heading font-bold mb-6" animation="slide-up">
              Our Products
            </MagneticText>
          </AnimatedSection>
          <AnimatedSection animation="blur-fade" delay={1}>
            <p className="text-lg max-w-3xl text-primary-foreground/90">
              Comprehensive range of industrial fasteners and precision components
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <AnimatedSection animation="fade-right">
              <h2 className="text-xl font-heading font-bold text-foreground">Browse by Category</h2>
            </AnimatedSection>
            <AnimatedSection animation="slide-rotate-left" delay={1}>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-64">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="bolts">Bolts & Studs</SelectItem>
                  <SelectItem value="nuts">Nuts & Fasteners</SelectItem>
                  <SelectItem value="rods">Threaded Rods</SelectItem>
                  <SelectItem value="forged">Forged Components</SelectItem>
                  <SelectItem value="machined">Machined Components</SelectItem>
                </SelectContent>
              </Select>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-muted/30 overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-full">
          <StaggerGrid 
            pattern="wave" 
            animation="perspective-left" 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0}
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </StaggerGrid>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
