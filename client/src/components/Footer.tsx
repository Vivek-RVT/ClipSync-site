import { Link } from "wouter";
import { Clipboard, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  const footerLinks = {
    Product: [
      { name: "Features", href: "/features" },
      { name: "Security", href: "/security" },
      { name: "Pricing", href: "/pricing" },
      { name: "Download", href: "/download" },
      { name: "Changelog", href: "/docs" },
    ],
    Support: [
      { name: "Documentation", href: "/docs" },
      { name: "FAQ", href: "/docs#faq" },
      { name: "Contact", href: "/contact" },
      { name: "Status", href: "#" },
      { name: "Community", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/docs#privacy" },
      { name: "Terms of Service", href: "/docs#terms" },
      { name: "Cookie Policy", href: "/docs#cookies" },
      { name: "GDPR", href: "/docs#gdpr" },
      { name: "Security", href: "/security" },
    ],
  };

  return (
    <footer className="bg-dark-secondary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/">
              <div className="flex items-center space-x-3 mb-6 group cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clipboard className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">ClipSync</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 text-sm">
              Local clipboard saver + viewer. 100% offline, password-protected, and free forever.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/vivekrawat/clipsync"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © 2024 ClipSync by Vivek Rawat (RVT). Free & Open Source.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <div className="flex items-center space-x-2 text-green-400 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
