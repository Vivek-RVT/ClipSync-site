import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/components/ThemeProvider";
import { Menu, Clipboard, Moon, Sun, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Features", href: "/features" },
    { name: "Security", href: "/security" },
    { name: "Download", href: "/download" },
    { name: "Docs", href: "/docs" },
  ];

  const NavLink = ({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) => (
    <Link href={href}>
      <span
        className={`cursor-pointer ${
          mobile
            ? "block px-3 py-2 text-base font-medium"
            : "text-sm font-medium transition-colors"
        } ${
          location === href
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground"
        }`}
        onClick={() => mobile && setIsMobileMenuOpen(false)}
      >
        {children}
      </span>
    </Link>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect border-b border-white/10 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Clipboard className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">ClipSync</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-9 h-9 p-0"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
            <Link href="/contact">
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </Link>
            <Link href="/download">
              <Button size="sm" className="btn-primary">
                Download Free
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-9 h-9 p-0"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent-blue rounded-lg flex items-center justify-center">
                      <Clipboard className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xl font-bold gradient-text">ClipSync</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <NavLink key={item.name} href={item.href} mobile>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="mt-8 space-y-4">
                  <Link href="/contact">
                    <Button variant="ghost" className="w-full justify-start" onClick={() => setIsMobileMenuOpen(false)}>
                      Contact
                    </Button>
                  </Link>
                  <Link href="/download">
                    <Button className="w-full btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
                      Download Free
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
