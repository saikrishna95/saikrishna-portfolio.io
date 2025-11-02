import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  // update header background + active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const offset = 120; // header height buffer for detection
      for (const item of navItems) {
        const el = document.querySelector(item.href) as HTMLElement | null;
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom >= offset) {
          setActive(item.href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(href);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Layout: center the nav on desktop; keep a mobile toggle on the right */}
        <div className="relative flex items-center justify-center h-16 md:h-20">
          {/* Desktop nav (centered) */}
          <ul className="hidden md:flex items-center gap-3 md:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`nav-link ${active === item.href ? "active" : ""}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle (top-right) */}
          <button
            className="md:hidden absolute right-0 inline-flex h-9 w-9 items-center justify-center rounded-md border border-border"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-border animate-fade-in">
            <ul className="grid gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full text-left nav-link ${
                      active === item.href ? "active" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Slim blue accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-blue-600 via-blue-500 to-transparent" />
    </nav>
  );
};

export default Navigation;
