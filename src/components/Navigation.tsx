
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
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
        { name: "Integrations", path: "/integrations" },
        { name: "Documentation", path: "/documentation" },
        { name: "Tutorials", path: "/tutorials" },
      ]
    },
    {
      name: "Landing Pages",
      items: [
        { name: "AI Landing", path: "/ai" },
        { name: "Builder Landing", path: "/builder" },
        { name: "Business Landing", path: "/business" },
        { name: "Developer Landing", path: "/developers" },
        { name: "Mobile Landing", path: "/mobile" },
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
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-whatsapp-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">WX</span>
            </div>
            <span className="text-xl font-bold text-gray-900">WhatsX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-whatsapp-light-green/50">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[300px] gap-3 p-4">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-whatsapp-light-green/50 hover:text-whatsapp-dark-green focus:bg-whatsapp-light-green/50 focus:text-whatsapp-dark-green"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {subItem.name}
                                </div>
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
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="bg-whatsapp-green hover:bg-whatsapp-dark-green">
              <Link to="/form-builder">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.items ? (
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-sm font-medium text-gray-900 border-b border-gray-100">
                        {item.name}
                      </div>
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-6 py-2 text-sm text-gray-600 hover:text-whatsapp-dark-green hover:bg-whatsapp-light-green/50 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-3 py-2 rounded-md text-sm font-medium ${
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
                <Button asChild className="w-full bg-whatsapp-green hover:bg-whatsapp-dark-green">
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
