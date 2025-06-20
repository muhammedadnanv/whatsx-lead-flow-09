
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";
import MarketingRouter from "@/components/MarketingRouter";
import Index from "./pages/Index";
import FormBuilder from "./pages/FormBuilder";
import AIAgent from "./pages/AIAgent";
import Documentation from "./pages/Documentation";
import HelpCenter from "./pages/HelpCenter";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Support from "./pages/Support";
import Templates from "./pages/Templates";
import Integrations from "./pages/Integrations";
import Tutorials from "./pages/Tutorials";
import Contact from "./pages/Contact";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
// Marketing Strategy Landing Pages (not in main navigation)
import AILanding from "./pages/AILanding";
import BuilderLanding from "./pages/BuilderLanding";
import BusinessLanding from "./pages/BusinessLanding";
import DeveloperLanding from "./pages/DeveloperLanding";
import MobileLanding from "./pages/MobileLanding";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <MarketingRouter />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/form-builder" element={<FormBuilder />} />
            <Route path="/ai-agent" element={<AIAgent />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            {/* Marketing Strategy Landing Pages - Optimized for Conversion */}
            <Route path="/ai" element={<AILanding />} />
            <Route path="/builder" element={<BuilderLanding />} />
            <Route path="/business" element={<BusinessLanding />} />
            <Route path="/developers" element={<DeveloperLanding />} />
            <Route path="/mobile" element={<MobileLanding />} />
            {/* 404 - MUST be the last route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
