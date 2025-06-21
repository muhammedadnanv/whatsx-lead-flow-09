
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Github, Sparkles, MessageCircle, Mail, Phone, Gift, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "WhatsX Platform",
      links: [
        { name: "Form Builder", path: "/form-builder" },
        { name: "AI Agent Creator", path: "/ai-agent" },
        { name: "Template Library", path: "/templates" },
        { name: "Integration Hub", path: "/integrations" },
      ]
    },
    {
      title: "Resources & Support",
      links: [
        { name: "Documentation", path: "/documentation" },
        { name: "Video Tutorials", path: "/tutorials" },
        { name: "Help Center", path: "/help-center" },
        { name: "24/7 Support", path: "/support" },
      ]
    },
    {
      title: "Earn & Legal",
      links: [
        { name: "Referral Program", path: "/referral", highlight: true },
        { name: "Contact Sales", path: "/contact" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Cookie Policy", path: "/cookie-policy" },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* WhatsX Brand Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-whatsapp-green to-whatsapp-dark-green rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Sparkles className="w-6 h-6 text-white animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">WhatsX</span>
                <span className="text-sm text-whatsapp-light-green font-medium -mt-1">Lead Generation Platform</span>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your website visitors into qualified WhatsApp leads with our AI-powered form builder and chatbot platform. Join 10,000+ businesses already growing with WhatsX.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-whatsapp-light-green transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@whatsx.ai</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-whatsapp-light-green transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">24/7 WhatsApp Support</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-whatsapp-green hover:bg-gray-700 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-whatsapp-green hover:bg-gray-700 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-whatsapp-green hover:bg-gray-700 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-whatsapp-green hover:bg-gray-700 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Sections with WhatsX Branding */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-6 text-whatsapp-light-green">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`transition-colors duration-200 text-sm leading-relaxed hover:underline flex items-center ${
                        link.highlight 
                          ? "text-yellow-400 hover:text-yellow-300 font-medium" 
                          : "text-gray-300 hover:text-whatsapp-green"
                      }`}
                    >
                      {link.highlight && <Gift className="w-4 h-4 mr-2" />}
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section with Brand Reinforcement */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <span>© {currentYear} WhatsX. All rights reserved.</span>
              <span className="hidden md:inline">Made with ❤️ for lead generation</span>
              <div className="flex items-center space-x-2">
                <span>Developed by</span>
                <a 
                  href="https://www.linkedin.com/in/muhammedadnanvv/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-whatsapp-light-green hover:text-whatsapp-green font-medium transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>Muhammed Adnan</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 px-3 py-1 bg-whatsapp-green/10 rounded-full border border-whatsapp-green/20">
                <Sparkles className="w-3 h-3 text-whatsapp-green" />
                <span className="text-whatsapp-light-green font-medium">Powered by AI</span>
              </div>
              <div className="text-gray-400">
                <span className="text-whatsapp-green font-semibold">87% higher</span> conversion rates guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
