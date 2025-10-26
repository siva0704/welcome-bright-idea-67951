import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    productInterest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", productInterest: "", message: "" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918360000000", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact Us</h1>
            <p className="text-lg max-w-3xl text-primary-foreground/90">
              Get in touch with our team for inquiries, quotes, or support
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <AnimatedSection animation="fade-left">
                <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Send Us a Message</h2>
              </AnimatedSection>
              <AnimatedSection animation="fade-left" delay={1}>
                <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Product Interest</label>
                      <Select value={formData.productInterest} onValueChange={(value) => setFormData({ ...formData, productInterest: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a product category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bolts">Bolts & Studs</SelectItem>
                          <SelectItem value="nuts">Nuts & Fasteners</SelectItem>
                          <SelectItem value="rods">Threaded Rods</SelectItem>
                          <SelectItem value="forged">Forged Components</SelectItem>
                          <SelectItem value="machined">Machined Components</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Message *</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        required
                      />
                    </div>
                    
                    <MagneticButton type="submit" className="w-full">
                      Send Message
                    </MagneticButton>
                  </form>
                </CardContent>
              </Card>
              </AnimatedSection>

              {/* WhatsApp Button */}
              <AnimatedSection animation="fade-left" delay={2}>
                <div className="mt-6">
                  <MagneticButton 
                    variant="secondary" 
                    className="w-full"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle className="mr-2" size={18} />
                    Quick Query on WhatsApp
                  </MagneticButton>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Information */}
            <div>
              <AnimatedSection animation="fade-right">
                <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Get in Touch</h2>
              </AnimatedSection>
              
              <div className="space-y-6 mb-8">
                <AnimatedSection animation="fade-right" delay={1}>
                  <Card className="profile-card-hover">
                  <CardContent className="pt-6">
                    <div className="card-content-inner">
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-heading font-bold mb-2 text-foreground">Address</h3>
                          <p className="text-muted-foreground">
                            B-344/1, KSSIDC Industrial Estate<br />
                            Gokul Road, Hubli - 580030<br />
                            Karnataka, India
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </AnimatedSection>

                <AnimatedSection animation="fade-right" delay={2}>
                  <Card className="profile-card-hover">
                  <CardContent className="pt-6">
                    <div className="card-content-inner">
                      <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-heading font-bold mb-2 text-foreground">Phone</h3>
                          <p className="text-muted-foreground">+91-836-XXXXXXX</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </AnimatedSection>

                <AnimatedSection animation="fade-right" delay={3}>
                  <Card className="profile-card-hover">
                  <CardContent className="pt-6">
                    <div className="card-content-inner">
                      <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-heading font-bold mb-2 text-foreground">Email</h3>
                          <a href="mailto:sf_pl@yahoo.co.in" className="text-primary hover:underline">
                            sf_pl@yahoo.co.in
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </AnimatedSection>

                <AnimatedSection animation="fade-right" delay={4}>
                  <Card className="profile-card-hover">
                  <CardContent className="pt-6">
                    <div className="card-content-inner">
                      <div className="flex items-start space-x-4">
                        <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-heading font-bold mb-2 text-foreground">Business Hours</h3>
                          <p className="text-muted-foreground">
                            Monday - Friday<br />
                            9:00 AM - 6:00 PM IST
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </AnimatedSection>
              </div>

              {/* Map */}
              <AnimatedSection animation="fade-right" delay={5}>
                <div className="rounded-lg overflow-hidden shadow-lg h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.4!2d75.1!3d15.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIxJzAwLjAiTiA3NcKwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sangam Fasteners Location"
                />
              </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
