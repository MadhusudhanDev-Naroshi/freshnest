"use client";

import Link from "next/link";
import { MessageCircle, CheckCircle2, Leaf } from "lucide-react";


const WA = "+919876543210";
const waLink = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const breeds = [
  {
    name: "Aseel",
    telugu: "అసీల్",
    purpose: "Meat / Traditional",
    price: "₹450–600/kg",
    image: "https://images.unsplash.com/photo-1753894935027-6242e91327ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    desc: "Indigenous Indian breed with superb meat quality. Heat-resistant, strong immunity. Perfect for traditional ceremonies and premium meat lovers.",
    features: ["Heat Resistant", "Strong Immunity", "Indigenous Indian", "Premium Meat"],
    badge: "Traditional",
    color: "#8B5E34",
  },
  {
    name: "Kadaknath",
    telugu: "కాడక్నాథ్",
    purpose: "Dual Purpose",
    price: "₹700–900/kg",
    image: "https://images.unsplash.com/photo-1650354812839-22e450b51806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    desc: "Black-meat chicken with medicinal properties. Rich in protein, low in fat. Highly sought after for its unique health benefits.",
    features: ["Black Meat", "Medicinal Properties", "High Protein", "Low Fat"],
    badge: "Premium",
    color: "#2E7D32",
  },
  {
    name: "Vanaraja",
    telugu: "వనరాజ",
    purpose: "Dual Purpose",
    price: "₹380–480/kg",
    image: "https://images.unsplash.com/photo-1762154422395-b317404e9a08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    desc: "ICAR developed breed. 140-160 eggs/year, excellent meat yield. Well-suited for free-range farming in Andhra Pradesh climate.",
    features: ["ICAR Developed", "Dual Purpose", "AP Climate Suited", "Free Range"],
    badge: "Popular",
    color: "#F4B23D",
  },
  {
    name: "Giriraja",
    telugu: "గిరిరాజ",
    purpose: "Dual Purpose",
    price: "₹360–460/kg",
    image: "https://images.unsplash.com/photo-1545251765-6aad90d25972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    desc: "Karnataka origin breed. 180–200 eggs/year, reaches 2kg in 6 months. Low feed consumption makes it economical for farmers.",
    features: ["180-200 Eggs/yr", "2kg in 6 Months", "Low Feed Cost", "Hardy Breed"],
    badge: "Economic",
    color: "#6BA368",
  },
  {
    name: "Gramapriya",
    telugu: "గ్రామప్రియ",
    purpose: "Dual Purpose",
    price: "₹340–440/kg",
    image: "https://images.unsplash.com/photo-1682399109294-cc5670465fcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    desc: "ICAR breed perfect for rural backyard farming. 200–225 eggs/year. Ideal for small farmers and home consumption.",
    features: ["Backyard Farming", "200-225 Eggs/yr", "Disease Resistant", "Rural Suitable"],
    badge: "Backyard",
    color: "#2E7D32",
  },
  {
    name: "White Leghorn",
    telugu: "లెగ్హార్న్",
    purpose: "Egg Layer",
    price: "₹300–380/kg",
    image: "https://images.unsplash.com/photo-1764858362750-a8a5966574f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    desc: "World's best layer breed. 280–320 white eggs/year. Efficient feed conversion makes it ideal for commercial egg production.",
    features: ["280-320 Eggs/yr", "Efficient Feed", "Commercial Layer", "White Eggs"],
    badge: "Layer",
    color: "#8B5E34",
  },
];

export default function NatuKodiPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, rgba(27,94,32,0.9) 0%, rgba(139,94,52,0.85) 100%), url('https://images.unsplash.com/photo-1617077890517-42c3adf64770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80') center/cover",
          padding: "100px 24px 80px",
          textAlign: "center",
          color: "white",
        }}
      >
        <div className="section-tag" style={{ color: "#F4B23D", justifyContent: "center" }}>🐓 Country Chicken</div>
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 4rem)", fontWeight: 900, color: "white", margin: "12px 0 20px", textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>
          నాటు కోడి — Natu Kodi
        </h1>
        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "0 auto 32px", lineHeight: 1.7 }}>
          Pure country chicken breeds raised naturally at PADVEN Farms. Antibiotic-free, free-range, and fed on natural grains — exactly the way your grandparents knew poultry.
        </p>
        <a href={waLink("Hello PADVEN Farms! I want to order Natu Kodi.")} target="_blank" rel="noopener noreferrer" className="btn-golden">
          <MessageCircle size={18} /> Order on WhatsApp
        </a>
      </section>

      {/* Breeds grid */}
      <section style={{ background: "#F7F3E9", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div className="section-tag">🌿 Our Breeds</div>
            <h2 className="section-title" style={{ margin: "0 auto 16px" }}>Available Chicken Breeds</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>All breeds are raised free-range on natural feed without antibiotics.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "28px" }}>
            {breeds.map((b) => (
              <div key={b.name} className="product-card card-hover">
                <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.image} alt={b.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: "12px", left: "12px", background: b.color, color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: 700 }}>{b.badge}</div>
                  <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(0,0,0,0.6)", color: "white", padding: "4px 10px", borderRadius: "12px", fontSize: "11px", fontWeight: 600 }}>{b.purpose}</div>
                </div>
                <div style={{ padding: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
                    <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#2E7D32" }}>{b.name}</h3>
                    <span style={{ fontWeight: 800, fontSize: "15px", color: "#8B5E34" }}>{b.price}</span>
                  </div>
                  <p style={{ fontSize: "12px", color: "#6BA368", fontWeight: 600, marginBottom: "12px" }}>{b.telugu}</p>
                  <p style={{ fontSize: "14px", color: "#5A5A5A", lineHeight: 1.7, marginBottom: "16px" }}>{b.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                    {b.features.map((f) => (
                      <span key={f} style={{ fontSize: "11px", background: "#E8F5E9", color: "#2E7D32", padding: "4px 10px", borderRadius: "12px", fontWeight: 600 }}>✓ {f}</span>
                    ))}
                  </div>
                  <a
                    href={waLink(`Hi! I want to order ${b.name} from PADVEN Farms.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#25D366", color: "white", padding: "12px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}
                  >
                    <MessageCircle size={16} /> Order This Breed
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#2E7D32", padding: "60px 24px", textAlign: "center", color: "white" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "16px" }}>Not Sure Which Breed?</h2>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.85)", marginBottom: "28px" }}>Call us or WhatsApp — we&apos;ll help you choose the right breed for your needs!</p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href={waLink("Hello! I need help choosing a Natu Kodi breed from PADVEN Farms.")} target="_blank" rel="noopener noreferrer" className="btn-golden">
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
          <a href="tel:+919876543210" className="btn-secondary">📞 Call Us Now</a>
        </div>
      </section>
    </div>
  );
}


