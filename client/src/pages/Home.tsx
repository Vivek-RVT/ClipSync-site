import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingCard } from "@/components/PricingCard";
import {
  Shield,
  FolderSync,
  Search,
  History,
  Lock,
  Clock,
  Download,
  Play,
  Users,
  Star,
  Award,
  FileText,
  Image,
  Link2,
  Code,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: History,
      title: "Unlimited Clip Management",
      description: "Save unlimited text clips with one-click copying. All clips stored locally (no internet needed). Delete clips anytime you want.",
      gradient: "from-primary to-accent-blue",
      extra: (
        <Card className="bg-card/50 rounded-xl p-4 border border-border">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Clips saved:</span>
            <span className="text-accent-blue font-bold">∞ Unlimited</span>
          </div>
        </Card>
      ),
    },
    {
      icon: Shield,
      title: "Password Protected",
      description: "Your clipboard data is secured with password protection. All clips are encrypted and stored safely on your device.",
      gradient: "from-accent-purple to-accent-blue",
      extra: (
        <Card className="bg-card/50 rounded-xl p-4 border border-border">
          <div className="flex items-center space-x-2 text-sm">
            <Lock className="w-4 h-4 text-accent-blue" />
            <span className="text-accent-blue">Encrypted & Secure</span>
          </div>
        </Card>
      ),
    },
    {
      icon: Search,
      title: "Instant Search & Filter",
      description: "Find clips instantly by typing in the search bar. Filter by category or show all clips. No clip limit - all clips visible unless filtered.",
      gradient: "from-accent-gold to-primary",
      extra: (
        <Card className="bg-card/50 rounded-xl p-3 border border-border">
          <div className="flex items-center space-x-2 text-sm">
            <Search className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground italic">Search your clips...</span>
          </div>
        </Card>
      ),
    },
    {
      icon: FolderSync,
      title: "Dark Mode UI",
      description: "Beautiful dark mode interface with modern design. Selected clips highlighted with white background for better readability. Rounded corners for smooth edges.",
      gradient: "from-green-500 to-accent-blue",
      extra: (
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-700">
            <span className="text-white text-xs">🌙</span>
          </div>
          <span className="text-sm text-muted-foreground">Modern Dark Theme</span>
        </div>
      ),
    },
    {
      icon: Clock,
      title: "Auto-Save & Settings",
      description: "Automatic save - clips remain after app restarts. Refresh button on top right next to settings. Settings panel for future customization options.",
      gradient: "from-red-500 to-accent-purple",
      extra: (
        <Card className="bg-card/50 rounded-xl p-3 border border-border">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Auto-save:</span>
            <span className="text-green-400">✓ Enabled</span>
          </div>
        </Card>
      ),
    },
  ];

  // Single free app - no pricing plans needed
  const appFeatures = [
    { name: "Unlimited text clips storage", included: true },
    { name: "One-click copying", included: true },
    { name: "Password protection", included: true },
    { name: "Instant search & filter", included: true },
    { name: "Dark mode interface", included: true },
    { name: "Local offline storage", included: true },
    { name: "Automatic save on restart", included: true },
    { name: "Settings & refresh panel", included: true },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 morphing-blob animate-float-3d opacity-20"></div>
        <div className="absolute top-40 right-20 w-24 h-24 morphing-blob animate-bounce-3d opacity-15" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-28 morphing-blob animate-rotate-y opacity-10" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 morphing-blob animate-scale-pulse opacity-25" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Enhanced 3D Animated Background */}
        <div className="absolute inset-0 hero-gradient">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float-3d"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-float-3d" style={{animationDelay: '-3s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent-purple/20 rounded-full blur-3xl animate-float-3d" style={{animationDelay: '-6s'}}></div>
          
          {/* 3D Geometric Elements */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-accent-gold/30 to-accent-blue/30 rotate-45 animate-pulse-glow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-gradient-to-tr from-accent-purple/40 to-primary/40 rounded-full animate-bounce-3d" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-3/4 left-1/3 w-8 h-20 bg-gradient-to-b from-accent-blue/25 to-transparent skew-x-12 animate-rotate-y" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-fade-in-up">
            {/* Hero Badge */}
            <Badge variant="secondary" className="mb-8 glass-effect border-white/10 px-4 py-2 card-3d">
              <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse mr-2"></div>
              100% Free & Open Source • Created by Vivek Rawat (RVT)
            </Badge>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-glow">
              Free Clipboard
              <br />
              <span className="gradient-text">Manager</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Save unlimited text clips with one-click copying. Password-protected, dark mode UI, 
              with instant search and local offline storage.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Link href="/download">
                <Button size="lg" className="btn-primary px-8 py-4 text-lg font-semibold group rotating-border">
                  <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                  Download Free
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold card-3d glass-effect border-white/20">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center space-x-8 text-muted-foreground text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-accent-gold" />
                <span>Password Protected</span>
              </div>
              <div className="flex items-center space-x-2">
                <FolderSync className="w-4 h-4 text-accent-blue" />
                <span>100% Offline</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-accent-gold" />
                <span>Free Forever</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <div className="relative max-w-4xl mx-auto">
              {/* Main App Window */}
              <Card className="glass-effect rounded-3xl p-6 shadow-2xl border-white/10 card-3d floating-element">
                {/* App Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-muted-foreground text-sm">ClipSync Dashboard</div>
                </div>

                <CardContent className="p-0">
                  <div className="space-y-4">
                    {/* Search Bar */}
                    <Card className="bg-card/50 rounded-2xl p-4 border-border">
                      <div className="flex items-center space-x-3">
                        <Search className="w-5 h-5 text-muted-foreground" />
                        <div className="text-muted-foreground">Search your clipboard history...</div>
                      </div>
                    </Card>

                    {/* Clipboard Items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="bg-card/50 rounded-2xl p-4 border-border hover:border-primary/50 transition-all cursor-pointer card-3d animate-slide-in-left" style={{animationDelay: '0.8s'}}>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-accent-blue">
                            <Code className="w-3 h-3 mr-1" />
                            Text
                          </Badge>
                          <span className="text-muted-foreground text-xs">2 min ago</span>
                        </div>
                        <p className="text-foreground text-sm">const greeting = "Hello, World!";</p>
                      </Card>

                      <Card className="bg-card/50 rounded-2xl p-4 border-border hover:border-primary/50 transition-all cursor-pointer card-3d animate-slide-in-right" style={{animationDelay: '1s'}}>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-accent-gold">
                            <FileText className="w-3 h-3 mr-1" />
                            Document
                          </Badge>
                          <span className="text-muted-foreground text-xs">5 min ago</span>
                        </div>
                        <p className="text-foreground text-sm">Meeting notes from project sync...</p>
                      </Card>

                      <Card className="bg-card/50 rounded-2xl p-4 border-border hover:border-primary/50 transition-all cursor-pointer card-3d animate-slide-in-left" style={{animationDelay: '1.2s'}}>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-accent-purple">
                            <Link2 className="w-3 h-3 mr-1" />
                            URL
                          </Badge>
                          <span className="text-muted-foreground text-xs">10 min ago</span>
                        </div>
                        <p className="text-foreground text-sm">https://github.com/vivekrvt/clipsync</p>
                      </Card>

                      <Card className="bg-card/50 rounded-2xl p-4 border-border hover:border-primary/50 transition-all cursor-pointer card-3d animate-slide-in-right" style={{animationDelay: '1.4s'}}>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-green-400">
                            <Code className="w-3 h-3 mr-1" />
                            JSON
                          </Badge>
                          <span className="text-muted-foreground text-xs">15 min ago</span>
                        </div>
                        <p className="text-foreground text-sm">{"{ \"name\": \"ClipSync\", \"status\": \"active\" }"}</p>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Security Badge */}
              <div className="absolute -top-4 -right-4 glass-effect rounded-2xl p-4 animate-pulse-glow border-white/10 floating-element">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/30 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-40 h-40 morphing-blob animate-float-3d opacity-10" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/4 right-10 w-32 h-32 morphing-blob animate-scale-pulse opacity-15" style={{animationDelay: '5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-glow">
              Everything You Need in a
              <br />
              <span className="gradient-text">Clipboard Manager</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced features designed for professionals who demand security,
              efficiency, and seamless workflow integration.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="animate-fade-in-up" 
                style={{animationDelay: `${0.2 * index}s`}}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  gradient={feature.gradient}
                >
                  {feature.extra}
                </FeatureCard>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up" style={{animationDelay: '1.5s'}}>
            <Link href="/features">
              <Button size="lg" variant="outline" className="group card-3d glass-effect border-white/20">
                View All Features
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Free App Section */}
      <section className="py-24 relative overflow-hidden">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-24 h-24 bg-gradient-to-br from-accent-gold/20 to-primary/20 rounded-full animate-bounce-3d" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-1/4 w-36 h-36 bg-gradient-to-tl from-accent-blue/15 to-accent-purple/15 rounded-full animate-rotate-y" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-glow">
              100% Free & 
              <span className="gradient-text"> Open Source</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Created by Vivek Rawat (RVT). Available for Windows and Linux. No hidden costs, no subscriptions.
            </p>
          </div>

          {/* Single Feature Card */}
          <div className="max-w-md mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="card-3d">
              <PricingCard
                name="ClipSync"
                price="Free Forever"
                description="Local clipboard manager with password encryption"
                features={appFeatures}
                buttonText="Download Now"
                buttonVariant="default"
                popular={true}
                onButtonClick={() => {
                  window.location.href = "/download";
                }}
              />
            </div>
          </div>

          {/* Free Forever Badge */}
          <div className="text-center mt-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="inline-flex items-center space-x-2 text-green-400 glass-effect rounded-full px-6 py-3 border border-green-400/20 animate-pulse-glow">
              <Shield className="w-5 h-5" />
              <span>100% Free Forever • No Registration Required</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-accent-blue to-accent-purple relative overflow-hidden">
        {/* Enhanced 3D Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-3d"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-3d" style={{animationDelay: '-3s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/3 rounded-full blur-3xl animate-scale-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Geometric 3D Elements */}
          <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rotate-45 animate-rotate-y" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/15 rounded-full animate-bounce-3d" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            Ready to Supercharge
            <br />
            Your Clipboard?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
            Join thousands of professionals who trust ClipSync
            to secure and organize their digital workflow.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/download">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-bold transition-all transform hover:scale-105">
                Download Free
                <Download className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/features">
              <Button size="lg" variant="outline" className="border-2 border-white/30 hover:border-white px-8 py-4 text-lg font-semibold text-white">
                View Features
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center space-x-8 text-white/60">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>4.9/5 on Product Hunt</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>50,000+ Happy Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-accent-gold" />
              <span>Editor's Choice</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
