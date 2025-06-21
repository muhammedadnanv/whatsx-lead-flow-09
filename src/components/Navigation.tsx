
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Lock, Sparkles, Gift } from "lucide-react";
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
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Form Builder", path: "/form-builder" },
    { name: "AI Agent", path: "/ai-agent" },
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
    },
    { name: "Referral Program", path: "/referral", highlight: true }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* WhatsX Branded Logo */}
          <Link to="/" className="flex items-center space-x-3 min-w-0 flex-shrink-0 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-whatsapp-green to-whatsapp-dark-green rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-gray-900 truncate">WhatsX</span>
              <span className="text-xs text-whatsapp-green font-medium -mt-1 hidden sm:block">Lead Generation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-whatsapp-light-green/30 text-sm font-medium text-gray-700 hover:text-whatsapp-dark-green transition-colors">
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
                                className="flex items-center justify-between select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all hover:bg-whatsapp-light-green/20 hover:text-whatsapp-dark-green focus:bg-whatsapp-light-green/20 focus:text-whatsapp-dark-green group"
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
                          to={item.path}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center ${
                            item.highlight 
                              ? "bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 border border-orange-200 hover:from-yellow-200 hover:to-orange-200" 
                              : isActive(item.path)
                              ? "bg-whatsapp-green text-white shadow-md"
                              : "text-gray-700 hover:bg-whatsapp-light-green/30 hover:text-whatsapp-dark-green"
                          }`}
                        >
                          {item.highlight && <Gift className="w-4 h-4 mr-1" />}
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Branded CTA Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <Button asChild className="bg-gradient-to-r from-whatsapp-green to-whatsapp-dark-green hover:from-whatsapp-dark-green hover:to-whatsapp-green text-white font-semibold text-sm px-6 py-2.5 min-h-[44px] shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/form-builder" className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                Start Free Trial
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 min-h-[44px] min-w-[44px] hover:bg-whatsapp-light-green/30"
            >
              {isOpen ? <X className="h-6 w-6 text-whatsapp-green" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-white border-t border-gray-200 max-h-[calc(100vh-5rem)] overflow-y-auto shadow-lg">
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
                          className="flex items-center justify-between px-6 py-3 text-base text-gray-600 hover:text-whatsapp-dark-green hover:bg-whatsapp-light-green/20 rounded-lg min-h-[48px] transition-all duration-200"
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
                      to={item.path}
                      className={`block px-4 py-3 rounded-lg text-base font-medium min-h-[48px] flex items-center transition-all duration-200 ${
                        item.highlight 
                          ? "bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 border border-orange-200" 
                          : isActive(item.path)
                          ? "bg-whatsapp-green text-white shadow-md"
                          : "text-gray-700 hover:bg-whatsapp-light-green/20 hover:text-whatsapp-dark-green"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.highlight && <Gift className="w-4 h-4 mr-2" />}
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Button asChild className="w-full bg-gradient-to-r from-whatsapp-green to-whatsapp-dark-green hover:from-whatsapp-dark-green hover:to-whatsapp-green text-white font-semibold min-h-[48px] text-base shadow-lg">
                  <Link to="/form-builder" onClick={() => setIsOpen(false)} className="flex items-center justify-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Start Free Trial
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
