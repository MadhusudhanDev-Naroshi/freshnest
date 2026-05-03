"use client";

import { MessageCircle } from "lucide-react";


const WA = "+919876543210";
const waLink = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

const eggTypes = [
  {
    name: "Desi Brown Eggs",
    telugu: "నాటు కోడి గుడ్లు",
    desc: "Country chicken eggs with rich dark yolk. High in omega-3, natural diet, collected daily from our Natu Kodi hens.",
    price: "₹8–12/egg",
    bulk: "₹220–320/tray (30 eggs)",
    image: "https://images.unsplash.com/photo-1664339307400-9c22e5f44496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    features: ["Dark Rich Yolk", "High Omega-3", "Collected Daily", "Natural Diet"],
    badge: "Most Popular",
    color: "#8B5E34",
  },
  {
    name: "Kadaknath Black Eggs",
    telugu: "కాడక్నాథ్ గుడ్లు",
    desc: "Rare black chicken premium eggs. Rich in protein and amino acids, with documented medicinal benefits. Limited availability.",
    price: "₹15–20/egg",
    bulk: "₹400–550/tray (30 eggs)",
    image: "https://images.unsplash.com/photo-1679602616929-477bf914842f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    features: ["Medicinal Value", "High Protein", "Rare Breed", "Premium Quality"],
    badge: "Premium",
    color: "#2E7D32",
  },
  {
    name: "White Commercial Eggs",
    telugu: "తెల్ల గుడ్లు",
    desc: "White Leghorn eggs — 280-320/year per hen. Consistent size and quality. Great value for daily consumption and cooking.",
    price: "₹6–8/egg",
    bulk: "₹160–220/tray (30 eggs)",
    image: "https://images.unsplash.com/photo-1567486031217-c09630a1c4b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    features: ["White Shell", "Fresh Daily", "Good Size", "Best Value"],
    badge: "Value",
    color: "#F4B23D",
  },
];

export default function EggsPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, rgba(46,125,50,0.88) 0%, rgba(244,178,61,0.7) 100%), url('https://images.unsplash.com/photo-1612182480985-6f3e1b7a3e87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80') center/cover",
          padding: "100px 24px 80px",
          textAlign: "center",
          color: "white",
        }}
      >
        <div className="section-tag" style={{ color: "#F4B23D", justifyContent: "center" }}>🥚 Fresh Eggs</div>
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 4rem)", fontWeight: 900, color: "white", margin: "12px 0 20px" }}>
          Farm Fresh Eggs — Daily
        </h1>
        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.88)", maxWidth: "580px", margin: "0 auto 32px", lineHeight: 1.7 }}>
          Collected every morning from our naturally raised hens. No hormones, no chemicals — just pure farm nutrition in every egg you eat.
        </p>
        <a href={waLink("Hello PADVEN Farms! I'd like to order fresh eggs.")} target="_blank" rel="noopener noreferrer" className="btn-golden">
          <MessageCircle size={18} /> Order Fresh Eggs
        </a>
      </section>

      {/* Eggs grid */}
      <section style={{ background: "#F7F3E9", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div className="section-tag">🌿 Egg Varieties</div>
            <h2 className="section-title" style={{ margin: "0 auto 12px" }}>Our Egg Collection</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>Three varieties — all naturally produced, all daily fresh.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "28px" }}>
            {eggTypes.map((egg) => (
              <div key={egg.name} className="product-card card-hover">
                <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={egg.image} alt={egg.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: "12px", left: "12px", background: egg.color, color: "white", padding: "4px 14px", borderRadius: "20px", fontSize: "11px", fontWeight: 700 }}>{egg.badge}</div>
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#2E7D32", marginBottom: "4px" }}>{egg.name}</h3>
                  <p style={{ fontSize: "12px", color: "#6BA368", fontWeight: 600, marginBottom: "12px" }}>{egg.telugu}</p>
                  <p style={{ fontSize: "14px", color: "#5A5A5A", lineHeight: 1.7, marginBottom: "16px" }}>{egg.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                    {egg.features.map((f) => (
                      <span key={f} style={{ fontSize: "11px", background: "#E8F5E9", color: "#2E7D32", padding: "4px 10px", borderRadius: "12px", fontWeight: 600 }}>✓ {f}</span>
                    ))}
                  </div>
                  <div style={{ background: "#F7F3E9", borderRadius: "8px", padding: "12px", marginBottom: "16px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                      <span style={{ fontSize: "13px", color: "#5A5A5A" }}>Per Egg</span>
                      <span style={{ fontWeight: 800, color: "#8B5E34", fontSize: "16px" }}>{egg.price}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "13px", color: "#5A5A5A" }}>Per Tray (30)</span>
                      <span style={{ fontWeight: 700, color: "#2E7D32", fontSize: "14px" }}>{egg.bulk}</span>
                    </div>
                  </div>
                  <a
                    href={waLink(`Hi! I want to order ${egg.name} from PADVEN Farms.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#25D366", color: "white", padding: "12px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}
                  >
                    <MessageCircle size={16} /> Order Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why our eggs */}
      <section style={{ background: "white", padding: "60px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2 className="section-title">Why Our Eggs Are Different</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", marginTop: "36px" }}>
            {[
              { emoji: "🐓", title: "Free-Range Hens", desc: "Our hens roam freely, resulting in healthier, more nutritious eggs" },
              { emoji: "🌾", title: "Natural Feed", desc: "Grain-based natural diet with no artificial supplements or hormones" },
              { emoji: "📅", title: "Collected Daily", desc: "Fresh eggs collected every morning — never stored for more than 24hrs" },
              { emoji: "✅", title: "Quality Checked", desc: "Every egg is hand-inspected before packing and delivery" },
            ].map((item) => (
              <div key={item.title} style={{ padding: "24px", borderRadius: "12px", background: "#F7F3E9", textAlign: "center" }}>
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.emoji}</div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#2E7D32", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", color: "#5A5A5A", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


