import Link from "next/link";

const FOOTER_LINKS = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ],
  Support: [
    { label: "Help Center", href: "/help" },
    { label: "Safety", href: "/safety" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ],
  Tradespeople: [
    { label: "Join as Pro", href: "/join" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "/faq" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="font-bold text-xl">
              TradeFinder
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Connecting you with trusted tradespeople in your area.
            </p>
          </div>
          
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TradeFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}