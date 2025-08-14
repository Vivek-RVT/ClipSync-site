import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FeatureCard } from "@/components/FeatureCard";
import {
  Shield,
  FolderSync,
  Search,
  History,
  Lock,
  Clock,
  Smartphone,
  Globe,
  Zap,
  Brain,
  FileText,
  Image,
  Link2,
  Code,
  Database,
  Wifi,
} from "lucide-react";

export default function Features() {
  const mainFeatures = [
    {
      icon: History,
      title: "Unlimited Clip Management",
      description: "Save unlimited text clips with one-click copying. Each clip can be copied with just one click. All clips are stored locally (no internet needed). You can delete clips anytime you want.",
      gradient: "from-primary to-accent-blue",
      extra: (
        <Card className="bg-card/50 rounded-xl p-4 border border-border">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Storage:</span>
              <span className="text-accent-blue">Local Device</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Limit:</span>
              <span className="text-accent-gold font-bold">∞ Unlimited</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Copy:</span>
              <span className="text-green-400">One-Click</span>
            </div>
          </div>
        </Card>
      ),
    },
    {
      icon: Shield,
      title: "Password Protection",
      description: "Your clipboard data is secured with password protection. All your sensitive clips are protected and encrypted, ensuring your data stays private and secure on your device.",
      gradient: "from-accent-purple to-accent-blue",
      extra: (
        <Card className="bg-card/50 rounded-xl p-4 border border-border">
          <div className="flex items-center space-x-2 text-sm mb-3">
            <Lock className="w-4 h-4 text-accent-blue" />
            <span className="text-accent-blue font-semibold">Password Required</span>
          </div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <div>✓ Encrypted storage</div>
            <div>✓ Secure access</div>
            <div>✓ Privacy protection</div>
          </div>
        </Card>
      ),
    },
    {
      icon: Search,
      title: "Instant Search & Filter",
      description: "Find clips instantly by typing in the search bar. Filter by category or show all clips. No clip limit - all clips are visible unless filtered. Search through your entire clipboard history in seconds.",
      gradient: "from-accent-gold to-primary",
      extra: (
        <div className="space-y-3">
          <Card className="bg-card/50 rounded-xl p-3 border border-border">
            <div className="flex items-center space-x-2 text-sm">
              <Search className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground italic">Search your clips...</span>
            </div>
          </Card>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs">Show All</Badge>
            <Badge variant="secondary" className="text-xs">Category</Badge>
            <Badge variant="secondary" className="text-xs">Filter</Badge>
          </div>
        </div>
      ),
    },
    {
      icon: FolderSync,
      title: "Dark Mode Interface",
      description: "Beautiful dark mode interface with modern design. Selected clips are highlighted with white background for better readability. Rounded corners provide smooth edges and a modern look throughout the app.",
      gradient: "from-green-500 to-accent-blue",
      extra: (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mx-auto mb-2 border border-gray-700">
                <span className="text-white text-xs">🌙</span>
              </div>
              <span className="text-xs text-muted-foreground">Dark Theme</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-2 border border-gray-200">
                <span className="text-gray-800 text-xs">✓</span>
              </div>
              <span className="text-xs text-muted-foreground">Selected Clip</span>
            </div>
          </div>
          <div className="text-xs text-muted-foreground text-center">
            Clean UI • No timestamps in main list • Rounded corners
          </div>
        </div>
      ),
    },
    {
      icon: Clock,
      title: "Auto-Save & Settings Panel",
      description: "Automatic save feature ensures clips remain after app restarts. Refresh button placed on top right next to settings button. Settings panel provides future customization options and smooth scrolling.",
      gradient: "from-red-500 to-accent-purple",
      extra: (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-4 text-center text-sm">
            <div>
              <div className="text-lg font-bold text-green-400">✓</div>
              <div className="text-muted-foreground text-xs">Auto-Save</div>
            </div>
            <div>
              <div className="text-lg font-bold text-accent-blue">⚙️</div>
              <div className="text-muted-foreground text-xs">Settings</div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground text-center">
            Responsive layout • Smooth scrolling • Persistent storage
          </div>
        </div>
      ),
    },
  ];

  const additionalFeatures = [
    {
      icon: FileText,
      title: "Text-Only Focus",
      description: "Specialized for text clips only - no images or files, just pure text management.",
    },
    {
      icon: Zap,
      title: "One-Click Copy",
      description: "Each clip can be copied with just a single click for instant use.",
    },
    {
      icon: Wifi,
      title: "100% Offline",
      description: "No internet required - everything works locally on your device.",
    },
    {
      icon: Database,
      title: "Local Storage",
      description: "All clips stored locally on your device for privacy and speed.",
    },
    {
      icon: Clock,
      title: "Auto-Save",
      description: "Clips automatically remain after app restarts - no data loss.",
    },
    {
      icon: Globe,
      title: "Windows & Linux",
      description: "Available for Windows and Linux platforms only.",
    },
    {
      icon: Brain,
      title: "Clean Interface",
      description: "No timestamps in main list - clean, distraction-free design.",
    },
    {
      icon: Code,
      title: "Settings Panel",
      description: "Future customization options with refresh button placement.",
    },
  ];

  const supportedTypes = [
    { name: "Plain Text", icon: FileText, description: "All text content from any application" },
    { name: "Code Snippets", icon: Code, description: "Programming code and scripts" },
    { name: "URLs & Links", icon: Link2, description: "Website addresses and links" },
    { name: "Passwords", icon: Lock, description: "Secure password management" },
    { name: "Notes", icon: FileText, description: "Quick notes and reminders" },
    { name: "Commands", icon: Code, description: "Terminal and system commands" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">
            Advanced Clipboard Management
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Simple Yet Powerful
            <br />
            <span className="gradient-text">Clipboard Features</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            ClipSync focuses on what matters most - unlimited text storage, password protection, 
            instant search, and a beautiful dark mode interface.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Core Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Essential capabilities that make ClipSync the ultimate clipboard manager
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {mainFeatures.map((feature) => (
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
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Additional Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Even more powerful tools to enhance your productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature) => (
              <Card key={feature.title} className="glass-effect rounded-2xl p-6 text-center border-white/10 hover:border-primary/50 transition-all">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Content Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Text Content Types</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ClipSync specializes in text management - perfect for all your text-based needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportedTypes.map((type) => (
              <Card key={type.name} className="glass-effect rounded-2xl p-6 border-white/10 hover:border-primary/50 transition-all">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-gold to-accent-purple rounded-xl flex items-center justify-center">
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{type.name}</h3>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Why Choose ClipSync?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built for simplicity, privacy, and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">∞</div>
              <div className="text-muted-foreground">Unlimited Clips</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-accent-blue mb-2">100%</div>
              <div className="text-muted-foreground">Free Forever</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-accent-gold mb-2">0</div>
              <div className="text-muted-foreground">Internet Required</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-green-400 mb-2">1-Click</div>
              <div className="text-muted-foreground">Copy & Paste</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
