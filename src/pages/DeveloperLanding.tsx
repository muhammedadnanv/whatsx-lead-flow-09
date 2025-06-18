import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Terminal, GitBranch, Database, Zap, Globe, CheckCircle, Star, Download, Copy, Webhook } from "lucide-react";
import { Link } from "react-router-dom";
import { VideoPopup } from "@/components/VideoPopup";
import SEOHead from "@/components/SEOHead";

const DeveloperLanding = () => {
  const videoUrl = "https://www.loom.com/share/c1f4cf1f5d5b4c4d9c5e745032b2a081?sid=666100aa-4de5-4d25-92fc-8f4605f7b862";

  return (
    <>
      <SEOHead 
        title="Developer Platform - WhatsX | API-First Form Builder"
        description="Build powerful form experiences with clean APIs, SDKs, and webhooks. Export production-ready code or integrate seamlessly with your existing stack."
        keywords="developer platform, API first, form builder, webhooks, SDKs, clean code export, REST API"
        canonicalUrl="https://whatsx.lovable.app/developers"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900">
        {/* Navigation */}
        <nav className="bg-gray-900/90 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
          <div className="container mx-auto mobile-px py-3 sm:py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <Terminal className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  WhatsX Dev
                </span>
              </Link>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <Link to="/documentation">
                  <Button variant="ghost" className="text-gray-300 hover:text-white text-sm sm:text-base">
                    API Docs
                  </Button>
                </Link>
                <Link to="/form-builder">
                  <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-sm sm:text-base">
                    <Code className="w-4 h-4 mr-1 sm:mr-2" />
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-1 sm:ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 mobile-px">
          <div className="container mx-auto text-center max-w-5xl">
            <Badge className="mb-4 sm:mb-6 bg-gradient-to-r from-green-900/50 to-blue-900/50 text-green-400 border-green-500/30 text-sm">
              <Terminal className="w-3 h-3 mr-1" />
              Developer-First Platform
            </Badge>
            
            <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Forms as Code
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">API-First Architecture</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed mobile-text">
              Build powerful form experiences with clean APIs, SDKs, and webhooks. 
              Export production-ready code or integrate seamlessly with your existing stack.
            </p>
            
            <div className="button-group flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12">
              <Link to="/form-builder" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                  <Code className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  Start Building
                </Button>
              </Link>
              <Link to="/documentation" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto group relative border-2 border-green-500/30 text-green-400 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-blue-500/10 hover:border-blue-400/50 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <Terminal className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  View API Docs
                </Button>
              </Link>
            </div>

            {/* Developer Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-400">&lt; 100ms</div>
                <div className="text-gray-400 text-sm">API Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">99.99%</div>
                <div className="text-gray-400 text-sm">API Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-gray-400 text-sm">SDK Languages</div>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 mobile-px bg-gray-800/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
                Built for Developers
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mobile-text">
                Modern tools and APIs that integrate seamlessly with your development workflow
              </p>
            </div>

            <div className="card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-700 hover:border-green-500/50 bg-gradient-to-br from-gray-800 to-gray-900">
                <CardHeader>
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Code className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <CardTitle className="text-green-400 text-lg sm:text-xl">Clean Code Export</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm sm:text-base mobile-text">
                    Export production-ready HTML, CSS, JavaScript, React, Vue, or Angular components. No vendor lock-in.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-700 hover:border-blue-500/50 bg-gradient-to-br from-gray-800 to-gray-900">
                <CardHeader>
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Database className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <CardTitle className="text-blue-400 text-lg sm:text-xl">RESTful APIs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm sm:text-base mobile-text">
                    Complete REST API with pagination, filtering, and real-time endpoints. OpenAPI 3.0 documentation included.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-700 hover:border-cyan-500/50 bg-gradient-to-br from-gray-800 to-gray-900">
                <CardHeader>
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Webhook className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <CardTitle className="text-cyan-400 text-lg sm:text-xl">Webhooks & Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm sm:text-base mobile-text">
                    Real-time webhooks for form submissions, user events, and system updates. Reliable delivery guaranteed.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-700 hover:border-purple-500/50 bg-gradient-to-br from-gray-800 to-gray-900">
                <CardHeader>
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <GitBranch className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <CardTitle className="text-purple-400 text-lg sm:text-xl">Version Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm sm:text-base mobile-text">
                    Git-like versioning for your forms. Branch, merge, and deploy with confidence using our CLI tools.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-700 hover:border-orange-500/50 bg-gradient-to-br from-gray-800 to-gray-900">
                <CardHeader>
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Terminal className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <CardTitle className="text-orange-400 text-lg sm:text-xl">CLI & SDKs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm sm:text-base mobile-text">
                    Command-line tools and SDKs for Python, Node.js, PHP, Ruby, Go, and more. Automate everything.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-700 hover:border-red-500/50 bg-gradient-to-br from-gray-800 to-gray-900">
                <CardHeader>
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <CardTitle className="text-red-400 text-lg sm:text-xl">Edge Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm sm:text-base mobile-text">
                    Global CDN, edge caching, and optimized delivery. Your forms load instantly worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Code Example Section */}
        <section className="py-12 sm:py-16 lg:py-20 mobile-px">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                Simple Integration
              </h2>
              <p className="text-lg text-gray-300 mobile-text">
                Get started with just a few lines of code
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
              <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                <span className="text-gray-400 text-sm">JavaScript SDK</span>
                <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <div className="p-4 text-sm font-mono text-gray-300 overflow-x-auto">
                <div className="space-y-1">
                  <div><span className="text-blue-400">import</span> <span className="text-yellow-400">WhatsX</span> <span className="text-blue-400">from</span> <span className="text-green-400">'@whatsx/sdk'</span></div>
                  <div className="mt-2"></div>
                  <div><span className="text-purple-400">const</span> <span className="text-yellow-400">form</span> = <span className="text-blue-400">new</span> <span className="text-yellow-400">WhatsX</span>({`{`}</div>
                  <div className="pl-4"><span className="text-red-400">apiKey</span>: <span className="text-green-400">'your-api-key'</span>,</div>
                  <div className="pl-4"><span className="text-red-400">formId</span>: <span className="text-green-400">'form-123'</span></div>
                  <div>{`}`})</div>
                  <div className="mt-2"></div>
                  <div><span className="text-yellow-400">form</span>.<span className="text-blue-400">render</span>(<span className="text-green-400">'#form-container'</span>)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 mobile-px bg-gradient-to-r from-green-600/20 to-blue-600/20 border-t border-gray-700">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Start Building Today
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto mobile-text">
              Join thousands of developers already building with WhatsX
            </p>
            
            <div className="button-group flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/form-builder" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6">
                  <Code className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  Get Started Free
                </Button>
              </Link>
              <Link to="/documentation" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto border-2 border-green-500/30 text-green-400 hover:bg-green-500/10 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                >
                  <Terminal className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  Read Docs
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DeveloperLanding;
