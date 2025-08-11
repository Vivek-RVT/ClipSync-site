import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  BookOpen,
  Search,
  Download,
  Settings,
  Shield,
  Smartphone,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  FileText,
  Code,
  Zap,
} from "lucide-react";

export default function Docs() {
  const [searchQuery, setSearchQuery] = useState("");

  const quickStartGuides = [
    {
      title: "Getting Started",
      description: "Install ClipSync and set up your first clipboard",
      icon: Download,
      duration: "5 min",
      steps: 4,
    },
    {
      title: "Setting Up Sync",
      description: "Connect multiple devices for seamless synchronization",
      icon: Smartphone,
      duration: "10 min",
      steps: 6,
    },
    {
      title: "Security Configuration",
      description: "Configure encryption and password protection",
      icon: Shield,
      duration: "8 min",
      steps: 5,
    },
    {
      title: "Advanced Features",
      description: "Customize shortcuts and automation rules",
      icon: Settings,
      duration: "15 min",
      steps: 8,
    },
  ];

  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "What is ClipSync?",
          answer: "ClipSync is a premium clipboard manager that securely stores, organizes, and synchronizes your clipboard history across all your devices. It features military-grade encryption, intelligent search, and advanced productivity tools."
        },
        {
          question: "Which platforms does ClipSync support?",
          answer: "ClipSync is available for Windows, Linux, Android, with macOS and iOS coming soon. All platforms support cross-device synchronization when you have a Pro account."
        },
        {
          question: "Is ClipSync free to use?",
          answer: "Yes! ClipSync offers a free plan that includes up to 50 clipboard items, basic encryption, and local storage. For unlimited items and advanced features, upgrade to ClipSync Pro."
        },
      ]
    },
    {
      category: "Security & Privacy",
      questions: [
        {
          question: "How secure is my clipboard data?",
          answer: "Your clipboard data is protected with AES-256 encryption, the same standard used by banks and government agencies. All encryption happens locally on your device before any data is stored or transmitted."
        },
        {
          question: "Can ClipSync see my clipboard data?",
          answer: "No. ClipSync uses zero-knowledge architecture, meaning your data is encrypted with your password before it ever leaves your device. Even ClipSync employees cannot access your clipboard data."
        },
        {
          question: "What happens if I forget my password?",
          answer: "Due to our zero-knowledge architecture, if you forget your password, we cannot recover your encrypted data. However, you can reset your account and start fresh. We recommend using a password manager."
        },
      ]
    },
    {
      category: "Features & Usage",
      questions: [
        {
          question: "How do I search my clipboard history?",
          answer: "Use Ctrl+Shift+V (Windows/Linux) or Cmd+Shift+V (macOS) to open the search interface. You can search by content, date, file type, or source application. Our AI-powered search understands natural language queries."
        },
        {
          question: "Can I organize my clipboard items?",
          answer: "Yes! ClipSync automatically categorizes your clipboard items and allows you to create custom tags and collections. You can also create password-protected vaults for sensitive information."
        },
        {
          question: "How do I sync across devices?",
          answer: "Sign up for a ClipSync Pro account and enable cloud sync in the settings. Your encrypted clipboard data will automatically sync across all your connected devices in real-time."
        },
      ]
    },
    {
      category: "Troubleshooting",
      questions: [
        {
          question: "ClipSync isn't capturing my clipboard",
          answer: "Ensure ClipSync has the necessary permissions. On Windows, run as administrator if needed. On Android, enable accessibility permissions. Check that ClipSync is running in the system tray."
        },
        {
          question: "Sync is not working between devices",
          answer: "Check your internet connection and ensure you're signed into the same account on all devices. Verify that cloud sync is enabled in settings. If issues persist, try signing out and back in."
        },
        {
          question: "The app is running slowly",
          answer: "Large clipboard histories can affect performance. Try adjusting the auto-cleanup settings or manually clearing old items. Ensure you have enough free storage space on your device."
        },
      ]
    },
    {
      category: "Billing & Subscriptions",
      questions: [
        {
          question: "How do I upgrade to Pro?",
          answer: "Click the 'Upgrade' button in the app or visit our pricing page. You can choose monthly or annual billing. We accept all major credit cards and PayPal."
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer: "Yes, you can cancel your subscription at any time from your account settings. You'll continue to have Pro access until the end of your current billing period."
        },
        {
          question: "Do you offer refunds?",
          answer: "We offer a 30-day money-back guarantee. If you're not satisfied with ClipSync Pro, contact our support team within 30 days of purchase for a full refund."
        },
      ]
    }
  ];

  const apiDocumentation = [
    {
      title: "Authentication",
      description: "Authenticate with the ClipSync API using API keys",
      endpoint: "POST /api/auth",
    },
    {
      title: "Clipboard Items",
      description: "Retrieve, create, update, and delete clipboard items",
      endpoint: "GET /api/items",
    },
    {
      title: "Search",
      description: "Search through clipboard history with advanced filters",
      endpoint: "GET /api/search",
    },
    {
      title: "Sync",
      description: "Manage device synchronization and conflicts",
      endpoint: "POST /api/sync",
    },
  ];

  const privacyPolicySections = [
    {
      title: "Information We Collect",
      content: "We collect minimal information necessary to provide our services. This includes your email address for account management, encrypted clipboard data (which we cannot decrypt), and basic usage analytics to improve our service."
    },
    {
      title: "How We Use Information",
      content: "Your information is used solely to provide ClipSync services. We never sell, rent, or share your personal information with third parties for marketing purposes. Your encrypted clipboard data is used only for synchronization across your devices."
    },
    {
      title: "Data Security",
      content: "We employ industry-standard security measures including AES-256 encryption, secure data centers, and regular security audits. Your data is encrypted both in transit and at rest."
    },
    {
      title: "Data Retention",
      content: "You control your data retention. Clipboard items are kept according to your settings. Account information is retained as long as your account is active. You can delete your account and all associated data at any time."
    },
  ];

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      searchQuery === "" || 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-8">
            <BookOpen className="w-4 h-4 mr-2" />
            Documentation & Help
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Everything You Need
            <br />
            <span className="gradient-text">to Know</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive guides, FAQ, API documentation, and policies to help you 
            get the most out of ClipSync.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 rounded-xl border-white/20 bg-card/50 backdrop-blur-sm"
            />
          </div>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Quick Start Guides</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get up and running with ClipSync in minutes with our step-by-step guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartGuides.map((guide) => (
              <Card key={guide.title} className="glass-effect rounded-2xl p-6 cursor-pointer group hover:border-primary/50 transition-all border-white/10">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-blue rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <guide.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{guide.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{guide.steps} steps</span>
                    <span>{guide.duration}</span>
                  </div>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                    <span>Start Guide</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Documentation */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="faq" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-card/50 backdrop-blur-sm">
                <TabsTrigger value="faq">FAQ</TabsTrigger>
                <TabsTrigger value="api">API Documentation</TabsTrigger>
                <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
                <TabsTrigger value="terms">Terms of Service</TabsTrigger>
              </TabsList>
            </div>

            {/* FAQ Tab */}
            <TabsContent value="faq">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-black mb-4">Frequently Asked Questions</h2>
                  <p className="text-muted-foreground">
                    Find answers to the most common questions about ClipSync
                  </p>
                </div>

                {filteredFAQ.map((category) => (
                  <div key={category.category} className="mb-12">
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {category.category}
                    </h3>
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((item, index) => (
                        <AccordionItem key={index} value={`${category.category}-${index}`}>
                          <Card className="glass-effect rounded-2xl border-white/10">
                            <AccordionTrigger className="px-6 py-4 hover:no-underline">
                              <div className="flex items-center space-x-3 text-left">
                                <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                <span className="font-medium">{item.question}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4">
                              <p className="text-muted-foreground leading-relaxed pl-8">
                                {item.answer}
                              </p>
                            </AccordionContent>
                          </Card>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}

                {searchQuery && filteredFAQ.length === 0 && (
                  <div className="text-center py-12">
                    <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No results found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search terms or browse our categories above.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* API Documentation Tab */}
            <TabsContent value="api">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-black mb-4">API Documentation</h2>
                  <p className="text-muted-foreground mb-6">
                    Integrate ClipSync into your applications with our RESTful API
                  </p>
                  <Button className="btn-primary">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Full API Docs
                  </Button>
                </div>

                <div className="space-y-6">
                  {apiDocumentation.map((section) => (
                    <Card key={section.title} className="glass-effect rounded-2xl border-white/10">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent-blue rounded-lg flex items-center justify-center">
                              <Code className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold mb-2">{section.title}</h3>
                              <p className="text-muted-foreground text-sm mb-2">{section.description}</p>
                              <code className="text-xs bg-muted px-2 py-1 rounded text-primary">
                                {section.endpoint}
                              </code>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="glass-effect rounded-2xl border-white/10 mt-8">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Authentication Example</h3>
                    <div className="bg-background/50 rounded-xl p-4 border border-border">
                      <pre className="text-sm overflow-x-auto">
                        <code className="text-accent-blue">
{`curl -X POST https://api.clipsync.app/v1/auth \\
  -H "Content-Type: application/json" \\
  -d '{
    "api_key": "your_api_key_here",
    "client_id": "your_client_id"
  }'`}
                        </code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Privacy Policy Tab */}
            <TabsContent value="privacy">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-black mb-4">Privacy Policy</h2>
                  <p className="text-muted-foreground">
                    Last updated: January 15, 2024
                  </p>
                </div>

                <div className="space-y-8">
                  {privacyPolicySections.map((section) => (
                    <Card key={section.title} className="glass-effect rounded-2xl border-white/10">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                          <Shield className="w-5 h-5 text-primary mr-3" />
                          {section.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {section.content}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <p className="text-sm text-muted-foreground mb-4">
                    Have questions about our privacy practices?
                  </p>
                  <Button variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Download Full Privacy Policy
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Terms of Service Tab */}
            <TabsContent value="terms">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-black mb-4">Terms of Service</h2>
                  <p className="text-muted-foreground">
                    Last updated: January 15, 2024
                  </p>
                </div>

                <Card className="glass-effect rounded-2xl border-white/10">
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">1. Acceptance of Terms</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          By using ClipSync, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-4">2. Description of Service</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          ClipSync is a clipboard management application that allows you to store, organize, and synchronize clipboard data across your devices with encryption and security features.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-4">3. User Responsibilities</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to use ClipSync only for lawful purposes.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-4">4. Data Security</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          While we implement robust security measures to protect your data, you acknowledge that no method of transmission over the internet is 100% secure. You use ClipSync at your own risk.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-4">5. Limitation of Liability</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          ClipSync shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center mt-12">
                  <p className="text-sm text-muted-foreground mb-4">
                    Questions about our terms?
                  </p>
                  <Button variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Download Full Terms of Service
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent-blue rounded-full flex items-center justify-center mx-auto mb-8">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-6">Still Need Help?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Can't find what you're looking for? Our support team is here to help you 
            get the most out of ClipSync.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" className="btn-primary">
              Contact Support
            </Button>
            <Button variant="outline" size="lg">
              Join Community Forum
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
