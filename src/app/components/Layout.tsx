import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Hen Breeds", path: "/breeds" },
    { name: "Our Products", path: "/products" },
    { name: "About Our Farm", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const whatsappNumber = "+919876543210";
  const whatsappMessage = "Hello! I'm interested in FreshNest Poultry products.";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">FN</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-gray-900">FreshNest</span>
                <span className="text-xs text-green-700 leading-tight">Poultry Farm</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-green-600 ${
                    location.pathname === item.path
                      ? "text-green-700"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* WhatsApp Button - Desktop */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block"
            >
              <Button className="bg-green-600 hover:bg-green-700 text-white gap-2">
                <MessageCircle className="w-4 h-4" />
                Order on WhatsApp
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-green-50 text-green-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Order on WhatsApp
                </Button>
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">FN</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg leading-tight text-white">FreshNest</span>
                  <span className="text-xs text-green-400 leading-tight">Poultry Farm</span>
                </div>
              </div>
              <p className="text-sm">
                Premium native and commercial hen breeds from Guntur, Andhra Pradesh. Fresh eggs, quality meat, and healthy birds delivered with care.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-green-400 transition-colors">Home</Link></li>
                <li><Link to="/breeds" className="hover:text-green-400 transition-colors">Hen Breeds</Link></li>
                <li><Link to="/products" className="hover:text-green-400 transition-colors">Products</Link></li>
                <li><Link to="/about" className="hover:text-green-400 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400" />
                  <span>Guntur, Andhra Pradesh 522001, India</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0 text-green-400" />
                  <a href="tel:+919876543210" className="hover:text-green-400 transition-colors">+91 98765 43210</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0 text-green-400" />
                  <a href="mailto:info@freshnestpoultry.com" className="hover:text-green-400 transition-colors">info@freshnestpoultry.com</a>
                </li>
              </ul>
            </div>

            {/* Social & Map */}
            <div>
              <h3 className="font-semibold text-white mb-4">Follow Us</h3>
              <div className="flex gap-3 mb-4">
                <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-600 transition-colors flex items-center justify-center">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-600 transition-colors flex items-center justify-center">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-600 transition-colors flex items-center justify-center">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-600 transition-colors flex items-center justify-center">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122503.04239869582!2d80.36051959999999!3d16.3066525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a755cb1787785%3A0x9f21c28143496d89!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123"
                  className="w-full h-32 rounded-lg border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FreshNest Poultry Location"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2026 FreshNest Poultry Farm. All rights reserved. Direct from Guntur, Andhra Pradesh.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
