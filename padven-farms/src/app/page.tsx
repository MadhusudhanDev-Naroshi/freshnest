"use client";

import Link from "next/link";
import {
  Leaf,
  Shield,
  Heart,
  Award,
  Users,
  Star,
  Phone,
  Mail,
  MessageCircle,
  Egg,
  Milk,
  Drumstick,
  Sun,
  TreePine,
  CheckCircle2,
} from "lucide-react";


const WA = "+919876543210";
const waLink = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const products = [
  {
    name: "Natu Kodi",
    subtitle: "Country Chicken",
    desc: "Indigenous desi chicken breeds — Aseel, Kadaknath, Vanaraja & more. Raised naturally, antibiotic-free.",
    price: "From ₹350/kg",
    emoji: "🐓",
    color: "#8B5E34",
    bg: "#FFF5EE",
    href: "/natu-kodi",
    badge: "Best Seller",
    features: ["Antibiotic-Free", "Free-Range", "Natural Feed"],
    image: "https://images.unsplash.com/photo-1753894935027-6242e91327ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  },
  {
    name: "Fresh Eggs",
    subtitle: "Farm Fresh Daily",
    desc: "Brown desi eggs & white eggs collected daily. Rich in nutrients, no hormones, direct from our hens.",
    price: "₹8–20/egg",
    emoji: "🥚",
    color: "#2E7D32",
    bg: "#F0FAF0",
    href: "/eggs",
    badge: "Daily Fresh",
    features: ["Collected Daily", "No Hormones", "Rich Nutrients"],
    image: "https://images.unsplash.com/photo-1664339307400-9c22e5f44496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  },
  {
    name: "Pure Milk",
    subtitle: "Buffalo & Cow Milk",
    desc: "Fresh pure buffalo and cow milk, rich in protein and fat. Delivered to your doorstep every morning.",
    price: "₹70–90/litre",
    emoji: "🥛",
    color: "#1565C0",
    bg: "#F0F4FF",
    href: "/milk",
    badge: "Morning Fresh",
    features: ["A2 Milk", "Zero Additives", "Daily Delivery"],
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
  },
];

const benefits = [
  { icon: Shield, title: "100% Natural", desc: "No antibiotics, no artificial hormones, no chemicals — purely natural farming." },
  { icon: Leaf, title: "Village Roots", desc: "Rooted in traditional farming wisdom passed through generations in Andhra Pradesh." },
  { icon: Heart, title: "Ethical Care", desc: "Humane treatment, free-range living, and natural diet for all our animals." },
  { icon: Award, title: "Premium Quality", desc: "Strictly quality-checked before delivery — only the best reaches your table." },
  { icon: Users, title: "Family Trust", desc: "Trusted by thousands of families across Andhra Pradesh for fresh farm produce." },
  { icon: Sun, title: "Freshness Guaranteed", desc: "Farm-to-door freshness with same-day or next-morning delivery options." },
];

const testimonials = [
  {
    name: "Suresh Reddy",
    location: "Guntur",
    rating: 5,
    text: "The Natu Kodi from PADVEN Farms is incredible! Tastes exactly like my grandmother used to make. Fresh, healthy and no bad smell.",
  },
  {
    name: "Anitha Devi",
    location: "Vijayawada",
    rating: 5,
    text: "PADVEN's eggs are amazing — rich dark yolk, so fresh. My kids love them every morning. Started ordering weekly now!",
  },
  {
    name: "Raju Naidu",
    location: "Bapatla",
    rating: 5,
    text: "Buffalo milk is pure gold! So thick and creamy. We stopped buying shop milk completely after trying PADVEN Farms milk.",
  },
  {
    name: "Lakshmi Rao",
    location: "Tenali",
    rating: 5,
    text: "Very honest and professional team. The Kadaknath eggs are worth every rupee — medicinal quality and taste is exceptional!",
  },
];

const stats = [
  { number: "5,000+", label: "Happy Families", icon: Users },
  { number: "15+", label: "Years of Farming", icon: TreePine },
  { number: "8", label: "Breeds Available", icon: Award },
  { number: "100%", label: "Natural & Pure", icon: Leaf },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          minHeight: "680px",
          display: "flex",
          alignItems: "center",
          backgroundImage:
            "linear-gradient(135deg, rgba(27,94,32,0.88) 0%, rgba(46,125,50,0.80) 50%, rgba(139,94,52,0.75) 100%), url('https://images.unsplash.com/photo-1709546363436-fb43ac72c3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 24px", textAlign: "center", color: "white" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(244,178,61,0.2)",
              border: "1px solid rgba(244,178,61,0.5)",
              padding: "8px 20px",
              borderRadius: "30px",
              marginBottom: "24px",
              color: "#F4B23D",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            <Leaf size={14} /> From Our Farm To Your Home 🌾
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "clamp(13px, 2vw, 16px)",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#F4B23D",
              marginBottom: "16px",
            }}
          >
            Natu Kodi &bull; Fresh Eggs &bull; Pure Milk
          </div>

          <h1
            style={{
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-1px",
              marginBottom: "24px",
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            PADVEN{" "}
            <span style={{ color: "#F4B23D" }}>FARMS</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
              color: "rgba(255,255,255,0.88)",
              maxWidth: "680px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Pure by Nature. Trusted for Life. We raise desi chickens, collect fresh eggs daily, and deliver pure buffalo milk — straight from our farm in Andhra Pradesh to your doorstep.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/natu-kodi" className="btn-primary" style={{ background: "#F4B23D", borderColor: "#F4B23D", color: "#1C1C1C", fontWeight: 800 }}>
              🐓 Shop Now
            </Link>
            <a
              href={waLink("Hello PADVEN Farms! I'd like to place an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MessageCircle size={18} /> WhatsApp Order
            </a>
          </div>

          {/* Trust badges */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "48px",
            }}
          >
            {["🌿 Natural & Healthy", "✅ Premium Quality", "🏡 Family Trust", "🇮🇳 Proudly Indian"].map((b) => (
              <span
                key={b}
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.9)",
                  background: "rgba(255,255,255,0.12)",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  backdropFilter: "blur(10px)",
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "#2E7D32", color: "white", padding: "40px 24px" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1px",
          }}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  padding: "24px 20px",
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none",
                }}
              >
                <Icon size={28} color="#F4B23D" style={{ marginBottom: "8px" }} />
                <div style={{ fontSize: "2.2rem", fontWeight: 900, color: "white" }}>{stat.number}</div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", marginTop: "4px" }}>{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section style={{ background: "#F7F3E9", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-tag">🌾 What We Offer</div>
            <h2 className="section-title" style={{ margin: "0 auto 16px" }}>
              Farm Fresh Products
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Everything we sell is raised and grown on our own farm — no middlemen, no compromises on quality.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "28px",
            }}
          >
            {products.map((p) => (
              <div key={p.name} className="product-card">
                <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      background: p.color,
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {p.badge}
                  </div>
                </div>

                <div style={{ padding: "24px" }}>
                  <div style={{ fontSize: "32px", marginBottom: "8px" }}>{p.emoji}</div>
                  <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#2E7D32", margin: "0 0 4px" }}>{p.name}</h3>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: "#8B5E34", margin: "0 0 12px", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                    {p.subtitle}
                  </p>
                  <p style={{ fontSize: "14px", color: "#5A5A5A", lineHeight: 1.7, marginBottom: "16px" }}>{p.desc}</p>

                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
                    {p.features.map((f) => (
                      <span key={f} style={{ fontSize: "11px", background: "#E8F5E9", color: "#2E7D32", padding: "4px 10px", borderRadius: "12px", fontWeight: 600 }}>
                        ✓ {f}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "18px", fontWeight: 800, color: "#8B5E34" }}>{p.price}</span>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <Link
                        href={p.href}
                        style={{
                          background: "#2E7D32",
                          color: "white",
                          padding: "10px 18px",
                          borderRadius: "8px",
                          fontWeight: 700,
                          fontSize: "13px",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                        }}
                      >
                        View More
                      </Link>
                      <a
                        href={waLink(`Hi! I'd like to order ${p.name}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: "#25D366",
                          color: "white",
                          padding: "10px 14px",
                          borderRadius: "8px",
                          fontWeight: 700,
                          fontSize: "13px",
                          textDecoration: "none",
                        }}
                      >
                        🛒
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ background: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-tag">🏆 Why PADVEN Farms</div>
            <h2 className="section-title" style={{ margin: "0 auto 16px" }}>
              Pure by Nature. Trusted for Life.
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Every product you receive carries our commitment to nature, quality, and your family&apos;s health.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="card-hover"
                  style={{
                    padding: "32px",
                    borderRadius: "16px",
                    border: "1px solid #EDE8DC",
                    background: "#FAFDF8",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "16px",
                      background: "#E8F5E9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                    }}
                  >
                    <Icon size={28} color="#2E7D32" />
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#2E7D32", marginBottom: "12px" }}>{b.title}</h3>
                  <p style={{ fontSize: "14px", color: "#5A5A5A", lineHeight: 1.7 }}>{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)",
          padding: "80px 24px",
          color: "white",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <div>
            <div className="section-tag" style={{ color: "#F4B23D" }}>🌾 Our Story</div>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900, color: "white", marginBottom: "24px" }}>
              About PADVEN Farms
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(255,255,255,0.85)", marginBottom: "20px" }}>
              Rooted in the village heartland of Andhra Pradesh, PADVEN Farms was built on a simple belief: <strong style={{ color: "#F4B23D" }}>your family deserves the same food we feed ours</strong>.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "rgba(255,255,255,0.75)", marginBottom: "32px" }}>
              We raise native breeds like Aseel, Kadaknath, and Vanaraja using traditional methods — free-range, natural feed, no antibiotics. Our buffalo and cows graze freely, producing the richest, purest milk.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {["Village Roots", "Ethical Care", "100% Natural", "Proudly Indian"].map((tag) => (
                <div
                  key={tag}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  <CheckCircle2 size={16} color="#F4B23D" />
                  {tag}
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px" }}>
              <Link href="/about" className="btn-golden">
                Read Our Story
              </Link>
            </div>
          </div>

          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1759774289401-188547168d85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80"
              alt="PADVEN Farms countryside"
              style={{ borderRadius: "20px", width: "100%", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
            />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: "#F7F3E9", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-tag">⭐ Customer Reviews</div>
            <h2 className="section-title" style={{ margin: "0 auto 16px" }}>
              What Our Customers Say
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Trusted by families across Andhra Pradesh for natural, pure farm produce.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "28px",
                  border: "1px solid #EDE8DC",
                  boxShadow: "0 4px 20px rgba(46,125,50,0.06)",
                }}
              >
                <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} color="#F4B23D" fill="#F4B23D" />
                  ))}
                </div>
                <p style={{ fontSize: "14px", color: "#3A3A3A", lineHeight: 1.8, fontStyle: "italic", marginBottom: "20px" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "#E8F5E9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      fontSize: "18px",
                      color: "#2E7D32",
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "15px", color: "#1C1C1C" }}>{t.name}</div>
                    <div style={{ fontSize: "12px", color: "#8B5E34", fontWeight: 500 }}>{t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ── */}
      <section style={{ background: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div className="section-tag">📸 Farm Life</div>
            <h2 className="section-title" style={{ margin: "0 auto 16px" }}>Farm Gallery</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>A glimpse into daily life at PADVEN Farms.</p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              "https://images.unsplash.com/photo-1709546363436-fb43ac72c3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
              "https://images.unsplash.com/photo-1753894935027-6242e91327ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
              "https://images.unsplash.com/photo-1664339307400-9c22e5f44496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
              "https://images.unsplash.com/photo-1767367573510-2fef1cb26f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
              "https://images.unsplash.com/photo-1617077890517-42c3adf64770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
              "https://images.unsplash.com/photo-1618346146499-5a503b5e4893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80",
            ].map((src, i) => (
              <div
                key={i}
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  aspectRatio: i === 0 || i === 3 ? "1/1.3" : "1/1",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Farm photo ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <Link href="/gallery" className="btn-primary">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* ── CTA / CONTACT ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #8B5E34 0%, #6B4328 100%)",
          padding: "80px 24px",
          color: "white",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>🌾</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "white", marginBottom: "16px" }}>
            Ready to Experience Farm-Fresh Goodness?
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px" }}>
            Order Natu Kodi, Fresh Eggs or Pure Milk directly from PADVEN Farms. Same-day delivery available in selected areas.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={waLink("Hello! I'd like to place an order from PADVEN Farms.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#25D366",
                color: "white",
                padding: "16px 32px",
                borderRadius: "10px",
                fontWeight: 800,
                fontSize: "16px",
                textDecoration: "none",
                boxShadow: "0 8px 24px rgba(37,211,102,0.4)",
              }}
            >
              <MessageCircle size={20} /> Order on WhatsApp
            </a>
            <a
              href="tel:+919876543210"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(255,255,255,0.15)",
                color: "white",
                padding: "16px 32px",
                borderRadius: "10px",
                fontWeight: 700,
                fontSize: "16px",
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.4)",
              }}
            >
              <Phone size={20} /> +91 98765 43210
            </a>
            <Link href="/contact" className="btn-golden">
              <Mail size={18} /> Send Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


