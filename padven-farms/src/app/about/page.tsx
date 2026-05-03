"use client";

import Link from "next/link";
import { CheckCircle2, Leaf, Users, Award, TreePine } from "lucide-react";


export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, rgba(139,94,52,0.88) 0%, rgba(46,125,50,0.90) 100%), url('https://images.unsplash.com/photo-1759774289401-188547168d85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920&q=80') center/cover",
          padding: "100px 24px 80px",
          textAlign: "center",
          color: "white",
        }}
      >
        <div className="section-tag" style={{ color: "#F4B23D", justifyContent: "center" }}>🌾 Our Story</div>
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 4rem)", fontWeight: 900, color: "white", margin: "12px 0 20px" }}>
          About PADVEN Farms
        </h1>
        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.88)", maxWidth: "620px", margin: "0 auto", lineHeight: 1.7 }}>
          Rooted in village traditions, driven by family values — bringing the purest farm products from Andhra Pradesh to your home.
        </p>
      </section>

      {/* Mission */}
      <section style={{ background: "#F7F3E9", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "center" }}>
          <div>
            <div className="section-tag">🌿 Our Mission</div>
            <h2 className="section-title">Pure by Nature.<br />Trusted for Life.</h2>
            <p style={{ fontSize: "1rem", color: "#5A5A5A", lineHeight: 1.9, marginBottom: "20px" }}>
              PADVEN Farms started with a simple dream: to give every family access to the same quality of food that we eat ourselves. No shortcuts, no additives, no compromises — just pure, natural produce raised with love and care.
            </p>
            <p style={{ fontSize: "1rem", color: "#5A5A5A", lineHeight: 1.9, marginBottom: "28px" }}>
              We specialize in breeding native Indian chicken varieties like Aseel, Kadaknath, and Vanaraja — all raised free-range on natural grain feed. Our buffaloes and cows graze on fresh grass, producing the thickest, most nutritious milk.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Village roots, proudly Indian", "100% antibiotic-free farming", "Daily fresh delivery, zero middlemen", "Ethical animal care always", "Transparent, honest pricing"].map((v) => (
                <div key={v} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "#3A3A3A", fontWeight: 500 }}>
                  <CheckCircle2 size={18} color="#2E7D32" />
                  {v}
                </div>
              ))}
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1759774289401-188547168d85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80"
              alt="PADVEN Farms"
              style={{ borderRadius: "20px", width: "100%", boxShadow: "0 12px 40px rgba(46,125,50,0.15)" }}
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#2E7D32", padding: "60px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1px" }}>
          {[
            { icon: Users, number: "5,000+", label: "Happy Families" },
            { icon: TreePine, number: "15+", label: "Years Experience" },
            { icon: Award, number: "8", label: "Chicken Breeds" },
            { icon: Leaf, number: "100%", label: "Natural Farming" },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} style={{ textAlign: "center", padding: "28px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.2)" : "none" }}>
                <Icon size={28} color="#F4B23D" />
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "white", margin: "8px 0 4px" }}>{s.number}</div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>{s.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "white", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center", marginBottom: "52px" }}>
          <div className="section-tag">🏆 Our Values</div>
          <h2 className="section-title" style={{ margin: "0 auto 12px" }}>What We Stand For</h2>
        </div>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
          {[
            { emoji: "🌿", title: "Village Roots", desc: "We honour our agricultural heritage and the traditional wisdom of Indian village farming." },
            { emoji: "❤️", title: "Ethical Care", desc: "Every animal at PADVEN Farms lives freely, is fed natural food, and treated with full respect." },
            { emoji: "🏆", title: "Premium Quality", desc: "We never compromise on quality. Every product is checked before it leaves our farm." },
            { emoji: "👨‍👩‍👧‍👦", title: "Family Trust", desc: "We treat every customer as family. Your trust is our most valuable asset." },
            { emoji: "🇮🇳", title: "Proudly Indian", desc: "We promote indigenous breed farming and support the Indian farmer ecosystem." },
          ].map((v) => (
            <div key={v.title} className="card-hover" style={{ padding: "28px", borderRadius: "14px", background: "#FAFDF8", border: "1px solid #EDE8DC", textAlign: "center" }}>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>{v.emoji}</div>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "#2E7D32", marginBottom: "10px" }}>{v.title}</h3>
              <p style={{ fontSize: "14px", color: "#5A5A5A", lineHeight: 1.7 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#F7F3E9", padding: "60px 24px", textAlign: "center" }}>
        <h2 className="section-title">Visit Our Farm</h2>
        <p className="section-subtitle" style={{ margin: "0 auto 32px" }}>See how we farm, meet our animals, and experience PADVEN Farms first-hand. Farm visits available by appointment.</p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="btn-primary">📍 Book Farm Visit</Link>
          <Link href="/natu-kodi" className="btn-golden">🐓 Shop Our Products</Link>
        </div>
      </section>
    </div>
  );
}


