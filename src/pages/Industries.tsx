import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerGrid from "@/components/StaggerGrid";
import ParallaxSection from "@/components/ParallaxSection";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Building2, Droplets, Cog, Wind, Hammer } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Car,
      name: "Automotive",
      description: "Precision fasteners for automotive manufacturing and assembly",
      products: "Axel studs, high-tensile bolts, precision nuts",
      caseStudy: "Supplied 50,000+ components for leading automotive manufacturer",
    },
    {
      icon: Building2,
      name: "Construction",
      description: "Heavy-duty fasteners for structural applications",
      products: "Full thread stud bolts, threaded rods, anchor bolts",
      caseStudy: "Infrastructure projects across 5 major Indian cities",
    },
    {
      icon: Droplets,
      name: "Oil & Gas",
      description: "Corrosion-resistant components for harsh environments",
      products: "Stainless steel fasteners, forged fittings, special bolts",
      caseStudy: "Offshore platform maintenance contracts",
    },
    {
      icon: Cog,
      name: "Machinery",
      description: "High-precision components for industrial machinery",
      products: "Double-ended studs, machined parts, custom fasteners",
      caseStudy: "OEM partnerships with machinery manufacturers",
    },
    {
      icon: Wind,
      name: "HVAC",
      description: "Specialized fasteners for HVAC systems",
      products: "Brass inserts, threaded inserts, precision fittings",
      caseStudy: "Commercial HVAC installations nationwide",
    },
    {
      icon: Hammer,
      name: "Mining",
      description: "Robust components for mining equipment",
      products: "Heavy-duty bolts, forged components, wear-resistant parts",
      caseStudy: "Mining equipment maintenance across 3 continents",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="reveal-left" speed="slow">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Industries We Serve</h1>
          </AnimatedSection>
          <AnimatedSection animation="blur-fade" delay={1}>
            <p className="text-lg max-w-3xl text-primary-foreground/90">
              Delivering specialized fastener solutions across diverse industrial sectors
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <StaggerGrid 
            pattern="circular" 
            animation="perspective-left" 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industries.map((industry, index) => (
              <Card key={index} className="profile-card-hover scroll-perspective">
                <CardContent className="pt-6">
                  <div className="card-content-inner">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <industry.icon className="w-8 h-8 text-primary animate-float" />
                    </div>
                    
                    <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">{industry.name}</h3>
                    <p className="text-muted-foreground mb-4">{industry.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-sm text-foreground mb-2">Key Products:</h4>
                      <p className="text-sm text-muted-foreground">{industry.products}</p>
                    </div>
                    
                    <div className="mb-6 p-4 bg-muted rounded-lg">
                      <h4 className="font-medium text-sm text-foreground mb-2">Case Study:</h4>
                      <p className="text-sm text-muted-foreground italic">{industry.caseStudy}</p>
                    </div>
                    
                    <MagneticButton variant="outline" className="w-full">
                      Learn More
                    </MagneticButton>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary to-accent text-primary-foreground overflow-hidden">
        <ParallaxSection speed={0.2} enableMouseParallax className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
        </ParallaxSection>
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection animation="blur-fade">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Need a Custom Solution?
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="blur-fade" delay={1}>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              We specialize in creating tailored fastener solutions for unique industrial requirements
            </p>
          </AnimatedSection>
          <AnimatedSection animation="elastic-bounce" delay={2}>
            <MagneticButton size="lg" variant="secondary" className="animate-pulse-glow">
              Contact Our Team
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
