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
  Lock,
  FileText,
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
      name: "Linux (.deb)",
      icon: MonitorSpeaker,
      description: "Ubuntu, Debian, and derivatives",
      version: "v1.0",
      size: "~2MB",
      available: true,
      gradient: "from-accent-gold/20 to-accent-gold/20",
      downloadUrl: "https://drive.google.com/file/d/1RTgAfIL8G-HhNpVVwLo_-u9pJy9C9AXv/view?usp=drive_link",
    },
    {
      name: "Windows",
      icon: MonitorSpeaker,
      description: "Windows 10/11",
      version: "v1.0",
      size: "~3MB",
      available: true,
      gradient: "from-accent-blue/20 to-accent-blue/20",
      downloadUrl: "https://drive.google.com/file/d/1XMqhRZPbnYYs898RalbmoWVJNS7bc7sw/view?usp=sharing",
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
      // Open the Google Drive download link in a new tab
      window.open(platform.downloadUrl, "_blank");
      toast({
        title: "Download Started",
        description: `ClipSync for ${platform.name} download page opened. Click "Download" on Google Drive.`,
        variant: "default",
      });
    }
  };

  const systemRequirements = {
    Windows: [
      "Windows 10 or later",
      "50MB free space",
      "No additional dependencies",
      "100% offline - no internet required",
    ],
    Linux: [
      "Ubuntu 18.04+ / Debian 9+ / Any .deb compatible",
      "30MB free space", 
      "Terminal access for installation",
      "100% offline - no internet required",
    ],
  };

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-32 left-16 w-28 h-28 morphing-blob animate-float-3d opacity-15" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-80 right-24 w-20 h-20 morphing-blob animate-bounce-3d opacity-20" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-60 left-1/3 w-24 h-24 morphing-blob animate-rotate-y opacity-10" style={{animationDelay: '5s'}}></div>
        <div className="absolute bottom-40 right-1/4 w-16 h-16 morphing-blob animate-scale-pulse opacity-25" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-card/30 to-background relative overflow-hidden">
        {/* Enhanced 3D Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-3d"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-float-3d" style={{animationDelay: '-4s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent-gold/5 rounded-full blur-3xl animate-scale-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-8 glass-effect border-white/10 px-4 py-2 card-3d">
              <Download className="w-4 h-4 mr-2" />
              Download ClipSync
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-glow">
              Get Started with
              <br />
              <span className="gradient-text">ClipSync</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Available on all major platforms. Choose your operating system to get started
              with the most secure clipboard manager.
            </p>
            {detectedPlatform && (
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full glass-effect border-primary/20 animate-pulse-glow">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">We detected you're using {detectedPlatform}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Download Cards */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {platforms.map((platform, index) => (
              <div 
                key={platform.name}
                className="animate-fade-in-up card-3d"
                style={{animationDelay: `${0.3 * index}s`}}
              >
                <PlatformCard
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
              </div>
            ))}
          </div>

          {/* Quick Download Button for Detected Platform */}
          {detectedPlatform && (
            <div className="text-center mb-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <Card className="glass-effect rounded-2xl p-8 max-w-md mx-auto border-primary/50 card-3d floating-element">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4 text-glow">Quick Download</h3>
                  <p className="text-muted-foreground mb-6">
                    Download ClipSync for {detectedPlatform}
                  </p>
                  <Button
                    size="lg"
                    className="btn-primary w-full rotating-border"
                    onClick={() => {
                      const platform = platforms.find(p => p.name.includes(detectedPlatform));
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            {/* Linux Installation */}
            <Card className="glass-effect rounded-2xl p-8 border-white/10">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <MonitorSpeaker className="w-6 h-6 mr-3" />
                  Linux Installation (.deb)
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Download</h4>
                      <p className="text-sm text-muted-foreground">Save the clipsync_1.0.deb file to your desired folder</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Install via Terminal</h4>
                      <p className="text-sm text-muted-foreground">Open Terminal in the folder and run:</p>
                      <Card className="bg-card/50 rounded-xl p-3 mt-2 border border-border">
                        <code className="text-xs text-accent-blue">
                          sudo dpkg -i clipsync_1.0.deb<br/>
                          sudo apt-get install -f
                        </code>
                      </Card>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Launch ClipSync</h4>
                      <p className="text-sm text-muted-foreground">Run from Applications Menu or terminal:</p>
                      <Card className="bg-card/50 rounded-xl p-3 mt-2 border border-border">
                        <code className="text-xs text-accent-blue">clipsync</code>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Windows Installation */}
            <Card className="glass-effect rounded-2xl p-8 border-white/10">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <MonitorSpeaker className="w-6 h-6 mr-3" />
                  Windows Installation
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Download</h4>
                      <p className="text-sm text-muted-foreground">Download the Windows installer package</p>
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
                      <p className="text-sm text-muted-foreground">Start ClipSync from Start Menu or desktop shortcut</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">How ClipSync Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple and secure clipboard management with encrypted local storage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass-effect rounded-2xl p-6 border-white/10">
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="font-bold mb-2">Automatic Clipboard Sync</h3>
                <p className="text-sm text-muted-foreground">Keeps your clipboard history stored securely in the background</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect rounded-2xl p-6 border-white/10">
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 bg-accent-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-accent-blue" />
                </div>
                <h3 className="font-bold mb-2">Password Storage</h3>
                <p className="text-sm text-muted-foreground">Save your passwords locally with encryption</p>
              </CardContent>
            </Card>

            <Card className="glass-effect rounded-2xl p-6 border-white/10">
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 bg-accent-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💾</span>
                </div>
                <h3 className="font-bold mb-2">Offline First</h3>
                <p className="text-sm text-muted-foreground">No internet required; data stays on your device</p>
              </CardContent>
            </Card>

            <Card className="glass-effect rounded-2xl p-6 border-white/10">
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-bold mb-2">Fresh Start</h3>
                <p className="text-sm text-muted-foreground">New users get empty storage files ready to use</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto border-white/10">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6">Storage Files Created</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-accent-blue" />
                      <span className="font-mono text-sm">password.txt</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-8">For storing passwords securely</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-accent-gold" />
                      <span className="font-mono text-sm">clipboard_data.json.aes</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-8">For encrypted clipboard history</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Uninstall Instructions */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Uninstall ClipSync</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Easy removal if you need to uninstall the application
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="glass-effect rounded-2xl p-8 border-white/10">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <MonitorSpeaker className="w-6 h-6 mr-3" />
                  Linux Uninstall
                </h3>
                <p className="text-muted-foreground mb-4">
                  To completely remove ClipSync from your Linux system:
                </p>
                <Card className="bg-card/50 rounded-xl p-4 border border-border">
                  <code className="text-accent-blue">
                    sudo apt remove clipsync
                  </code>
                </Card>
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
