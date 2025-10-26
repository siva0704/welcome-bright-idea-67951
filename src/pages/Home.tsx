import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import StaggerGrid from "@/components/StaggerGrid";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, Package } from "lucide-react";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

const Home = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const scrollProgress = useScrollProgress();

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    // Disable parallax on mobile devices
    if (window.innerWidth < 768) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x: x / 20, y: y / 20 });
  };

  const stats = [
    { icon: Award, value: "25+", label: "Years Experience" },
    { icon: Package, value: "1000+", label: "Products" },
    { icon: Globe, value: "10+", label: "Countries Served" },
  ];

  const categories = [
    { name: "Bolts & Studs", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789" },
    { name: "Nuts & Fasteners", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837" },
    { name: "Threaded Rods", image: "https://images.unsplash.com/photo-1581092160607-ee67865f7e78" },
    { name: "Forged Components", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789" },
  ];

  const testimonials = [
    { text: "Reliable partner for heavy-duty bolts and precision components.", author: "Manufacturing Director" },
    { text: "Excellent quality and on-time delivery for our automotive needs.", author: "Supply Chain Manager" },
    { text: "Their forged components meet the highest international standards.", author: "Engineering Lead" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress" 
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
      <Header />
      
      {/* Hero Section with Video */}
      <section 
        className="relative overflow-hidden text-primary-foreground py-24 md:py-32 min-h-[600px] flex items-center"
        onMouseMove={handleMouseMove}
      >
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&h=1080&fit=crop"
        >
          <source src="https://cdn.coverr.co/videos/coverr-industrial-manufacturing-5179/1080p.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlay with Parallax */}
        <ParallaxSection speed={0.3} className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-primary/90 via-accent/85 to-primary/90 transition-transform duration-100 ease-out"
            style={{
              transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
            }}
          />
        </ParallaxSection>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <AnimatedSection animation="reveal-left" speed="slow">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Precision Fasteners for a Stronger Tomorrow
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="blur-fade" delay={1}>
              <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
                Leading manufacturer and exporter of high-quality industrial fasteners and forged components since 2000.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="elastic-bounce" delay={2}>
              <MagneticButton size="lg" onClick={() => navigate("/products")}>
                Explore Products
              </MagneticButton>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <StaggerGrid 
            pattern="wave" 
            animation="elastic-bounce" 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="text-center profile-card-hover">
                <CardContent className="pt-6">
                  <div className="card-content-inner">
                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary animate-float" />
                    <h3 className="text-4xl font-heading font-bold text-foreground mb-2">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="blur-fade">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground">
              Our Product Categories
            </h2>
          </AnimatedSection>
          <StaggerGrid 
            pattern="wave" 
            animation="perspective-left" 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categories.map((category, index) => (
              <Card key={index} className="overflow-hidden cursor-pointer profile-card-hover group scroll-perspective">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent gradient-overlay" />
                  <h3 className="absolute bottom-4 left-4 text-white font-heading font-bold text-xl card-content-inner">
                    {category.name}
                  </h3>
                </div>
              </Card>
            ))}
          </StaggerGrid>
          <AnimatedSection animation="elastic-bounce" delay={5}>
            <div className="text-center mt-8">
              <MagneticButton variant="outline" onClick={() => navigate("/products")}>
                View All Products
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slide-rotate-left">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground">
              What Our Clients Say
            </h2>
          </AnimatedSection>
          <StaggerGrid 
            pattern="wave" 
            animation="elastic-bounce" 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="profile-card-hover">
                <CardContent className="pt-6">
                  <div className="card-content-inner">
                    <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                    <p className="text-sm font-medium text-foreground">— {testimonial.author}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
