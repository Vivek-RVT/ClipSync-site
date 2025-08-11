import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { PricingCard } from "@/components/PricingCard";
import { useToast } from "@/hooks/use-toast";
import {
  Check,
  X,
  Crown,
  Zap,
  Shield,
  Users,
  Star,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const { toast } = useToast();

  const handlePlanSelect = (planName: string) => {
    if (planName === "Enterprise") {
      // Redirect to contact page
      window.location.href = "/contact";
    } else {
      toast({
        title: `${planName} Plan Selected`,
        description: `You've selected the ${planName} plan. Redirecting to checkout...`,
        variant: "default",
      });
    }
  };

  const pricingPlans = [
    {
      name: "Free",
      price: isAnnual ? "$0" : "$0",
      originalPrice: null,
      description: "Perfect for personal use",
      features: [
        { name: "50 clipboard items", included: true },
        { name: "Basic encryption (AES-128)", included: true },
        { name: "Local storage only", included: true },
        { name: "Basic search functionality", included: true },
        { name: "Windows & Linux support", included: true },
        { name: "Cross-device sync", included: false },
        { name: "Password-protected vaults", included: false },
        { name: "Advanced search & AI", included: false },
        { name: "Priority support", included: false },
        { name: "Team collaboration", included: false },
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Pro",
      price: isAnnual ? "$9" : "$12",
      originalPrice: isAnnual ? "$12" : null,
      description: "For professionals and power users",
      features: [
        { name: "Unlimited clipboard items", included: true },
        { name: "Military-grade encryption (AES-256)", included: true },
        { name: "Cross-device sync (all platforms)", included: true },
        { name: "Advanced search & AI assistance", included: true },
        { name: "Password-protected vaults", included: true },
        { name: "Smart categories & tags", included: true },
        { name: "Custom keyboard shortcuts", included: true },
        { name: "Export/import functionality", included: true },
        { name: "Priority email support", included: true },
        { name: "Team collaboration", included: false },
      ],
      buttonText: "Start Pro Trial",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      originalPrice: null,
      description: "For teams and organizations",
      features: [
        { name: "Everything in Pro", included: true },
        { name: "Advanced team collaboration", included: true },
        { name: "SSO integration (SAML, OAuth)", included: true },
        { name: "Advanced admin controls", included: true },
        { name: "Audit logs & compliance", included: true },
        { name: "Custom integrations & API", included: true },
        { name: "On-premise deployment", included: true },
        { name: "Custom retention policies", included: true },
        { name: "24/7 dedicated support", included: true },
        { name: "Training & onboarding", included: true },
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false,
    },
  ];

  const comparisonFeatures = [
    {
      category: "Core Features",
      features: [
        { name: "Clipboard items storage", free: "50", pro: "Unlimited", enterprise: "Unlimited" },
        { name: "Encryption level", free: "AES-128", pro: "AES-256", enterprise: "AES-256" },
        { name: "Platform support", free: "2 platforms", pro: "All platforms", enterprise: "All platforms" },
        { name: "Search capabilities", free: "Basic", pro: "AI-powered", enterprise: "AI-powered" },
      ],
    },
    {
      category: "Advanced Features",
      features: [
        { name: "Cross-device sync", free: "✗", pro: "✓", enterprise: "✓" },
        { name: "Password vaults", free: "✗", pro: "✓", enterprise: "✓" },
        { name: "Smart categories", free: "✗", pro: "✓", enterprise: "✓" },
        { name: "Custom shortcuts", free: "✗", pro: "✓", enterprise: "✓" },
      ],
    },
    {
      category: "Team & Enterprise",
      features: [
        { name: "Team collaboration", free: "✗", pro: "✗", enterprise: "✓" },
        { name: "Admin controls", free: "✗", pro: "✗", enterprise: "✓" },
        { name: "SSO integration", free: "✗", pro: "✗", enterprise: "✓" },
        { name: "Audit logs", free: "✗", pro: "✗", enterprise: "✓" },
      ],
    },
  ];

  const faq = [
    {
      question: "Can I change plans at any time?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated amount for the remainder of your billing cycle.",
    },
    {
      question: "Is there a free trial for Pro?",
      answer: "Yes, we offer a 14-day free trial of ClipSync Pro. No credit card required. You can cancel anytime during the trial period.",
    },
    {
      question: "What happens to my data if I downgrade?",
      answer: "Your data remains safe and accessible. However, some features may be limited based on your new plan. For example, the free plan is limited to 50 clipboard items.",
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes! Students and educators can get 50% off ClipSync Pro. Contact our support team with your student ID or educational email address.",
    },
    {
      question: "Is my payment information secure?",
      answer: "Absolutely. We use Stripe for payment processing, which is PCI DSS compliant. We never store your payment information on our servers.",
    },
    {
      question: "Can I get a refund?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with ClipSync, contact us for a full refund within 30 days of purchase.",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">
            <Crown className="w-4 h-4 mr-2" />
            Pricing Plans
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Choose Your
            <br />
            <span className="gradient-text">Perfect Plan</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Start free and upgrade when you need advanced features for professional workflows.
            All plans include our core security features and lifetime updates.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center space-x-4 bg-card/50 p-2 rounded-2xl">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch 
              checked={isAnnual} 
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual
            </span>
            <Badge variant="secondary" className="bg-green-500/20 text-green-400 ml-2">
              Save 25%
            </Badge>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className="relative">
                <PricingCard
                  name={plan.name}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  buttonText={plan.buttonText}
                  buttonVariant={plan.buttonVariant}
                  popular={plan.popular}
                  onButtonClick={() => handlePlanSelect(plan.name)}
                />
                {plan.originalPrice && (
                  <div className="absolute top-4 right-4">
                    <div className="text-xs text-muted-foreground line-through">
                      {plan.originalPrice}/mo
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="text-center mt-16">
            <div className="flex flex-wrap items-center justify-center space-x-8 text-muted-foreground text-sm mb-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9/5 customer satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-accent-blue" />
                <span>50,000+ satisfied users</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              All plans include free updates, basic support, and access to our security features.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Detailed Feature Comparison</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compare all features across our plans to find the perfect fit for your needs
            </p>
          </div>

          <Card className="glass-effect rounded-2xl overflow-hidden border-white/10">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-6 font-semibold">Features</th>
                      <th className="text-center p-6 font-semibold">Free</th>
                      <th className="text-center p-6 font-semibold">
                        <div className="flex items-center justify-center space-x-2">
                          <span>Pro</span>
                          <Badge variant="secondary" className="bg-primary/20 text-primary">Popular</Badge>
                        </div>
                      </th>
                      <th className="text-center p-6 font-semibold">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((category) => (
                      <>
                        <tr key={category.category} className="border-b border-border">
                          <td className="p-6 font-semibold text-foreground bg-muted/30" colSpan={4}>
                            {category.category}
                          </td>
                        </tr>
                        {category.features.map((feature) => (
                          <tr key={feature.name} className="border-b border-border/50">
                            <td className="p-4 text-muted-foreground">{feature.name}</td>
                            <td className="p-4 text-center">
                              {feature.free === "✓" ? (
                                <Check className="w-5 h-5 text-green-400 mx-auto" />
                              ) : feature.free === "✗" ? (
                                <X className="w-5 h-5 text-muted-foreground mx-auto" />
                              ) : (
                                <span className="text-sm text-muted-foreground">{feature.free}</span>
                              )}
                            </td>
                            <td className="p-4 text-center">
                              {feature.pro === "✓" ? (
                                <Check className="w-5 h-5 text-green-400 mx-auto" />
                              ) : feature.pro === "✗" ? (
                                <X className="w-5 h-5 text-muted-foreground mx-auto" />
                              ) : (
                                <span className="text-sm text-foreground font-medium">{feature.pro}</span>
                              )}
                            </td>
                            <td className="p-4 text-center">
                              {feature.enterprise === "✓" ? (
                                <Check className="w-5 h-5 text-green-400 mx-auto" />
                              ) : feature.enterprise === "✗" ? (
                                <X className="w-5 h-5 text-muted-foreground mx-auto" />
                              ) : (
                                <span className="text-sm text-foreground font-medium">{feature.enterprise}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers. Can't find what you're looking for? 
              <Link href="/contact">
                <a className="text-primary hover:underline ml-1">Contact our support team</a>
              </Link>
            </p>
          </div>

          <div className="space-y-6">
            {faq.map((item, index) => (
              <Card key={index} className="glass-effect rounded-2xl border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <HelpCircle className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{item.question}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-accent-blue to-accent-purple relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
            Need Something Custom?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Enterprise solutions with custom integrations, on-premise deployment, 
            and dedicated support for your organization's unique needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                Schedule Enterprise Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-white/30 hover:border-white px-8 py-4 text-lg font-semibold text-white">
              View Enterprise Features
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
