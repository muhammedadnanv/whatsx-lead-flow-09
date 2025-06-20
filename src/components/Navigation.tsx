
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Lock } from "lucide-react";
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
      name: "Resources",
      items: [
        { name: "Templates", path: "/templates" },
        { 
          name: "Integrations", 
          path: "/integrations",
          restricted: true
        },
        { name: "Documentation", path: "/documentation" },
        { name: "Tutorials", path: "/tutorials" },
      ]
    },
    {
      name: "Support",
      items: [
        { name: "Help Center", path: "/help-center" },
        { name: "Contact", path: "/contact" },
        { name: "Support", path: "/support" },
      ]
    }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 min-w-0 flex-shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-whatsapp-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs sm:text-sm">WX</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900 truncate">WhatsX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-whatsapp-light-green/50 text-sm">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[280px] sm:w-[300px] gap-3 p-4">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className="flex items-center justify-between select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-whatsapp-light-green/50 hover:text-whatsapp-dark-green focus:bg-whatsapp-light-green/50 focus:text-whatsapp-dark-green"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {subItem.name}
                                </div>
                                {subItem.restricted && (
                                  <Lock className="w-3 h-3 text-gray-400" />
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
                          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                            isActive(item.path)
                              ? "bg-whatsapp-green text-white"
                              : "text-gray-700 hover:bg-whatsapp-light-green/50 hover:text-whatsapp-dark-green"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <Button asChild className="bg-whatsapp-green hover:bg-whatsapp-dark-green text-sm px-4 py-2 min-h-[40px]">
              <Link to="/form-builder">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 min-h-[44px] min-w-[44px]"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.items ? (
                    <div className="space-y-1">
                      <div className="px-3 py-3 text-base font-medium text-gray-900 border-b border-gray-100">
                        {item.name}
                      </div>
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="flex items-center justify-between px-6 py-3 text-base text-gray-600 hover:text-whatsapp-dark-green hover:bg-whatsapp-light-green/50 rounded-md min-h-[48px]"
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
                      className={`block px-3 py-3 rounded-md text-base font-medium min-h-[48px] flex items-center ${
                        isActive(item.path)
                          ? "bg-whatsapp-green text-white"
                          : "text-gray-700 hover:bg-whatsapp-light-green/50 hover:text-whatsapp-dark-green"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Button asChild className="w-full bg-whatsapp-green hover:bg-whatsapp-dark-green min-h-[48px] text-base">
                  <Link to="/form-builder" onClick={() => setIsOpen(false)}>
                    Get Started
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
