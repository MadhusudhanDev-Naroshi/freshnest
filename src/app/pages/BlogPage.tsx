import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Best Hen Breeds for Backyard Farming in Andhra Pradesh",
    excerpt: "Discover the top chicken breeds that thrive in AP's climate and are perfect for small-scale backyard poultry. From Vanaraja to Kadaknath, learn which breeds suit your needs.",
    category: "Breed Guide",
    date: "March 25, 2026",
    readTime: "8 min read",
    author: "FreshNest Team",
    image: "https://images.unsplash.com/photo-1709546363436-fb43ac72c3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlJTIwcmFuZ2UlMjBjaGlja2VucyUyMGZhcm0lMjBpbmRpYSUyMHN1bm55fGVufDF8fHx8MTc3NTcyNDgwMHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    title: "Kadaknath Chicken: The Black Gold of Indian Poultry",
    excerpt: "Everything you need to know about raising Kadaknath chickens - from their unique medicinal properties to optimal farming practices and market potential in Andhra Pradesh.",
    category: "Featured Breed",
    date: "March 18, 2026",
    readTime: "10 min read",
    author: "FreshNest Team",
    image: "https://images.unsplash.com/photo-1650354812839-22e450b51806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGthZGFrbmF0aCUyMGNoaWNrZW58ZW58MXx8fHwxNzc1NzI0ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    title: "Layer vs Broiler: Which is More Profitable for Small Farmers?",
    excerpt: "A comprehensive cost-benefit analysis comparing egg production (layers) and meat production (broilers) for small-scale poultry farmers in Guntur region.",
    category: "Business Tips",
    date: "March 10, 2026",
    readTime: "12 min read",
    author: "FreshNest Team",
    image: "https://images.unsplash.com/photo-1764858362750-a8a5966574f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGxlZ2hvcm4lMjBoZW4lMjBsYXlpbmclMjBlZ2dzfGVufDF8fHx8MTc3NTcyNDgwMXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    title: "Free-Range vs Cage: Choosing the Right System for Your Farm",
    excerpt: "Understand the pros and cons of different poultry housing systems and which works best for native breeds in tropical climates like ours.",
    category: "Farm Management",
    date: "March 3, 2026",
    readTime: "9 min read",
    author: "FreshNest Team",
    image: "https://images.unsplash.com/photo-1618346146499-5a503b5e4893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwY29vcCUyMGZhcm0lMjBtb2Rlcm58ZW58MXx8fHwxNzc1NzI0ODAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    title: "Common Poultry Diseases in Andhra Pradesh and Prevention",
    excerpt: "Essential guide to recognizing, preventing, and managing common health issues affecting chickens in tropical climates. Vaccination schedules included.",
    category: "Health & Care",
    date: "February 24, 2026",
    readTime: "15 min read",
    author: "Dr. Veterinary Expert",
    image: "https://images.unsplash.com/photo-1767367573510-2fef1cb26f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwY2hpY2tzJTIweWVsbG93JTIwZmx1ZmZ5fGVufDF8fHx8MTc3NTcyNDgwNHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 6,
    title: "Feeding Your Chickens: Complete Nutrition Guide",
    excerpt: "Learn about optimal feed formulations for different age groups and breed types. Tips on reducing feed costs while maintaining bird health and productivity.",
    category: "Nutrition",
    date: "February 15, 2026",
    readTime: "11 min read",
    author: "FreshNest Team",
    image: "https://images.unsplash.com/photo-1569466593977-94ee7ed02ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwZmVlZCUyMGdyYWlucyUyMHBvdWx0cnl8ZW58MXx8fHwxNzc1NzI0ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 7,
    title: "Aseel Chicken: India's Ancient Fighting Breed for Modern Farmers",
    excerpt: "History, characteristics, and practical farming tips for raising Aseel chickens. Why this traditional breed is gaining popularity again in Andhra Pradesh.",
    category: "Featured Breed",
    date: "February 8, 2026",
    readTime: "10 min read",
    author: "FreshNest Team",
    image: "https://images.unsplash.com/photo-1753894935027-6242e91327ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm91ZCUyMHJvb3N0ZXIlMjByZWQlMjBjaGlja2VufGVufDF8fHx8MTc3NTcyNDgxMXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 8,
    title: "Starting a Poultry Farm: Complete Beginner's Guide for AP",
    excerpt: "Step-by-step guide covering licenses, investment, breed selection, infrastructure, and marketing for aspiring poultry farmers in Andhra Pradesh.",
    category: "Getting Started",
    date: "January 30, 2026",
    readTime: "18 min read",
    author: "FreshNest Team",
    image: "https://images.unsplash.com/photo-1759774289401-188547168d85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBob2xkaW5nJTIwY2hpY2tlbiUyMHJ1cmFsfGVufDF8fHx8MTc3NTcyNDgwNHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 9,
    title: "Organic Egg Production: Natural Farming Methods",
    excerpt: "How to produce certified organic eggs using natural feeds, traditional practices, and sustainable farming methods. Market opportunities in urban areas.",
    category: "Organic Farming",
    date: "January 22, 2026",
    readTime: "13 min read",
    author: "FreshNest Team",
    image: "https://images.unsplash.com/photo-1664339307400-9c22e5f44496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJyb3duJTIwZWdncyUyMGJhc2tldHxlbnwxfHx8fDE3NzU3MjQ4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Poultry Farming Blog
            </h1>
            <p className="text-lg md:text-xl text-green-50 max-w-3xl mx-auto">
              Expert tips, breed guides, and farming advice from FreshNest Poultry Farm
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-green-50 mb-8">
            Get the latest poultry farming tips, breed updates, and special offers delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button className="px-8 py-3 bg-white text-green-700 rounded-md font-semibold hover:bg-green-50 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-green-100 mt-4">
            Join 2,000+ farmers already receiving our weekly updates
          </p>
        </div>
      </section>
    </div>
  );
}
