"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Natu Kodi", href: "/natu-kodi" },
  { name: "Fresh Eggs", href: "/eggs" },
  { name: "Pure Milk", href: "/milk" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const WHATSAPP = "+919876543210";
const WA_MSG = encodeURIComponent("Hello PADVEN Farms! I'd like to inquire about your products.");

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        background: scrolled ? "white" : "rgba(255,255,255,0.97)",
        boxShadow: scrolled ? "0 2px 20px rgba(46,125,50,0.1)" : "none",
        backdropFilter: "blur(10px)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        borderBottom: "2px solid #E8F5E9",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          background: "#2E7D32",
          color: "white",
          textAlign: "center",
          padding: "6px 16px",
          fontSize: "13px",
          fontWeight: 500,
          letterSpacing: "0.3px",
        }}
      >
        🌾 Village Roots • Natural &amp; Healthy • Premium Quality • Family Trust 🌿
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "#F7F3E9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #2E7D32",
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(46,125,50,0.2)",
            }}
          >
            <Image src="/logo.png" alt="PADVEN Farms Logo" width={48} height={48} style={{ objectFit: "contain" }} />
          </div>
          <div>
            <div
              style={{
                fontWeight: 900,
                fontSize: "22px",
                color: "#2E7D32",
                lineHeight: 1,
                letterSpacing: "-0.5px",
              }}
            >
              PADVEN
            </div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: "#8B5E34",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              FARMS
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }} className="hidden lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "8px 14px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: pathname === link.href ? 700 : 500,
                color: pathname === link.href ? "#2E7D32" : "#3A3A3A",
                textDecoration: "none",
                background: pathname === link.href ? "#E8F5E9" : "transparent",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (pathname !== link.href) {
                  e.currentTarget.style.color = "#2E7D32";
                  e.currentTarget.style.background = "#F0F7F0";
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== link.href) {
                  e.currentTarget.style.color = "#3A3A3A";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex"
          style={{
            background: "#25D366",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: 700,
            fontSize: "14px",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 4px 12px rgba(37,211,102,0.3)",
            transition: "all 0.3s ease",
          }}
        >
          <MessageCircle size={18} />
          Order Now
        </a>

        {/* Mobile menu btn */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
          style={{
            padding: "8px",
            borderRadius: "8px",
            border: "none",
            background: "#E8F5E9",
            color: "#2E7D32",
            cursor: "pointer",
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "white",
            borderTop: "1px solid #E8F5E9",
            padding: "16px 24px 24px",
          }}
          className="lg:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "block",
                padding: "12px 16px",
                marginBottom: "4px",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: pathname === link.href ? 700 : 500,
                color: pathname === link.href ? "#2E7D32" : "#3A3A3A",
                textDecoration: "none",
                background: pathname === link.href ? "#E8F5E9" : "transparent",
              }}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginTop: "16px",
              background: "#25D366",
              color: "white",
              padding: "14px",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
            }}
          >
            <MessageCircle size={20} />
            Order on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
