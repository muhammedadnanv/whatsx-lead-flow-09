
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Form Builder", path: "/form-builder" },
        { name: "AI Agent", path: "/ai-agent" },
        { name: "Templates", path: "/templates" },
        { name: "Integrations", path: "/integrations" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", path: "/documentation" },
        { name: "Tutorials", path: "/tutorials" },
        { name: "Help Center", path: "/help-center" },
        { name: "Support", path: "/support" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Contact", path: "/contact" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Cookie Policy", path: "/cookie-policy" },
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-whatsapp-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">WX</span>
              </div>
              <span className="text-xl font-bold">WhatsX</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Build powerful WhatsApp forms and AI agents with ease. Transform your customer interactions today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-whatsapp-green transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-whatsapp-green transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-whatsapp-green transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-whatsapp-green transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-whatsapp-green transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} WhatsX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
