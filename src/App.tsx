import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Doctors from "./pages/Doctors";
import Appointments from "./pages/Appointments";
import PatientPortal from "./pages/PatientPortal";
import Emergency from "./pages/Emergency";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ";
import AccessibilityMenu from "./components/AccessibilityMenu";
import LiveChat from "./components/LiveChat";
import Privacy from "./pages/Privacy";
import CookieNotice from "./components/CookieNotice";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          {/* Skip to main content link for accessibility */}
          <a 
            href="#main-content" 
            className="skip-link"
            onFocus={(e) => e.target.classList.add('top-4')}
            onBlur={(e) => e.target.classList.remove('top-4')}
          >
            Skip to main content
          </a>
          
          <Navbar />
          <main id="main-content" className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/patient-portal" element={<PatientPortal />} />
              <Route path="/emergency" element={<Emergency />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <AccessibilityMenu />
          <LiveChat />
          <CookieNotice />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
