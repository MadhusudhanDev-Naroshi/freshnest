"use client";

import Link from "next/link";


const posts = [
  {
    title: "Why Kadaknath Chicken is Worth the Premium Price",
    category: "Natu Kodi",
    date: "April 10, 2026",
    excerpt: "Kadaknath chicken, known as the 'black gold' of poultry, has been gaining massive attention for its unique health benefits. Here's everything you need to know...",
    image: "https://images.unsplash.com/photo-1650354812839-22e450b51806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    readTime: "5 min read",
  },
  {
    title: "How to Identify Really Fresh Eggs — 3 Simple Tests",
    category: "Fresh Eggs",
    date: "April 5, 2026",
    excerpt: "Not all eggs are equal! Whether you buy from a shop or directly from a farm, here are three easy tests to check if your eggs are truly fresh and safe...",
    image: "https://images.unsplash.com/photo-1664339307400-9c22e5f44496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    readTime: "3 min read",
  },
  {
    title: "A2 Milk vs Regular Milk: What's the Difference?",
    category: "Pure Milk",
    date: "March 28, 2026",
    excerpt: "You've heard everyone talking about A2 milk. But what exactly is it, and why is it considered healthier? We break down the science in simple terms...",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    readTime: "6 min read",
  },
  {
    title: "Best Native Chicken Breeds for Andhra Pradesh Climate",
    category: "Farming Tips",
    date: "March 20, 2026",
    excerpt: "Andhra Pradesh's hot and humid climate requires specific breeds that can thrive naturally. We've compiled the ultimate guide for AP poultry farmers...",
    image: "https://images.unsplash.com/photo-1762154422395-b317404e9a08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    readTime: "8 min read",
  },
  {
    title: "From Farm to Table: How We Ensure Zero Compromise Quality",
    category: "PADVEN Story",
    date: "March 12, 2026",
    excerpt: "At PADVEN Farms, quality is not just a promise — it's a daily practice. Here's a behind-the-scenes look at our quality checks from farm to your door...",
    image: "https://images.unsplash.com/photo-1759774289401-188547168d85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    readTime: "4 min read",
  },
  {
    title: "Starting a Backyard Poultry Farm: Beginner's Guide",
    category: "Farming Tips",
    date: "March 5, 2026",
    excerpt: "Want to start your own small poultry farm? It's more achievable than you think! This comprehensive beginner's guide covers everything from breeds to feed to housing...",
    image: "https://images.unsplash.com/photo-1617077890517-42c3adf64770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    readTime: "10 min read",
  },
];

const categoryColors: Record<string, string> = {
  "Natu Kodi": "#8B5E34",
  "Fresh Eggs": "#2E7D32",
  "Pure Milk": "#1565C0",
  "Farming Tips": "#6BA368",
  "PADVEN Story": "#F4B23D",
};

export default function BlogPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #2E7D32 0%, #6BA368 100%)", padding: "80px 24px 60px", textAlign: "center", color: "white" }}>
        <div className="section-tag" style={{ color: "#F4B23D", justifyContent: "center" }}>📖 Knowledge Hub</div>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "white", margin: "12px 0 16px" }}>Blog & Farming Tips</h1>
        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          Expert insights on poultry farming, egg quality, dairy farming, and everything about natural, healthy food from PADVEN Farms.
        </p>
      </section>

      {/* Blog posts */}
      <section style={{ background: "#F7F3E9", padding: "70px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "28px" }}>
            {posts.map((post, i) => (
              <article key={i} className="product-card card-hover">
                <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div style={{ position: "absolute", top: "12px", left: "12px", background: categoryColors[post.category] || "#2E7D32", color: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: 700 }}>
                    {post.category}
                  </div>
                </div>
                <div style={{ padding: "24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                    <span style={{ fontSize: "12px", color: "#8B8B8B" }}>{post.date}</span>
                    <span style={{ fontSize: "12px", color: "#6BA368", fontWeight: 600 }}>{post.readTime}</span>
                  </div>
                  <h2 style={{ fontSize: "17px", fontWeight: 800, color: "#1C1C1C", lineHeight: 1.4, marginBottom: "12px" }}>{post.title}</h2>
                  <p style={{ fontSize: "13px", color: "#5A5A5A", lineHeight: 1.7, marginBottom: "20px" }}>{post.excerpt}</p>
                  <div style={{
                    display: "inline-block",
                    color: "#2E7D32",
                    fontWeight: 700,
                    fontSize: "14px",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    border: "1.5px solid #2E7D32",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}>
                    Read More →
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ background: "#2E7D32", padding: "60px 24px", textAlign: "center", color: "white" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: "12px" }}>Stay Updated from Our Farm</h2>
        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)", marginBottom: "28px" }}>Follow us for seasonal offers, new products, and farming tips.</p>
        <Link href="/contact" className="btn-golden">📱 Follow Us on WhatsApp</Link>
      </section>
    </div>
  );
}


