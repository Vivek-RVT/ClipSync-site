import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlatformCard } from "@/components/PlatformCard";
import { useToast } from "@/hooks/use-toast";
import {
  Download,
  MonitorSpeaker,
  Apple,
  Smartphone,
  CheckCircle,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

interface PlatformInfo {
  name: string;
  icon: any;
  description: string;
  version?: string;
  size?: string;
  available: boolean;
  gradient: string;
  downloadUrl?: string;
  storeUrl?: string;
}

export default function DownloadPage() {
  const [detectedPlatform, setDetectedPlatform] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    // Detect user's platform
    const userAgent = navigator.userAgent;
    let platform = "";

    if (userAgent.includes("Windows")) {
      platform = "Windows";
    } else if (userAgent.includes("Mac")) {
      platform = "macOS";
    } else if (userAgent.includes("Linux")) {
      platform = "Linux";
    } else if (userAgent.includes("Android")) {
      platform = "Android";
    } else if (userAgent.includes("iOS")) {
      platform = "iOS";
    }

    setDetectedPlatform(platform);
  }, []);

  const platforms: PlatformInfo[] = [
    {
      name: "Linux",
      icon: MonitorSpeaker,
      description: "Ubuntu, Fedora, Arch, etc.",
      version: "Python 3.6+",
      size: "~5MB",
      available: true,
      gradient: "from-accent-gold/20 to-accent-gold/20",
      downloadUrl: "https://github.com/vivekrawat/clipsync",
    },
    {
      name: "macOS",
      icon: Apple,
      description: "macOS 10.14+",
      version: "Python 3.6+",
      size: "~5MB",
      available: true,
      gradient: "from-muted/20 to-muted/20",
      downloadUrl: "https://github.com/vivekrawat/clipsync",
    },
    {
      name: "Windows",
      icon: MonitorSpeaker,
      description: "Windows 10/11",
      version: "Python 3.6+",
      size: "~5MB",
      available: true,
      gradient: "from-accent-blue/20 to-accent-blue/20",
      downloadUrl: "https://github.com/vivekrawat/clipsync",
    },
  ];

  const handleDownload = (platform: PlatformInfo) => {
    if (!platform.available) {
      toast({
        title: "Coming Soon",
        description: `ClipSync for ${platform.name} is currently in development. We'll notify you when it's ready!`,
        variant: "default",
      });
      return;
    }

    if (platform.storeUrl) {
      window.open(platform.storeUrl, "_blank");
    } else if (platform.downloadUrl) {
      // In a real app, this would trigger the actual download
      toast({
        title: "Download Started",
        description: `ClipSync for ${platform.name} is now downloading...`,
        variant: "default",
      });
    }
  };

  const systemRequirements = {
    Windows: [
      "Windows 10 or later",
      "100MB free space",
      ".NET Framework 4.8+",
      "Internet connection for sync",
    ],
    Linux: [
      "Ubuntu 18.04+ / Fedora 30+ / Arch Linux",
      "80MB free space",
      "GTK 3.0+",
      "Internet connection for sync",
    ],
    Android: [
      "Android 8.0 (API level 26)+",
      "50MB free space",
      "Accessibility permission",
      "Internet connection for sync",
    ],
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">
            <Download className="w-4 h-4 mr-2" />
            Download ClipSync
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Get Started with
            <br />
            <span className="gradient-text">ClipSync</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Available on all major platforms. Choose your operating system to get started
            with the most secure clipboard manager.
          </p>
          {detectedPlatform && (
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">We detected you're using {detectedPlatform}</span>
            </div>
          )}
        </div>
      </section>

      {/* Download Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {platforms.map((platform) => (
              <PlatformCard
                key={platform.name}
                icon={platform.icon}
                name={platform.name}
                description={platform.description}
                version={platform.version}
                size={platform.size}
                buttonText={platform.available ? "Download" : "Notify Me"}
                available={platform.available}
                gradient={platform.gradient}
                onDownload={() => handleDownload(platform)}
              />
            ))}
          </div>

          {/* Quick Download Button for Detected Platform */}
          {detectedPlatform && (
            <div className="text-center mb-16">
              <Card className="glass-effect rounded-2xl p-8 max-w-md mx-auto border-primary/50">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4">Quick Download</h3>
                  <p className="text-muted-foreground mb-6">
                    Download ClipSync for {detectedPlatform}
                  </p>
                  <Button
                    size="lg"
                    className="btn-primary w-full"
                    onClick={() => {
                      const platform = platforms.find(p => p.name === detectedPlatform);
                      if (platform) handleDownload(platform);
                    }}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download for {detectedPlatform}
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">System Requirements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Make sure your system meets the minimum requirements for optimal performance
            </p>
          </div>

          <Card className="glass-effect rounded-2xl p-8 max-w-6xl mx-auto border-white/10">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(systemRequirements).map(([platform, requirements]) => (
                  <div key={platform}>
                    <h3 className="font-bold text-xl mb-4 flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {platform}
                    </h3>
                    <ul className="space-y-3">
                      {requirements.map((requirement) => (
                        <li key={requirement} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Installation Instructions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Installation Instructions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick and easy setup for all platforms
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Windows/Linux Installation */}
            <Card className="glass-effect rounded-2xl p-8 border-white/10">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <MonitorSpeaker className="w-6 h-6 mr-3" />
                  Desktop Installation
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Download</h4>
                      <p className="text-sm text-muted-foreground">Click the download button for your platform</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Install</h4>
                      <p className="text-sm text-muted-foreground">Run the installer and follow the setup wizard</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Launch</h4>
                      <p className="text-sm text-muted-foreground">Start ClipSync and complete the initial setup</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mobile Installation */}
            <Card className="glass-effect rounded-2xl p-8 border-white/10">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Smartphone className="w-6 h-6 mr-3" />
                  Mobile Installation
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">App Store</h4>
                      <p className="text-sm text-muted-foreground">Download from Google Play Store</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Permissions</h4>
                      <p className="text-sm text-muted-foreground">Grant accessibility permissions for clipboard access</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Sync</h4>
                      <p className="text-sm text-muted-foreground">Connect with your desktop app for seamless sync</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Release Notes */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Latest Release</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What's new in ClipSync v2.1.4
            </p>
          </div>

          <Card className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto border-white/10">
            <CardContent className="p-0">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold">Version 2.1.4</h3>
                  <p className="text-muted-foreground">Released January 15, 2024</p>
                </div>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                  Latest
                </Badge>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">✨ New Features</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Enhanced AI-powered search with natural language queries</li>
                    <li>• New dark theme with improved contrast and accessibility</li>
                    <li>• Bulk export functionality for clipboard history</li>
                    <li>• Custom keyboard shortcuts for power users</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-accent-blue mb-2">🔧 Improvements</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• 40% faster search performance</li>
                    <li>• Reduced memory usage by 25%</li>
                    <li>• Improved sync reliability across devices</li>
                    <li>• Better error handling and user feedback</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-400 mb-2">🐛 Bug Fixes</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Fixed clipboard monitoring on Windows 11</li>
                    <li>• Resolved sync conflicts with large files</li>
                    <li>• Fixed password vault auto-lock timing</li>
                    <li>• Corrected display issues on high-DPI monitors</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Want to see older releases?
                </div>
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View All Releases
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Need Help?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our comprehensive documentation and support team are here to help you get the most out of ClipSync.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="outline" size="lg">
              📚 Documentation
            </Button>
            <Button variant="outline" size="lg">
              💬 Community Support
            </Button>
            <Button size="lg" className="btn-primary">
              🎧 Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
