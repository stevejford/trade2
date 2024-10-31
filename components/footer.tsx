import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ],
  services: [
    { href: "/search", label: "Find a Tradesperson" },
    { href: "/popular-areas", label: "Popular Areas" },
    { href: "/latest", label: "Latest Additions" },
    { href: "/claim-business", label: "List Your Business" },
  ],
  support: [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/faq", label: "FAQ" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
  social: [
    { href: "https://facebook.com/trusttrades", icon: Facebook, label: "Facebook" },
    { href: "https://twitter.com/trusttrades", icon: Twitter, label: "Twitter" },
    { href: "https://instagram.com/trusttrades", icon: Instagram, label: "Instagram" },
    { href: "https://linkedin.com/company/trusttrades", icon: Linkedin, label: "LinkedIn" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="py-12 md:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-6">
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold">TrustTrades</span>
              </Link>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Sydney, NSW 2000</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>1300 TRADES</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>contact@trusttrades.com</span>
                </div>
              </div>
              <div className="flex space-x-2">
                {footerLinks.social.map(({ href, icon: Icon, label }) => (
                  <Button key={href} variant="ghost" size="icon" asChild>
                    <Link href={href}>
                      <Icon className="h-4 w-4" />
                      <span className="sr-only">{label}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} TrustTrades. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}