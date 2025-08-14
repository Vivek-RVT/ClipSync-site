import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FeatureCard } from "@/components/FeatureCard";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
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
  useScrollAnimation();
  const mainFeatures = [
    {
      icon: Shield,
      title: "Military-Grade Encryption",
      description: "Your clipboard data is protected with AES-256 encryption, the same standard used by banks and government agencies. Every item is encrypted locally before storage, ensuring your sensitive data remains private.",
      gradient: "from-primary to-accent-blue",
      extra: (
        <Card className="bg-card/50 rounded-xl p-4 border border-border">
          <pre className="text-sm overflow-x-auto">
            <code className="text-accent-blue">
{`import { AES, enc } from 'crypto-js';

function encryptClipboardData(data, password) {
  const salt = generateSalt();
  const key = deriveKey(password, salt);
  
  return {
    encrypted: AES.encrypt(data, key).toString(),
    salt: salt,
    timestamp: Date.now()
  };
}`}
            </code>
          </pre>
        </Card>
      ),
    },
    {
      icon: FolderSync,
      title: "Cross-Platform Synchronization",
      description: "Seamlessly sync your clipboard across all your devices - Windows, macOS, Linux, Android, and iOS. Real-time synchronization ensures your clipboard is always up-to-date.",
      gradient: "from-accent-purple to-accent-blue",
      extra: (
        <div className="grid grid-cols-4 gap-3">
          <div className="text-center">
            <div className="w-12 h-12 bg-accent-blue/20 rounded-lg flex items-center justify-center mx-auto mb-2">
              <span className="text-accent-blue font-bold">W</span>
            </div>
            <span className="text-xs text-muted-foreground">Windows</span>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <span className="text-muted-foreground font-bold">M</span>
            </div>
            <span className="text-xs text-muted-foreground">macOS</span>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center mx-auto mb-2">
              <span className="text-accent-gold font-bold">L</span>
            </div>
            <span className="text-xs text-muted-foreground">Linux</span>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Smartphone className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-xs text-muted-foreground">Mobile</span>
          </div>
        </div>
      ),
    },
    {
      icon: Search,
      title: "AI-Powered Intelligent Search",
      description: "Find any clipboard item instantly with our advanced search capabilities. Search by content, type, date, source application, or custom tags. Our AI understands context and provides relevant results.",
      gradient: "from-accent-gold to-primary",
      extra: (
        <div className="space-y-3">
          <Card className="bg-card/50 rounded-xl p-3 border border-border">
            <div className="flex items-center space-x-2 text-sm">
              <Search className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">password reset email from bank</span>
            </div>
          </Card>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-xs">Content</Badge>
            <Badge variant="secondary" className="text-xs">Type</Badge>
            <Badge variant="secondary" className="text-xs">Date</Badge>
            <Badge variant="secondary" className="text-xs">Source</Badge>
            <Badge variant="secondary" className="text-xs">Tags</Badge>
          </div>
        </div>
      ),
    },
    {
      icon: History,
      title: "Unlimited History Management",
      description: "Never lose important clipboard data again. Store unlimited items with smart organization, automatic categorization, and configurable retention policies. Export your history when needed.",
      gradient: "from-green-500 to-accent-blue",
      extra: (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4 text-center text-sm">
            <div>
              <div className="text-2xl font-bold text-accent-gold">2,847</div>
              <div className="text-muted-foreground">Items</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-blue">30</div>
              <div className="text-muted-foreground">Days</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">12</div>
              <div className="text-muted-foreground">Categories</div>
            </div>
          </div>
          <div className="w-full bg-card rounded-full h-2">
            <div className="bg-gradient-to-r from-accent-gold to-primary h-2 rounded-full w-3/4"></div>
          </div>
        </div>
      ),
    },
    {
      icon: Lock,
      title: "Password-Protected Vaults",
      description: "Organize sensitive clipboard items in secure, password-protected vaults. Each vault has its own encryption key and can be configured with different access policies and auto-lock timeouts.",
      gradient: "from-red-500 to-accent-purple",
      extra: (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4 text-green-400" />
              <span className="text-sm">Personal Vault</span>
            </div>
            <Badge variant="secondary" className="text-xs text-green-400">Unlocked</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4 text-red-400" />
              <span className="text-sm">Work Vault</span>
            </div>
            <Badge variant="secondary" className="text-xs text-red-400">Locked</Badge>
          </div>
        </div>
      ),
    },
    {
      icon: Clock,
      title: "Smart Timestamps & Analytics",
      description: "Detailed tracking of when, where, and how each item was copied. Get insights into your clipboard usage patterns, productivity metrics, and workflow optimization suggestions.",
      gradient: "from-accent-blue to-primary",
      extra: (
        <div className="text-sm space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">📅 Today, 2:34 PM</span>
            <span className="text-accent-blue">Just now</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">💻 Chrome Browser</span>
            <span className="text-green-400">Active</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">📱 Android Phone</span>
            <span className="text-muted-foreground">2 min ago</span>
          </div>
        </div>
      ),
    },
  ];

  const additionalFeatures = [
    {
      icon: Brain,
      title: "Smart Categories",
      description: "Automatic categorization of clipboard items using machine learning.",
    },
    {
      icon: Zap,
      title: "Quick Actions",
      description: "Customizable shortcuts and hotkeys for instant clipboard access.",
    },
    {
      icon: Globe,
      title: "Universal Clipboard",
      description: "Share clipboard items securely across different networks and teams.",
    },
    {
      icon: FileText,
      title: "Text Formatting",
      description: "Preserve and convert text formatting between different applications.",
    },
    {
      icon: Image,
      title: "Media Support",
      description: "Full support for images, files, and rich media content.",
    },
    {
      icon: Database,
      title: "Backup & Restore",
      description: "Automatic backups with easy restore functionality.",
    },
    {
      icon: Wifi,
      title: "Offline Mode",
      description: "Full functionality even when disconnected from the internet.",
    },
    {
      icon: Code,
      title: "Developer Tools",
      description: "Code syntax highlighting and formatting for developers.",
    },
  ];

  const supportedTypes = [
    { name: "Plain Text", icon: FileText, description: "Basic text content" },
    { name: "Rich Text", icon: FileText, description: "Formatted text with styling" },
    { name: "Images", icon: Image, description: "PNG, JPG, GIF, SVG formats" },
    { name: "URLs", icon: Link2, description: "Web links with metadata" },
    { name: "Code", icon: Code, description: "Source code with syntax highlighting" },
    { name: "Files", icon: Database, description: "File paths and metadata" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-fade-in">
          <Badge variant="secondary" className="mb-8">
            Advanced Clipboard Management
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Powerful Features for
            <br />
            <span className="gradient-text">Power Users</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            ClipSync combines cutting-edge technology with intuitive design to deliver
            the most advanced clipboard management experience available.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Core Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Essential capabilities that make ClipSync the ultimate clipboard manager
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {mainFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className="scroll-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
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
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Additional Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Even more powerful tools to enhance your productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className="scroll-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                  <Card className="glass-effect rounded-2xl p-6 text-center border-white/10 hover:border-primary/50 transition-all hover:scale-105">
                    <CardContent className="p-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Content Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Supported Content Types</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ClipSync handles all types of content with intelligence and precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportedTypes.map((type, index) => (
              <div 
                key={type.name}
                className="scroll-slide-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                  <Card className="glass-effect rounded-2xl p-6 border-white/10 hover:border-primary/50 transition-all hover:scale-105">
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
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-fade-in">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Performance & Reliability</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built for speed, security, and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 scroll-fade-in">
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">&lt;1ms</div>
              <div className="text-muted-foreground">Search Response</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-accent-blue mb-2">256-bit</div>
              <div className="text-muted-foreground">AES Encryption</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-accent-gold mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-green-400 mb-2">0</div>
              <div className="text-muted-foreground">Data Loss</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
