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
      icon: Shield,
      title: "Military-Grade Encryption",
      description: "Your clipboard data is protected with AES-256 encryption. Every item is encrypted locally before storage.",
      gradient: "from-primary to-accent-blue",
      extra: (
        <Card className="bg-card/50 rounded-xl p-4 border border-border">
          <code className="text-sm text-accent-blue">
            AES.encrypt(clipboardData, userKey)
          </code>
        </Card>
      ),
    },
    {
      icon: FolderSync,
      title: "Cross-Platform FolderSync",
      description: "Seamlessly sync your clipboard across Windows, macOS, Linux, Android, and iOS devices in real-time.",
      gradient: "from-accent-purple to-accent-blue",
      extra: (
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-accent-blue/20 rounded-lg flex items-center justify-center">
            <span className="text-accent-blue text-sm">W</span>
          </div>
          <div className="w-8 h-8 bg-muted/50 rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground text-sm">M</span>
          </div>
          <div className="w-8 h-8 bg-accent-gold/20 rounded-lg flex items-center justify-center">
            <span className="text-accent-gold text-sm">L</span>
          </div>
          <div className="w-8 h-8 bg-green-400/20 rounded-lg flex items-center justify-center">
            <span className="text-green-400 text-sm">A</span>
          </div>
        </div>
      ),
    },
    {
      icon: Search,
      title: "Intelligent Search",
      description: "Find any clipboard item instantly with AI-powered search. Search by content, type, date, or custom tags.",
      gradient: "from-accent-gold to-primary",
      extra: (
        <Card className="bg-card/50 rounded-xl p-3 border border-border">
          <div className="flex items-center space-x-2 text-sm">
            <Search className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">password reset email...</span>
          </div>
        </Card>
      ),
    },
    {
      icon: History,
      title: "Unlimited History",
      description: "Never lose important clipboard data again. Store unlimited items with smart organization and auto-cleanup options.",
      gradient: "from-green-500 to-accent-blue",
      extra: (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Items stored</span>
            <span className="text-accent-gold font-semibold">2,847</span>
          </div>
          <div className="w-full bg-card rounded-full h-2">
            <div className="bg-gradient-to-r from-accent-gold to-primary h-2 rounded-full w-3/4"></div>
          </div>
        </div>
      ),
    },
    {
      icon: Lock,
      title: "Secure Vault",
      description: "Protect sensitive data with password-protected vaults. Biometric authentication and auto-lock features included.",
      gradient: "from-red-500 to-accent-purple",
      extra: (
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
            <span className="text-green-400 text-sm">🔒</span>
          </div>
          <span className="text-sm text-muted-foreground">Biometric unlock</span>
        </div>
      ),
    },
    {
      icon: Clock,
      title: "Smart Timestamps",
      description: "Detailed tracking of when and where each item was copied. Perfect for workflow auditing and productivity analysis.",
      gradient: "from-accent-blue to-primary",
      extra: (
        <div className="text-sm text-muted-foreground space-y-1">
          <div>📅 Today, {currentTime.toLocaleTimeString()}</div>
          <div>💻 Current Device</div>
          <div>🌐 React App</div>
        </div>
      ),
    },
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for personal use",
      features: [
        { name: "50 clipboard items", included: true },
        { name: "Basic encryption", included: true },
        { name: "Local storage only", included: true },
        { name: "Basic search", included: true },
        { name: "Cross-device sync", included: false },
        { name: "Advanced features", included: false },
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const,
    },
    {
      name: "Pro",
      price: "$9",
      description: "For professionals and teams",
      features: [
        { name: "Unlimited clipboard items", included: true },
        { name: "Military-grade encryption", included: true },
        { name: "Cross-device sync", included: true },
        { name: "Advanced search & AI", included: true },
        { name: "Password-protected vaults", included: true },
        { name: "Priority support", included: true },
      ],
      buttonText: "Start Pro Trial",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        { name: "Everything in Pro", included: true },
        { name: "SSO integration", included: true },
        { name: "Advanced admin controls", included: true },
        { name: "Audit logs", included: true },
        { name: "Custom integrations", included: true },
        { name: "24/7 dedicated support", included: true },
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 hero-gradient">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-float [animation-delay:-3s]"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent-purple/20 rounded-full blur-3xl animate-float [animation-delay:-6s]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            {/* Hero Badge */}
            <Badge variant="secondary" className="mb-8 glass-effect border-white/10 px-4 py-2">
              <div className="w-2 h-2 bg-accent-gold rounded-full animate-pulse mr-2"></div>
              New: AI-powered clipboard organization
            </Badge>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Your Clipboard,
              <br />
              <span className="gradient-text">Supercharged</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              The most advanced clipboard manager with military-grade encryption,
              intelligent organization, and seamless cross-platform sync.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Link href="/download">
                <Button size="lg" className="btn-primary px-8 py-4 text-lg font-semibold group">
                  <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                  Download Free
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center space-x-8 text-muted-foreground text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-accent-gold" />
                <span>AES-256 Encrypted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-accent-blue" />
                <span>50K+ Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-accent-gold" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 animate-fade-in">
            <div className="relative max-w-4xl mx-auto">
              {/* Main App Window */}
              <Card className="glass-effect rounded-3xl p-6 shadow-2xl border-white/10">
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
                      <Card className="bg-card/50 rounded-2xl p-4 border-border hover:border-primary/50 transition-all cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-accent-blue">
                            <Code className="w-3 h-3 mr-1" />
                            Text
                          </Badge>
                          <span className="text-muted-foreground text-xs">2 min ago</span>
                        </div>
                        <p className="text-foreground text-sm">const greeting = "Hello, World!";</p>
                      </Card>

                      <Card className="bg-card/50 rounded-2xl p-4 border-border hover:border-primary/50 transition-all cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-accent-gold">
                            <Image className="w-3 h-3 mr-1" />
                            Image
                          </Badge>
                          <span className="text-muted-foreground text-xs">5 min ago</span>
                        </div>
                        <div className="bg-muted rounded-lg h-12 flex items-center justify-center">
                          <Image className="w-5 h-5 text-muted-foreground" />
                        </div>
                      </Card>

                      <Card className="bg-card/50 rounded-2xl p-4 border-border hover:border-primary/50 transition-all cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-accent-purple">
                            <Link2 className="w-3 h-3 mr-1" />
                            URL
                          </Badge>
                          <span className="text-muted-foreground text-xs">10 min ago</span>
                        </div>
                        <p className="text-foreground text-sm">https://github.com/premium-repo</p>
                      </Card>

                      <Card className="bg-card/50 rounded-2xl p-4 border-border hover:border-primary/50 transition-all cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-green-400">
                            <FileText className="w-3 h-3 mr-1" />
                            File
                          </Badge>
                          <span className="text-muted-foreground text-xs">15 min ago</span>
                        </div>
                        <p className="text-foreground text-sm">presentation.pdf</p>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Security Badge */}
              <div className="absolute -top-4 -right-4 glass-effect rounded-2xl p-4 animate-glow border-white/10">
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
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
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
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
              >
                {feature.extra}
              </FeatureCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/features">
              <Button size="lg" variant="outline" className="group">
                View All Features
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Choose Your
              <span className="gradient-text"> Perfect Plan</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start free and upgrade when you need advanced features for professional workflows.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.name}
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                buttonText={plan.buttonText}
                buttonVariant={plan.buttonVariant}
                popular={plan.popular}
                onButtonClick={() => {
                  if (plan.name === "Enterprise") {
                    window.location.href = "/contact";
                  } else {
                    window.location.href = "/pricing";
                  }
                }}
              />
            ))}
          </div>

          {/* Money Back Guarantee */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 text-green-400">
              <Shield className="w-5 h-5" />
              <span>30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-accent-blue to-accent-purple relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
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
            <Link href="/pricing">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-bold transition-all transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white/30 hover:border-white px-8 py-4 text-lg font-semibold text-white">
                Schedule Demo
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
