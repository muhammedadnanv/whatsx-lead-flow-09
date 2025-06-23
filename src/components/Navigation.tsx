
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Form Builder", path: "/form-builder", locked: true },
    { name: "AI Agent", path: "/ai-agent", locked: true },
    {
      name: "Solutions",
      items: [
        { name: "Templates Library", path: "/templates" },
        { 
          name: "Integrations Hub", 
          path: "/integrations",
          restricted: true
        },
        { name: "Documentation", path: "/documentation" },
        { name: "Video Tutorials", path: "/tutorials" },
      ]
    },
    {
      name: "Support",
      items: [
        { name: "Help Center", path: "/help-center" },
        { name: "Contact Sales", path: "/contact" },
        { name: "Get Support", path: "/support" },
      ]
    }
  ];

  const handleNavClick = (path: string, isLocked?: boolean) => {
    if (isLocked) {
      // Redirect to pricing for locked features
      window.location.href = '/pricing';
      return;
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white/90 backdrop-blur-sm border-b border-gray-100'
    }`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* WhatsX Branded Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-shrink-0 group focus-visible:focus-visible"
            aria-label="WhatsX Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-whatsapp-green to-whatsapp-dark-green rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">WhatsX</span>
              <span className="text-xs text-whatsapp-green font-medium -mt-1 hidden sm:block">Lead Generation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-whatsapp-light-green/30 text-sm font-medium text-gray-700 hover:text-whatsapp-dark-green transition-colors focus-visible:focus-visible">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[320px] gap-3 p-6 bg-white border border-gray-100 shadow-xl rounded-lg">
                            <div className="text-sm font-semibold text-whatsapp-green mb-2 border-b border-gray-100 pb-2">
                              {item.name}
                            </div>
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className="flex items-center justify-between select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-whatsapp-light-green/20 hover:text-whatsapp-dark-green focus-visible:focus-visible group"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {subItem.name}
                                </div>
                                {subItem.restricted && (
                                  <Lock className="w-3 h-3 text-gray-400 group-hover:text-whatsapp-green transition-colors" />
                                )}
                              </Link>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.locked ? '/pricing' : item.path}
                          onClick={() => handleNavClick(item.path, item.locked)}
                          className={`relative flex items-center px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 focus-visible:focus-visible ${
                            isActive(item.path)
                              ? "bg-whatsapp-green text-white shadow-md transform scale-105"
                              : "text-gray-700 hover:bg-whatsapp-light-green/30 hover:text-whatsapp-dark-green hover:transform hover:scale-105"
                          }`}
                        >
                          {item.name}
                          {item.locked && (
                            <Lock className="w-3 h-3 ml-1 opacity-60" />
                          )}
                          {isActive(item.path) && (
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
                          )}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 min-h-[44px] min-w-[44px] hover:bg-whatsapp-light-green/30 focus-visible:focus-visible"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-whatsapp-green transition-transform duration-200 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 transition-transform duration-200" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-6 space-y-2 bg-white border-t border-gray-200 shadow-lg animate-scale-in">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.items ? (
                  <div className="space-y-2">
                    <div className="px-4 py-3 text-base font-semibold text-whatsapp-green border-b border-gray-100">
                      {item.name}
                    </div>
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="flex items-center justify-between px-6 py-3 text-base text-gray-600 hover:text-whatsapp-dark-green hover:bg-whatsapp-light-green/20 rounded-lg min-h-[48px] transition-all duration-200 focus-visible:focus-visible"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{subItem.name}</span>
                        {subItem.restricted && (
                          <Lock className="w-4 h-4 text-gray-400" />
                        )}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    to={item.locked ? '/pricing' : item.path}
                    onClick={() => handleNavClick(item.path, item.locked)}
                    className={`relative flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium min-h-[48px] transition-all duration-300 focus-visible:focus-visible ${
                      isActive(item.path)
                        ? "bg-whatsapp-green text-white shadow-md"
                        : "text-gray-700 hover:bg-whatsapp-light-green/20 hover:text-whatsapp-dark-green"
                    }`}
                  >
                    <span>{item.name}</span>
                    <div className="flex items-center space-x-2">
                      {item.locked && (
                        <Lock className="w-4 h-4 text-gray-400" />
                      )}
                      {isActive(item.path) && (
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      )}
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
