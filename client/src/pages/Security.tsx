import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import {
  Shield,
  Lock,
  Key,
  UserCheck,
  Server,
  Eye,
  FileCheck,
  Globe,
  AlertTriangle,
  CheckCircle,
  Code,
} from "lucide-react";

export default function Security() {
  const [activeDemo, setActiveDemo] = useState<string>("encryption");

  const securityFeatures = [
    {
      icon: Key,
      title: "AES-256 Encryption",
      description: "Military-grade encryption standard used by banks and government agencies. Your data is encrypted with a unique key that only you control.",
      gradient: "from-primary to-accent-blue",
    },
    {
      icon: UserCheck,
      title: "Zero-Knowledge Architecture",
      description: "We never see your data, even if we wanted to. Everything is encrypted locally on your device before it ever leaves your system.",
      gradient: "from-accent-blue to-accent-purple",
    },
    {
      icon: Server,
      title: "Local-First Storage",
      description: "Your clipboard data stays on your device by default. Cloud synchronization is optional and always encrypted end-to-end.",
      gradient: "from-accent-gold to-primary",
    },
    {
      icon: Eye,
      title: "Privacy by Design",
      description: "Built from the ground up with privacy as a core principle. No tracking, no analytics, no data collection without explicit consent.",
      gradient: "from-green-500 to-accent-blue",
    },
    {
      icon: FileCheck,
      title: "Secure Transmission",
      description: "All data in transit is protected with TLS 1.3 encryption. Perfect forward secrecy ensures past communications remain secure.",
      gradient: "from-red-500 to-accent-purple",
    },
    {
      icon: Globe,
      title: "Open Source Security",
      description: "Core security components are open source and independently audited by security researchers worldwide.",
      gradient: "from-accent-blue to-primary",
    },
  ];

  const encryptionDemo = `// ClipSync Encryption Implementation
import { AES, enc, PBKDF2, SHA256 } from 'crypto-js';
import { randomBytes } from 'crypto';

class ClipSyncSecurity {
  static encryptData(plaintext, userPassword) {
    // Generate random salt for key derivation
    const salt = randomBytes(32);
    
    // Derive encryption key using PBKDF2
    const key = PBKDF2(userPassword, salt, {
      keySize: 256/32,
      iterations: 100000
    });
    
    // Generate random IV for each encryption
    const iv = randomBytes(16);
    
    // Encrypt the data using AES-256-CBC
    const encrypted = AES.encrypt(plaintext, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    
    return {
      ciphertext: encrypted.toString(),
      salt: salt.toString('hex'),
      iv: iv.toString('hex'),
      algorithm: 'AES-256-CBC',
      keyDerivation: 'PBKDF2',
      iterations: 100000,
      timestamp: Date.now()
    };
  }
  
  static decryptData(encryptedData, userPassword) {
    const { ciphertext, salt, iv } = encryptedData;
    
    // Derive the same key using stored salt
    const key = PBKDF2(userPassword, salt, {
      keySize: 256/32,
      iterations: 100000
    });
    
    // Decrypt the data
    const decrypted = AES.decrypt(ciphertext, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    
    return decrypted.toString(enc.Utf8);
  }
}`;

  const securityPrinciples = [
    {
      title: "Defense in Depth",
      description: "Multiple layers of security controls to protect your data at every level.",
      items: ["Application-level encryption", "Transport layer security", "Storage encryption", "Access controls"],
    },
    {
      title: "Principle of Least Privilege",
      description: "Every component has only the minimum access required to function.",
      items: ["Sandboxed processes", "Limited API access", "Restricted permissions", "Isolated storage"],
    },
    {
      title: "Secure by Default",
      description: "Security features are enabled by default, not optional add-ons.",
      items: ["Automatic encryption", "Secure configurations", "Privacy-first settings", "Protected by default"],
    },
  ];

  const complianceStandards = [
    { name: "SOC 2 Type II", status: "Certified", icon: CheckCircle },
    { name: "ISO 27001", status: "Compliant", icon: CheckCircle },
    { name: "GDPR", status: "Compliant", icon: CheckCircle },
    { name: "CCPA", status: "Compliant", icon: CheckCircle },
    { name: "HIPAA", status: "Ready", icon: AlertTriangle },
    { name: "PCI DSS", status: "Level 1", icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-card/30 to-background relative overflow-hidden">
        {/* Encryption Visualization Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border-2 border-primary rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 border-2 border-accent-blue rounded-full animate-spin-slow [animation-direction:reverse]"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 border-2 border-accent-purple rounded-full animate-spin-slow [animation-delay:-4s]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">
            <Shield className="w-4 h-4 mr-2" />
            Security & Privacy
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Your Data,
            <br />
            <span className="gradient-text">Fortress-Protected</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            ClipSync employs military-grade encryption and zero-knowledge architecture 
            to ensure your clipboard data remains private, secure, and under your complete control.
          </p>

          {/* Central Security Visualization */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative w-64 h-64 mx-auto">
              {/* Central Shield */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent-blue rounded-full animate-glow flex items-center justify-center">
                <div className="w-32 h-32 bg-background rounded-full flex items-center justify-center border-4 border-white/20">
                  <Shield className="w-12 h-12 text-primary" />
                </div>
              </div>

              {/* Floating Security Elements */}
              <div className="absolute -top-8 -left-8 glass-effect rounded-xl p-3 animate-float">
                <Key className="w-6 h-6 text-accent-blue" />
              </div>
              <div className="absolute -top-8 -right-8 glass-effect rounded-xl p-3 animate-float [animation-delay:-2s]">
                <Lock className="w-6 h-6 text-accent-gold" />
              </div>
              <div className="absolute -bottom-8 -left-8 glass-effect rounded-xl p-3 animate-float [animation-delay:-4s]">
                <UserCheck className="w-6 h-6 text-accent-purple" />
              </div>
              <div className="absolute -bottom-8 -right-8 glass-effect rounded-xl p-3 animate-float [animation-delay:-6s]">
                <Server className="w-6 h-6 text-green-400" />
              </div>
            </div>

            {/* Security Stats */}
            <div className="grid grid-cols-2 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-black text-primary mb-2">256</div>
                <div className="text-sm text-muted-foreground">Bit Encryption</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-accent-gold mb-2">0</div>
                <div className="text-sm text-muted-foreground">Knowledge</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Security Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security measures to protect your most sensitive data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Encryption Implementation */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                How We Protect
                <br />
                <span className="gradient-text">Your Data</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Every piece of clipboard data is encrypted using industry-standard algorithms
                before it ever leaves your device. Here's how our encryption works:
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Key className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Derivation</h3>
                    <p className="text-muted-foreground">
                      Your password is processed through PBKDF2 with 100,000 iterations
                      and a unique salt to create a strong encryption key.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">AES-256 Encryption</h3>
                    <p className="text-muted-foreground">
                      Data is encrypted using AES-256 in CBC mode with a random
                      initialization vector for each encryption operation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Secure Storage</h3>
                    <p className="text-muted-foreground">
                      Encrypted data is stored locally with secure file permissions
                      and optional cloud sync with end-to-end encryption.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Example */}
            <div>
              <Card className="glass-effect rounded-2xl p-6 border-white/10">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-muted-foreground">Encryption Implementation</div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant={activeDemo === "encryption" ? "default" : "outline"}
                        onClick={() => setActiveDemo("encryption")}
                      >
                        <Code className="w-4 h-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4 border border-border">
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-accent-blue whitespace-pre-wrap">
                        {encryptionDemo}
                      </code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security Principles */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Security Principles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our security architecture is built on industry best practices and proven principles
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {securityPrinciples.map((principle) => (
              <Card key={principle.title} className="glass-effect rounded-2xl p-8 border-white/10">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4">{principle.title}</h3>
                  <p className="text-muted-foreground mb-6">{principle.description}</p>
                  <ul className="space-y-2">
                    {principle.items.map((item) => (
                      <li key={item} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Compliance & Certifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ClipSync meets the highest industry standards for security and privacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard) => (
              <Card key={standard.name} className="glass-effect rounded-2xl p-6 border-white/10">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{standard.name}</h3>
                      <p className="text-sm text-muted-foreground">{standard.status}</p>
                    </div>
                    <standard.icon 
                      className={`w-6 h-6 ${
                        standard.status === "Ready" ? "text-yellow-400" : "text-green-400"
                      }`} 
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Guarantee */}
      <section className="py-24 bg-gradient-to-br from-primary via-accent-blue to-accent-purple relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
            Your Security is Our Promise
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We're so confident in our security that we offer a $10,000 bug bounty
            for any security vulnerabilities found in ClipSync.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-bold">
            Learn About Our Bug Bounty
          </Button>
        </div>
      </section>
    </div>
  );
}
