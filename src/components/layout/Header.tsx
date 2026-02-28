import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAVIGATION } from "@/lib/constants";
import { useTranslation } from "react-i18next";
import LanguageSelector from "@/components/LanguageSelector";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import palantirLogo from "@/assets/palantir-logo-square.png";
import palantirBrand from "@/assets/palantir-brand.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          <img src={palantirLogo} alt="PALANTIR-CODE Logo" className="h-10 w-10 object-contain terminal-logo-bright" />
          <img src={palantirBrand} alt="PALANTIR-CODE" className="h-7 sm:h-9 object-contain terminal-logo-bright" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">{t("nav.services")}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4">
                    {NAVIGATION.services.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link to={item.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{t(`services.${item.name === "Migration Services" ? "migration" : item.name === "Implementation" ? "implementation" : item.name === "Custom Development" ? "development" : "managed"}`)}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about" className={cn("group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground", location.pathname === "/about" && "bg-accent/50")}>
                  {t("nav.about")}
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/blog" className={cn("group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground", location.pathname.startsWith("/blog") && "bg-accent/50")}>
                  Blog
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact" className={cn("group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground", location.pathname === "/contact" && "bg-accent/50")}>
                  {t("nav.contact")}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LanguageSelector />
          
          <div className="hidden lg:flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            {t("nav.officialPartner")}
          </div>

          <Button asChild className="hidden sm:inline-flex">
            <Link to="/contact">{t("nav.scheduleDemo")}</Link>
          </Button>

          <button type="button" className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="space-y-1 px-4 pb-4 pt-2">
            <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-2 text-xs font-medium text-primary mb-4">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              {t("nav.officialPartnerSpain")}
            </div>

            <div className="py-2">
              <div className="flex items-center justify-between px-3 py-2 text-sm font-medium text-muted-foreground">
                {t("nav.services")}
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="pl-4 space-y-1">
                {NAVIGATION.services.map((item) => (
                  <Link key={item.name} to={item.href} className="block rounded-md px-3 py-2 text-sm hover:bg-accent" onClick={() => setMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/about" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent" onClick={() => setMobileMenuOpen(false)}>
              {t("nav.about")}
            </Link>

            <Link to="/blog" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>

            <Link to="/contact" className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-accent" onClick={() => setMobileMenuOpen(false)}>
              {t("nav.contact")}
            </Link>

            <div className="pt-4">
              <Button asChild className="w-full">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  {t("nav.scheduleDemo")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
