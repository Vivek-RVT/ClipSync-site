import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Twitter,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "",
    newsletter: false,
    gdprConsent: false,
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.gdprConsent) {
      toast({
        title: "GDPR Consent Required",
        description: "Please agree to our privacy policy to continue.",
        variant: "destructive",
      });
      return;
    }

    // In a real application, this would submit to your backend
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      variant: "default",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      inquiryType: "",
      newsletter: false,
      gdprConsent: false,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help with technical issues and general inquiries",
      contact: "support@clipsync.app",
      availability: "24/7 response within 4 hours",
      primary: true,
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant support for urgent issues",
      contact: "Available in app",
      availability: "Mon-Fri, 9 AM - 5 PM UTC",
      primary: false,
    },
    {
      icon: Phone,
      title: "Enterprise Support",
      description: "Dedicated phone support for enterprise customers",
      contact: "+1 (555) 123-4567",
      availability: "Business hours only",
      primary: false,
    },
  ];

  const socialLinks = [
    { icon: Twitter, name: "Twitter", url: "https://twitter.com/clipsync", handle: "@clipsync" },
    { icon: Github, name: "GitHub", url: "https://github.com/clipsync", handle: "clipsync" },
    { icon: Linkedin, name: "LinkedIn", url: "https://linkedin.com/company/clipsync", handle: "clipsync" },
    { icon: Globe, name: "Blog", url: "https://blog.clipsync.app", handle: "blog.clipsync.app" },
  ];

  const officeLocations = [
    {
      city: "San Francisco",
      address: "123 Tech Street, Suite 400",
      country: "United States",
      timezone: "PST (UTC-8)",
    },
    {
      city: "London",
      address: "45 Innovation Lane, Floor 3",
      country: "United Kingdom", 
      timezone: "GMT (UTC+0)",
    },
    {
      city: "Singapore",
      address: "789 Business Hub, Level 12",
      country: "Singapore",
      timezone: "SGT (UTC+8)",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">
            <Mail className="w-4 h-4 mr-2" />
            Contact & Support
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            We're Here to
            <br />
            <span className="gradient-text">Help You</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Have questions about ClipSync? Need technical support? Want to discuss enterprise solutions? 
            Our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method) => (
              <Card 
                key={method.title} 
                className={`glass-effect rounded-2xl p-8 text-center cursor-pointer transition-all hover:-translate-y-2 ${
                  method.primary 
                    ? "border-primary/50 bg-primary/5" 
                    : "border-white/10 hover:border-primary/30"
                }`}
              >
                <CardContent className="p-0">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                    method.primary 
                      ? "bg-gradient-to-br from-primary to-accent-blue" 
                      : "bg-gradient-to-br from-accent-gold to-accent-purple"
                  }`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                  <div className="text-primary font-medium mb-2">{method.contact}</div>
                  <div className="text-xs text-muted-foreground flex items-center justify-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {method.availability}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Send Us a Message</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <Card className="glass-effect rounded-2xl border-white/10">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="bg-background/50 border-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="bg-background/50 border-white/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <Input
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="bg-background/50 border-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Inquiry Type
                    </label>
                    <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                      <SelectTrigger className="bg-background/50 border-white/20">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Question</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing & Subscriptions</SelectItem>
                        <SelectItem value="enterprise">Enterprise Sales</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="security">Security & Privacy</SelectItem>
                        <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    placeholder="Brief description of your inquiry"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    required
                    className="bg-background/50 border-white/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    placeholder="Please provide details about your inquiry or issue..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                    className="bg-background/50 border-white/20 min-h-[120px] resize-none"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      className="mt-0.5"
                    />
                    <div className="text-sm">
                      <label htmlFor="newsletter" className="font-medium cursor-pointer">
                        Newsletter Subscription
                      </label>
                      <p className="text-muted-foreground text-xs mt-1">
                        Subscribe to our newsletter for product updates, tips, and exclusive offers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="gdpr"
                      checked={formData.gdprConsent}
                      onCheckedChange={(checked) => handleInputChange("gdprConsent", checked as boolean)}
                      className="mt-0.5"
                    />
                    <div className="text-sm">
                      <label htmlFor="gdpr" className="font-medium cursor-pointer">
                        Privacy Policy Agreement *
                      </label>
                      <p className="text-muted-foreground text-xs mt-1">
                        I agree to the processing of my personal data according to ClipSync's{" "}
                        <a href="/docs#privacy" className="text-primary hover:underline">Privacy Policy</a>
                      </p>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full btn-primary"
                  disabled={!formData.gdprConsent}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Our Global Presence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find us around the world. We're committed to providing local support globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office) => (
              <Card key={office.city} className="glass-effect rounded-2xl p-6 border-white/10">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{office.city}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{office.country}</p>
                      <p className="text-sm mb-3">{office.address}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {office.timezone}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Community */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Join Our Community</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Connect with us on social media for the latest updates, tips, and community discussions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((social) => (
              <Card key={social.name} className="glass-effect rounded-2xl p-6 text-center group cursor-pointer border-white/10 hover:border-primary/50 transition-all">
                <CardContent className="p-0">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-blue rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <social.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-1">{social.name}</h3>
                    <p className="text-sm text-muted-foreground">{social.handle}</p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time Guarantee */}
      <section className="py-24 bg-gradient-to-br from-primary via-accent-blue to-accent-purple relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
            24-Hour Response Guarantee
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We're committed to providing fast, helpful support. All inquiries receive 
            a response within 24 hours, often much sooner.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-2">&lt;4h</div>
              <div className="text-white/80 text-sm">Email Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-2">&lt;1h</div>
              <div className="text-white/80 text-sm">Live Chat</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-2">24/7</div>
              <div className="text-white/80 text-sm">Status Updates</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
