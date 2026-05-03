"use client";

import Link from "next/link";


const galleryImages = [
  { src: "https://images.unsplash.com/photo-1709546363436-fb43ac72c3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80", alt: "Free range chickens at PADVEN Farms", label: "Free Range Chickens" },
  { src: "https://images.unsplash.com/photo-1753894935027-6242e91327ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80", alt: "Proud Aseel rooster", label: "Aseel Rooster" },
  { src: "https://images.unsplash.com/photo-1664339307400-9c22e5f44496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80", alt: "Fresh brown eggs basket", label: "Fresh Desi Eggs" },
  { src: "https://images.unsplash.com/photo-1767367573510-2fef1cb26f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80", alt: "Baby chicks at farm", label: "Baby Chicks" },
  { src: "https://images.unsplash.com/photo-1617077890517-42c3adf64770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80", alt: "Mother hen with chicks", label: "Mother Hen & Chicks" },
  { src: "https://images.unsplash.com/photo-1618346146499-5a503b5e4893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80", alt: "Modern farm shed", label: "Farm Sheds" },
  { src: "https://images.unsplash.com/photo-1650354812839-22e450b51806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80", alt: "Kadaknath black chicken", label: "Kadaknath Chicken" },
  { src: "https://images.unsplash.com/photo-1759774289401-188547168d85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80", alt: "Farmer with chickens", label: "Our Farm Team" },
  { src: "https://images.unsplash.com/photo-1682399109294-cc5670465fcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80", alt: "Desi chickens foraging", label: "Desi Chickens" },
  { src: "https://images.unsplash.com/photo-1563636619-e9143da7973b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80", alt: "Pure fresh milk bottle", label: "Pure Fresh Milk" },
  { src: "https://images.unsplash.com/photo-1679602616929-477bf914842f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80", alt: "Kadaknath eggs", label: "Kadaknath Eggs" },
  { src: "https://images.unsplash.com/photo-1545251765-6aad90d25972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80", alt: "Giriraja colorful hen", label: "Giriraja Hen" },
];

export default function GalleryPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #2E7D32 0%, #8B5E34 100%)", padding: "80px 24px 60px", textAlign: "center", color: "white" }}>
        <div className="section-tag" style={{ color: "#F4B23D", justifyContent: "center" }}>📸 Farm Life</div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "white", margin: "12px 0 16px" }}>PADVEN Farms Gallery</h1>
        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          A glimpse into daily life at our farm — our happy chickens, fresh produce, and the people behind PADVEN Farms.
        </p>
      </section>

      {/* Gallery grid */}
      <section style={{ background: "#F7F3E9", padding: "60px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  aspectRatio: i % 5 === 0 ? "4/5" : "4/3",
                  cursor: "pointer",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease, filter 0.3s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.06)"; e.currentTarget.style.filter = "brightness(0.85)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.filter = "brightness(1)"; }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "16px",
                    background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "14px",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                >
                  {img.label}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <p style={{ fontSize: "15px", color: "#6A6A6A", marginBottom: "20px" }}>Follow us on social media for more farm updates!</p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">📍 Visit Our Farm</Link>
              <Link href="/natu-kodi" className="btn-golden">🐓 Order Products</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


