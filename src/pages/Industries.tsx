import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import AnimatedSection from "@/components/AnimatedSection";
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
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Industries We Serve</h1>
            <p className="text-lg max-w-3xl text-primary-foreground/90">
              Delivering specialized fastener solutions across diverse industrial sectors
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={(index % 3) + 1}>
                <Card className="profile-card-hover">
                <CardContent className="pt-6">
                  <div className="card-content-inner">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <industry.icon className="w-8 h-8 text-primary" />
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              We specialize in creating tailored fastener solutions for unique industrial requirements
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={1}>
            <MagneticButton size="lg" variant="secondary">
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
