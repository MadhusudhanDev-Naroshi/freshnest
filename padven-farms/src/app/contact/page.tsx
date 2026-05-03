"use client";

import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";


const WA = "+919876543210";
const waLink = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

export default function ContactPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)", padding: "80px 24px 60px", textAlign: "center", color: "white" }}>
        <div className="section-tag" style={{ color: "#F4B23D", justifyContent: "center" }}>📞 Get In Touch</div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "white", margin: "12px 0 16px" }}>Contact PADVEN Farms</h1>
        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          We&apos;re always happy to talk! Reach out to order, ask questions, or visit our farm.
        </p>
      </section>

      {/* Contact grid */}
      <section style={{ background: "#F7F3E9", padding: "70px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
          {/* Contact info */}
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#2E7D32", marginBottom: "32px" }}>Reach Us</h2>

            {[
              {
                icon: MessageCircle,
                title: "WhatsApp (Fastest)",
                value: "+91 98765 43210",
                link: waLink("Hello PADVEN Farms! I want to contact you."),
                desc: "Chat with us instantly — orders, queries, delivery",
                color: "#25D366",
              },
              {
                icon: Phone,
                title: "Call Us",
                value: "+91 98765 43210",
                link: "tel:+919876543210",
                desc: "Mon–Sun, 6 AM to 8 PM",
                color: "#2E7D32",
              },
              {
                icon: Mail,
                title: "Email",
                value: "info@padvenfarms.com",
                link: "mailto:info@padvenfarms.com",
                desc: "For bulk orders & business queries",
                color: "#8B5E34",
              },
              {
                icon: MapPin,
                title: "Visit Our Farm",
                value: "Andhra Pradesh, India",
                link: "#",
                desc: "Farm visits available by prior appointment",
                color: "#F4B23D",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                    padding: "20px",
                    borderRadius: "12px",
                    background: "white",
                    border: "1px solid #EDE8DC",
                    marginBottom: "16px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: item.color + "20", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={22} color={item.color} />
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#8B5E34", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "4px" }}>{item.title}</div>
                    <div style={{ fontSize: "16px", fontWeight: 700, color: "#1C1C1C", marginBottom: "4px" }}>{item.value}</div>
                    <div style={{ fontSize: "13px", color: "#6A6A6A" }}>{item.desc}</div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Quick Order form */}
          <div style={{ background: "white", borderRadius: "20px", padding: "36px", border: "1px solid #EDE8DC", boxShadow: "0 8px 32px rgba(46,125,50,0.08)" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#2E7D32", marginBottom: "8px" }}>Quick Order Inquiry</h2>
            <p style={{ fontSize: "14px", color: "#6A6A6A", marginBottom: "28px" }}>Fill this form and we&apos;ll WhatsApp you within minutes!</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
                const product = (form.elements.namedItem("product") as HTMLSelectElement).value;
                const msg = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                const waMsg = `Hello PADVEN Farms!\n\nName: ${name}\nPhone: ${phone}\nInterested in: ${product}\nMessage: ${msg}`;
                window.open(waLink(waMsg), "_blank");
              }}
            >
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#3A3A3A", marginBottom: "8px" }}>Your Name *</label>
                <input name="name" type="text" required className="form-input" placeholder="Enter your name" />
              </div>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#3A3A3A", marginBottom: "8px" }}>Phone Number *</label>
                <input name="phone" type="tel" required className="form-input" placeholder="+91 98765 43210" />
              </div>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#3A3A3A", marginBottom: "8px" }}>Interested In *</label>
                <select name="product" required className="form-input">
                  <option value="">Select a product...</option>
                  <option value="Natu Kodi (Country Chicken)">🐓 Natu Kodi (Country Chicken)</option>
                  <option value="Fresh Desi Eggs">🥚 Fresh Desi Eggs</option>
                  <option value="Kadaknath Eggs">🥚 Kadaknath Eggs</option>
                  <option value="Pure Buffalo Milk">🥛 Pure Buffalo Milk</option>
                  <option value="Cow Milk (A2)">🥛 Cow Milk (A2)</option>
                  <option value="Day-Old Chicks">🐣 Day-Old Chicks</option>
                  <option value="Farm Visit">🌾 Farm Visit / Consultation</option>
                </select>
              </div>
              <div style={{ marginBottom: "24px" }}>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#3A3A3A", marginBottom: "8px" }}>Message</label>
                <textarea name="message" rows={4} className="form-input" placeholder="Tell us your requirements, quantity, delivery area..." style={{ resize: "vertical" }} />
              </div>
              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                <MessageCircle size={18} /> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section style={{ background: "white", padding: "0" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983934.2628741735!2d79.43615!3d16.50193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35efa800000001%3A0xd8d17a7a6b97a4e!2sAndhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
          style={{ width: "100%", height: "360px", border: "none", display: "block" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="PADVEN Farms Location, Andhra Pradesh"
        />
      </section>
    </div>
  );
}


