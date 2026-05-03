"use client";

import { MessageCircle } from "lucide-react";


const WA = "+919876543210";
const waLink = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

export default function MilkPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, rgba(21,101,192,0.85) 0%, rgba(46,125,50,0.88) 100%), url('https://images.unsplash.com/photo-1563636619-e9143da7973b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80') center/cover",
          padding: "100px 24px 80px",
          textAlign: "center",
          color: "white",
        }}
      >
        <div className="section-tag" style={{ color: "#F4B23D", justifyContent: "center" }}>🥛 Pure Milk</div>
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 4rem)", fontWeight: 900, color: "white", margin: "12px 0 20px" }}>
          స్వచ్ఛమైన పాలు — Pure Milk
        </h1>
        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.88)", maxWidth: "580px", margin: "0 auto 32px", lineHeight: 1.7 }}>
          Rich, creamy buffalo and cow milk — completely pure with zero additives. Delivered fresh to your doorstep every morning from our farm.
        </p>
        <a href={waLink("Hello PADVEN Farms! I'd like to subscribe to your milk delivery.")} target="_blank" rel="noopener noreferrer" className="btn-golden">
          <MessageCircle size={18} /> Subscribe to Milk
        </a>
      </section>

      {/* Milk types */}
      <section style={{ background: "#F7F3E9", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div className="section-tag">🐄 Our Milk</div>
            <h2 className="section-title" style={{ margin: "0 auto 12px" }}>Choose Your Milk</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>Zero urea, zero water, zero additives — just pure natural milk.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }}>
            {[
              {
                name: "Buffalo Milk",
                telugu: "గేదె పాలు",
                desc: "Rich, thick buffalo milk with high fat content (6–8%). Ideal for making ghee, curd, paneer, and sweets. Our buffaloes graze freely on fresh grass.",
                price: "₹80–90/litre",
                sub: "₹2,200–2,400/month (1L daily)",
                features: ["6-8% Fat", "Thick & Creamy", "Great for Ghee", "Morning Fresh"],
                badge: "Richest",
                color: "#2E7D32",
                image: "https://images.unsplash.com/photo-1516069677018-378515003435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
              },
              {
                name: "Cow Milk (A2)",
                telugu: "ఆవు పాలు",
                desc: "Pure A2 cow milk from our native desi cows. Light, easily digestible with all essential nutrients. Perfect for children and elderly.",
                price: "₹70–80/litre",
                sub: "₹1,900–2,200/month (1L daily)",
                features: ["A2 Protein", "Easily Digestible", "Kid Friendly", "Desi Cows"],
                badge: "Healthiest",
                color: "#8B5E34",
                image: "https://images.unsplash.com/photo-1529726187144-ef73c4f8d3cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
              },
            ].map((milk) => (
              <div key={milk.name} className="product-card card-hover">
                <div style={{ height: "210px", overflow: "hidden", position: "relative" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={milk.image} alt={milk.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: "12px", left: "12px", background: milk.color, color: "white", padding: "4px 14px", borderRadius: "20px", fontSize: "11px", fontWeight: 700 }}>{milk.badge}</div>
                </div>
                <div style={{ padding: "28px" }}>
                  <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#2E7D32", marginBottom: "4px" }}>{milk.name}</h3>
                  <p style={{ fontSize: "12px", color: "#6BA368", fontWeight: 600, marginBottom: "12px" }}>{milk.telugu}</p>
                  <p style={{ fontSize: "14px", color: "#5A5A5A", lineHeight: 1.7, marginBottom: "16px" }}>{milk.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                    {milk.features.map((f) => (
                      <span key={f} style={{ fontSize: "11px", background: "#E8F5E9", color: "#2E7D32", padding: "4px 10px", borderRadius: "12px", fontWeight: 600 }}>✓ {f}</span>
                    ))}
                  </div>
                  <div style={{ background: "#F7F3E9", borderRadius: "10px", padding: "14px", marginBottom: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                      <span style={{ fontSize: "14px", color: "#5A5A5A" }}>Per Litre</span>
                      <span style={{ fontWeight: 800, color: "#8B5E34", fontSize: "18px" }}>{milk.price}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: "13px", color: "#5A5A5A" }}>Monthly Sub</span>
                      <span style={{ fontWeight: 700, color: "#2E7D32", fontSize: "13px" }}>{milk.sub}</span>
                    </div>
                  </div>
                  <a
                    href={waLink(`Hi PADVEN Farms! I want to subscribe to ${milk.name} delivery.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#25D366", color: "white", padding: "14px", borderRadius: "8px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}
                  >
                    <MessageCircle size={16} /> Subscribe Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milk purity guarantee */}
      <section style={{ background: "#2E7D32", padding: "60px 24px", textAlign: "center", color: "white" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "8px" }}>Our Milk Purity Guarantee</h2>
        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)", marginBottom: "36px" }}>We stand behind every drop we deliver.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px", maxWidth: "900px", margin: "0 auto" }}>
          {["Zero Water Added", "Zero Urea / Chemicals", "Zero Preservatives", "Daily Fresh", "Direct from Cow/Buffalo", "Tested Regularly"].map((g) => (
            <div key={g} style={{ background: "rgba(255,255,255,0.12)", borderRadius: "10px", padding: "16px", fontWeight: 600, fontSize: "14px" }}>
              ✅ {g}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


