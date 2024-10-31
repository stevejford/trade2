"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HomeIcon, MenuIcon, Search } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

const routes = [
  {
    title: "Services",
    items: [
      {
        title: "Find a Tradesperson",
        href: "/search",
        description: "Search for verified professionals in your area",
      },
      {
        title: "Popular Areas",
        href: "/popular-areas",
        description: "Browse services by location",
      },
      {
        title: "Latest Additions",
        href: "/latest",
        description: "Recently joined professionals",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Blog",
        href: "/blog",
        description: "Tips, guides, and industry insights",
      },
      {
        title: "How It Works",
        href: "/how-it-works",
        description: "Learn about our service",
      },
      {
        title: "FAQ",
        href: "/faq",
        description: "Common questions answered",
      },
    ],
  },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();

  const getDashboardLink = () => {
    if (!user) return "/claim-business";
    return user.role === "tradesperson" 
      ? "/tradesperson/dashboard"
      : "/homeowner/dashboard";
  };

  const getDashboardText = () => {
    if (!user) return "List Your Business";
    return "Dashboard";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <HomeIcon className="h-6 w-6 text-primary" />
              <span className="hidden font-bold sm:inline-block">
                TrustTrades
              </span>
            </Link>

            <div className="hidden md:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  {routes.map((route) => (
                    <NavigationMenuItem key={route.title}>
                      <NavigationMenuTrigger>{route.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {route.items.map((item) => (
                            <li key={item.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {item.title}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex"
              onClick={() => router.push('/search')}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button asChild variant="default" className="hidden md:flex">
              <Link href={getDashboardLink()}>{getDashboardText()}</Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                >
                  <MenuIcon className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-6 py-6">
                  {routes.map((route) => (
                    <div key={route.title} className="space-y-3">
                      <h4 className="font-medium">{route.title}</h4>
                      <div className="grid gap-2">
                        {route.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Button asChild className="w-full">
                    <Link href={getDashboardLink()}>{getDashboardText()}</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}