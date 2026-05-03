"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Leaf } from "lucide-react";

export default function Footer() {
  const WHATSAPP = "+919876543210";

  return (
    <footer style={{ background: "#1C2B1C", color: "#C8D9C8" }}>
      {/* Main footer */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "56px 24px 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "#F7F3E9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid #6BA368",
                  overflow: "hidden",
                }}
              >
                <Image src="/logo.png" alt="PADVEN Farms" width={44} height={44} style={{ objectFit: "contain" }} />
              </div>
              <div>
                <div style={{ fontWeight: 900, fontSize: "20px", color: "white", lineHeight: 1 }}>PADVEN</div>
                <div style={{ fontSize: "11px", fontWeight: 600, color: "#F4B23D", letterSpacing: "3px" }}>FARMS</div>
              </div>
            </div>
            <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#A0B8A0", marginBottom: "16px" }}>
              Natu Kodi • Fresh Eggs • Pure Milk<br />
              From Our Farm To Your Home 🌾
            </p>
            <p style={{ fontSize: "13px", color: "#7A9A7A", lineHeight: 1.7 }}>
              Premium natural farm products from the heart of Andhra Pradesh — Village roots, family trust, proudly Indian.
            </p>
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              {[
                { label: "FB", href: "#", title: "Facebook" },
                { label: "IG", href: "#", title: "Instagram" },
                { label: "YT", href: "#", title: "YouTube" },
              ].map(({ label, href, title }) => (
                <a
                  key={title}
                  href={href}
                  aria-label={title}
                  title={title}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "#2A3D2A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#6BA368",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                    fontWeight: 800,
                    fontSize: "11px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#2E7D32";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#2A3D2A";
                    e.currentTarget.style.color = "#6BA368";
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Our Products */}
          <div>
            <h3 style={{ color: "white", fontWeight: 700, fontSize: "15px", marginBottom: "20px", letterSpacing: "0.5px" }}>
              Our Products
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { name: "Natu Kodi (Country Chicken)", href: "/natu-kodi" },
                { name: "Fresh Farm Eggs", href: "/eggs" },
                { name: "Pure Buffalo Milk", href: "/milk" },
                { name: "Day-Old Chicks", href: "/natu-kodi" },
                { name: "Kadaknath Eggs", href: "/eggs" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    style={{
                      color: "#A0B8A0",
                      textDecoration: "none",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F4B23D")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#A0B8A0")}
                  >
                    <Leaf size={12} color="#6BA368" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ color: "white", fontWeight: 700, fontSize: "15px", marginBottom: "20px", letterSpacing: "0.5px" }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Gallery", href: "/gallery" },
                { name: "Blog & Tips", href: "/blog" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    style={{
                      color: "#A0B8A0",
                      textDecoration: "none",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F4B23D")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#A0B8A0")}
                  >
                    <Leaf size={12} color="#6BA368" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: "white", fontWeight: 700, fontSize: "15px", marginBottom: "20px", letterSpacing: "0.5px" }}>
              Contact Us
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <MapPin size={16} color="#6BA368" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span style={{ fontSize: "14px", color: "#A0B8A0", lineHeight: 1.6 }}>
                  PADVEN Farms, Andhra Pradesh, India
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Phone size={16} color="#6BA368" />
                <a
                  href="tel:+919876543210"
                  style={{ fontSize: "14px", color: "#A0B8A0", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F4B23D")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#A0B8A0")}
                >
                  +91 98765 43210
                </a>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Mail size={16} color="#6BA368" />
                <a
                  href="mailto:info@padvenfarms.com"
                  style={{ fontSize: "14px", color: "#A0B8A0", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#F4B23D")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#A0B8A0")}
                >
                  info@padvenfarms.com
                </a>
              </div>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "20px",
                background: "#25D366",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "14px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #2A3D2A",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "13px", color: "#7A9A7A", margin: 0 }}>
            © 2026 PADVEN Farms. All rights reserved. | 🌐 padvenfarms.com
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {["Village Roots", "Natural & Healthy", "Premium Quality", "Family Trust", "Proudly Indian 🇮🇳"].map((badge) => (
              <span
                key={badge}
                style={{
                  fontSize: "11px",
                  color: "#6BA368",
                  background: "#2A3D2A",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontWeight: 600,
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
