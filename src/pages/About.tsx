import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import AnimatedSection from "@/components/AnimatedSection";
import StaggerGrid from "@/components/StaggerGrid";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Target, Users } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const About = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const values = [
    { icon: CheckCircle, title: "Quality Assurance", description: "Rigorous testing and ISO-compliant manufacturing" },
    { icon: Target, title: "Customer-Centric Innovation", description: "Customized solutions for specific industry needs" },
    { icon: Users, title: "Sustainable Practices", description: "Environmentally responsible production methods" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="reveal-left" speed="slow">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">About Sangam Fasteners</h1>
          </AnimatedSection>
          <AnimatedSection animation="blur-fade" delay={1}>
            <p className="text-lg max-w-3xl text-primary-foreground/90">
              Trusted manufacturer and exporter of precision-engineered industrial fasteners since 2000
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="slide-rotate-right">
              <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Our Story</h2>
            </AnimatedSection>
            <AnimatedSection animation="blur-fade" delay={1}>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Sangam Fasteners Pvt Ltd is a trusted name in the engineering sector, specializing in manufacturing and exporting fasteners. Located at B-344/1, KSSIDC Industrial Estate, Gokul Road, Hubli - 580030, Karnataka, India, we leverage advanced forging and machining technologies to produce components that meet international standards.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="blur-fade" delay={2}>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction drives us to serve industries like automotive, construction, oil & gas, and machinery. With over 25 years of experience, we've established ourselves as reliable partners for businesses worldwide.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="elastic-bounce">
            <h2 className="text-3xl font-heading font-bold mb-12 text-center text-foreground">Our Journey</h2>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-8">
            <AnimatedSection animation="slide-rotate-left" delay={1}>
              <div className="flex gap-4">
                <div className="w-24 flex-shrink-0 font-heading font-bold text-primary text-lg">2000</div>
                <div>
                  <h3 className="font-heading font-bold mb-2 text-foreground">Company Founded</h3>
                  <p className="text-muted-foreground">Established in Hubli with a vision to deliver quality fasteners</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-rotate-right" delay={2}>
              <div className="flex gap-4">
                <div className="w-24 flex-shrink-0 font-heading font-bold text-primary text-lg">2008</div>
                <div>
                  <h3 className="font-heading font-bold mb-2 text-foreground">Export Expansion</h3>
                  <p className="text-muted-foreground">Began exporting to international markets</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-rotate-left" delay={3}>
              <div className="flex gap-4">
                <div className="w-24 flex-shrink-0 font-heading font-bold text-primary text-lg">2015</div>
                <div>
                  <h3 className="font-heading font-bold mb-2 text-foreground">Advanced Manufacturing</h3>
                  <p className="text-muted-foreground">Introduced CNC machining and forging technologies</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-rotate-right" delay={4}>
              <div className="flex gap-4">
                <div className="w-24 flex-shrink-0 font-heading font-bold text-primary text-lg">2025</div>
                <div>
                  <h3 className="font-heading font-bold mb-2 text-foreground">Industry Leader</h3>
                  <p className="text-muted-foreground">Serving 10+ countries with 1000+ product variants</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="perspective-left">
            <h2 className="text-3xl font-heading font-bold mb-12 text-center text-foreground">Our Core Values</h2>
          </AnimatedSection>
          <StaggerGrid 
            pattern="circular" 
            animation="elastic-bounce" 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <Card key={index} className="profile-card-hover scroll-perspective">
                <CardContent className="pt-6 text-center">
                  <div className="card-content-inner">
                    <value.icon className="w-12 h-12 mx-auto mb-4 text-primary animate-float" />
                    <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection animation="blur-fade">
              <h2 className="text-3xl font-heading font-bold mb-6 text-center text-foreground">Get in Touch</h2>
            </AnimatedSection>
            <AnimatedSection animation="slide-rotate-left" delay={1}>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <AnimatedSection animation="elastic-bounce" delay={2}>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                    </AnimatedSection>
                    <AnimatedSection animation="elastic-bounce" delay={3}>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </AnimatedSection>
                    <AnimatedSection animation="elastic-bounce" delay={4}>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={5}
                          required
                        />
                      </div>
                    </AnimatedSection>
                    <AnimatedSection animation="elastic-bounce" delay={5}>
                      <MagneticButton type="submit" className="w-full">
                        Submit Inquiry
                      </MagneticButton>
                    </AnimatedSection>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
