import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Heart,
  Shield,
  TrendingUp,
  Sprout,
  ThermometerSun,
  Award,
  Users,
  Calendar,
  Star,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import Masonry from "react-responsive-masonry";

const breeds = [
  {
    name: "Aseel",
    purpose: "Meat / Fighting",
    image: "https://images.unsplash.com/photo-1753894935027-6242e91327ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm91ZCUyMHJvb3N0ZXIlMjByZWQlMjBjaGlja2VufGVufDF8fHx8MTc3NTcyNDgxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    features: "Indigenous Indian breed, excellent meat quality, heat resistant, strong immunity",
  },
  {
    name: "Kadaknath",
    purpose: "Dual Purpose",
    image: "https://images.unsplash.com/photo-1650354812839-22e450b51806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGthZGFrbmF0aCUyMGNoaWNrZW58ZW58MXx8fHwxNzc1NzI0ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: "Black meat with medicinal properties, 80-100 eggs/year, disease resistant, premium price",
  },
  {
    name: "Vanaraja",
    purpose: "Dual Purpose",
    image: "https://images.unsplash.com/photo-1762154422395-b317404e9a08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMGNoaWNrZW4lMjBoZW4lMjBydXJhbHxlbnwxfHx8fDE3NzU3MjQ4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: "ICAR developed, 140-160 eggs/year, good meat yield, suited for free-range in AP",
  },
  {
    name: "Giriraja",
    purpose: "Dual Purpose",
    image: "https://images.unsplash.com/photo-1545251765-6aad90d25972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGNoaWNrZW4lMjByb29zdGVyfGVufDF8fHx8MTc3NTcyNDgwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    features: "Karnataka origin, 180-200 eggs/year, 2kg in 6 months, low feed consumption",
  },
  {
    name: "White Leghorn",
    purpose: "Egg Layer",
    image: "https://images.unsplash.com/photo-1764858362750-a8a5966574f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGxlZ2hvcm4lMjBoZW4lMjBsYXlpbmclMjBlZ2dzfGVufDF8fHx8MTc3NTcyNDgwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    features: "World's best layer, 280-320 white eggs/year, commercial production, efficient feed conversion",
  },
  {
    name: "Broiler (Ross/Cobb)",
    purpose: "Meat",
    image: "https://images.unsplash.com/photo-1630090374791-c9eb7bab3935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9pbGVyJTIwY2hpY2tlbiUyMG1lYXQlMjBmYXJtaW5nfGVufDF8fHx8MTc3NTcyNDgwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    features: "Fast growth, 2-2.5kg in 6 weeks, tender meat, high demand in Guntur market",
  },
  {
    name: "Gramapriya",
    purpose: "Dual Purpose",
    image: "https://images.unsplash.com/photo-1682399109294-cc5670465fcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpJTIwY2hpY2tlbiUyMG5hdGl2ZSUyMGluZGlhbnxlbnwxfHx8fDE3NzU3MjQ4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: "ICAR breed for rural areas, 200-225 eggs/year, 1.5kg meat, backyard farming ideal",
  },
  {
    name: "BV-300 Layer",
    purpose: "Egg Layer",
    image: "https://images.unsplash.com/photo-1750184016795-85d307ea2bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VucyUyMHBlY2tpbmclMjBncmFzcyUyMG91dGRvb3J8ZW58MXx8fHwxNzc1NzI0ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: "Brown egg layer, 290-310 eggs/year, hardy breed, good for AP climate conditions",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Antibiotic-Free",
    description: "Our birds are raised naturally without antibiotics or harmful chemicals",
  },
  {
    icon: Sprout,
    title: "Native & Improved Breeds",
    description: "Carefully selected traditional and scientifically improved varieties",
  },
  {
    icon: TrendingUp,
    title: "High Productivity",
    description: "Superior egg production and meat quality for commercial success",
  },
  {
    icon: Heart,
    title: "Humane Farming",
    description: "Ethical practices ensuring bird welfare and natural living conditions",
  },
  {
    icon: ThermometerSun,
    title: "Climate Adapted",
    description: "Breeds specifically suited for Andhra Pradesh's tropical climate",
  },
  {
    icon: Award,
    title: "Fresh & Nutritious",
    description: "Farm-fresh products delivered with guaranteed quality and nutrition",
  },
];

const products = [
  {
    name: "Live Birds",
    description: "Healthy hens and roosters of various breeds",
    price: "Starting from ₹250",
    image: "https://images.unsplash.com/photo-1709546363436-fb43ac72c3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlJTIwcmFuZ2UlMjBjaGlja2VucyUyMGZhcm0lMjBpbmRpYSUyMHN1bm55fGVufDF8fHx8MTc3NTcyNDgwMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Fresh Chicken Meat",
    description: "Broiler and Desi chicken, hygienically processed",
    price: "₹180-380/kg",
    image: "https://images.unsplash.com/photo-1759493321741-883fbf9f433c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwY2hpY2tlbiUyMG1lYXQlMjBmcmVzaHxlbnwxfHx8fDE3NzU3MjQ4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Brown & White Eggs",
    description: "Farm-fresh eggs collected daily",
    price: "₹6-8/egg",
    image: "https://images.unsplash.com/photo-1664339307400-9c22e5f44496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJyb3duJTIwZWdncyUyMGJhc2tldHxlbnwxfHx8fDE3NzU3MjQ4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Day-Old Chicks",
    description: "Quality chicks from all breeds",
    price: "₹30-150/chick",
    image: "https://images.unsplash.com/photo-1767367573510-2fef1cb26f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwY2hpY2tzJTIweWVsbG93JTIwZmx1ZmZ5fGVufDF8fHx8MTc3NTcyNDgwNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Poultry Feed",
    description: "Balanced nutrition feed for all age groups",
    price: "₹1,800-2,200/bag",
    image: "https://images.unsplash.com/photo-1569466593977-94ee7ed02ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwZmVlZCUyMGdyYWlucyUyMHBvdWx0cnl8ZW58MXx8fHwxNzc1NzI0ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Kadaknath Eggs",
    description: "Premium black chicken eggs",
    price: "₹15-20/egg",
    image: "https://images.unsplash.com/photo-1679602616929-477bf914842f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGVnZ3MlMjBjYXJ0b24lMjBmcmVzaHxlbnwxfHx8fDE3NzU3MjQ4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Guntur",
    rating: 5,
    text: "Bought 50 Vanaraja chicks from FreshNest. Excellent quality and survival rate. They guided me through the entire rearing process. Highly recommended!",
    image: "https://images.unsplash.com/photo-1590370082074-a48dcac07dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwaW5kaWFuJTIwZmFtaWx5fGVufDF8fHx8MTc3NTcyNDgwNnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Lakshmi Devi",
    location: "Vijayawada",
    rating: 5,
    text: "The Kadaknath eggs are amazing! My family loves them. Fresh delivery every week to Vijayawada. The taste and quality are unmatched.",
    image: "https://images.unsplash.com/photo-1590370082074-a48dcac07dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwaW5kaWFuJTIwZmFtaWx5fGVufDF8fHx8MTc3NTcyNDgwNnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Suresh Babu",
    location: "Tenali",
    rating: 5,
    text: "Started my poultry farm with Giriraja breed from FreshNest. Great productivity and the team's support is exceptional. My birds are healthy and laying well.",
    image: "https://images.unsplash.com/photo-1590370082074-a48dcac07dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwaW5kaWFuJTIwZmFtaWx5fGVufDF8fHx8MTc3NTcyNDgwNnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    name: "Madhavi Reddy",
    location: "Mangalagiri",
    rating: 5,
    text: "The Aseel roosters are magnificent! Perfect for traditional ceremonies. Healthy birds with proper vaccination records. Very professional service.",
    image: "https://images.unsplash.com/photo-1590370082074-a48dcac07dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwaW5kaWFuJTIwZmFtaWx5fGVufDF8fHx8MTc3NTcyNDgwNnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1709546363436-fb43ac72c3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlJTIwcmFuZ2UlMjBjaGlja2VucyUyMGZhcm0lMjBpbmRpYSUyMHN1bm55fGVufDF8fHx8MTc3NTcyNDgwMHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1753894935027-6242e91327ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm91ZCUyMHJvb3N0ZXIlMjByZWQlMjBjaGlja2VufGVufDF8fHx8MTc3NTcyNDgxMXww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1664339307400-9c22e5f44496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJyb3duJTIwZWdncyUyMGJhc2tldHxlbnwxfHx8fDE3NzU3MjQ4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1767367573510-2fef1cb26f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwY2hpY2tzJTIweWVsbG93JTIwZmx1ZmZ5fGVufDF8fHx8MTc3NTcyNDgwNHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1759774289401-188547168d85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBob2xkaW5nJTIwY2hpY2tlbiUyMHJ1cmFsfGVufDF8fHx8MTc3NTcyNDgwNHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1618346146499-5a503b5e4893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwY29vcCUyMGZhcm0lMjBtb2Rlcm58ZW58MXx8fHwxNzc1NzI0ODAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1617077890517-42c3adf64770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZW4lMjB3aXRoJTIwY2hpY2tzJTIwbW90aGVyfGVufDF8fHx8MTc3NTcyNDgwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1774432128053-bb478f5afa06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29zdGVyJTIwc3VucmlzZSUyMGZhcm0lMjBtb3JuaW5nfGVufDF8fHx8MTc3NTcyNDgwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
];

export function HomePage() {
  const whatsappNumber = "+919876543210";

  return (
    <div className="min-h-screen">
      {/* Section 1: Hero */}
      <section
        className="relative h-[600px] md:h-[700px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1709546363436-fb43ac72c3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlJTIwcmFuZ2UlMjBjaGlja2VucyUyMGZhcm0lMjBpbmRpYSUyMHN1bm55fGVufDF8fHx8MTc3NTcyNDgwMHww&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Premium Hen Breeds & Fresh Poultry Products from Guntur
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto">
            Healthy Aseel, Kadaknath, Vanaraja, Layers & Broilers | Farm-Fresh Eggs & Meat Delivered Daily
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/breeds">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8">
                Explore Hen Types
              </Button>
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hello! I'd like to get a quote for your poultry products."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-green-700 text-lg px-8">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Quote on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Our Popular Hen Types */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Popular Hen Breeds
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From traditional Indian native breeds to high-performance commercial varieties, we offer the best suited for Andhra Pradesh's climate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {breeds.map((breed, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={breed.image}
                    alt={breed.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{breed.name}</h3>
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
                      {breed.purpose}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{breed.features}</p>
                  <Link to="/breeds">
                    <Button variant="outline" className="w-full border-green-600 text-orange-700 hover:bg-orange-50">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/breeds">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                View All Breeds
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Our Hens */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Hens
            </h2>
            <p className="text-lg text-gray-600">
              Quality, care, and commitment in every bird we raise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow bg-white">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-orange-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Our Poultry Products */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Poultry Products
            </h2>
            <p className="text-lg text-gray-600">
              Fresh from farm to your table
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-700">
                      {product.price}
                    </span>
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Hi! I'd like to order ${product.name}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        Buy Now
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/products">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: About Our Farm */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About FreshNest Poultry Farm
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Established in the heart of Guntur, Andhra Pradesh, FreshNest Poultry Farm has been a trusted name in quality poultry farming for over a decade. Our mission is to provide the finest native and commercial hen breeds while maintaining the highest standards of animal welfare and biosecurity.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We specialize in breeding and raising healthy birds that are perfectly adapted to the local climate. From traditional Aseel and Kadaknath to modern high-yield layers and broilers, we offer comprehensive support to both commercial farmers and backyard poultry enthusiasts.
              </p>

              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">10,000+</div>
                  <div className="text-sm text-gray-600">Birds Raised</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">12+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">5,000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1759774289401-188547168d85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBob2xkaW5nJTIwY2hpY2tlbiUyMHJ1cmFsfGVufDF8fHx8MTc3NTcyNDgwNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Farm Team"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-sm font-semibold mb-1">Direct from Farm</div>
                <div className="text-2xl font-bold">Guntur, AP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Farm Facilities */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Farm Facilities
            </h2>
            <p className="text-lg text-gray-600">
              Modern infrastructure ensuring optimal health and productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1618346146499-5a503b5e4893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwY29vcCUyMGZhcm0lMjBtb2Rlcm58ZW58MXx8fHwxNzc1NzI0ODAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern Sheds"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">Modern Sheds</h3>
                <p className="text-sm text-gray-600">
                  Climate-controlled housing with proper ventilation and lighting
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1609509535635-c1f5a530b05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3VsdHJ5JTIwZmFybSUyMHNoZWQlMjBiaXJkc3xlbnwxfHx8fDE3NzU3MjQ4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Biosecurity"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">Strict Biosecurity</h3>
                <p className="text-sm text-gray-600">
                  Regular health checks, vaccination, and disease prevention protocols
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1767367573510-2fef1cb26f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwY2hpY2tzJTIweWVsbG93JTIwZmx1ZmZ5fGVufDF8fHx8MTc3NTcyNDgwNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Hatchery"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">In-House Hatchery</h3>
                <p className="text-sm text-gray-600">
                  State-of-the-art incubation for quality day-old chicks
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1750184016795-85d307ea2bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VucyUyMHBlY2tpbmclMjBncmFzcyUyMG91dGRvb3J8ZW58MXx8fHwxNzc1NzI0ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Free Range"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">Free-Range Areas</h3>
                <p className="text-sm text-gray-600">
                  Open spaces for natural foraging and healthy bird behavior
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 7: Customer Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by farmers and families across Andhra Pradesh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 text-sm italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-orange-700 font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Farm Gallery
            </h2>
            <p className="text-lg text-gray-600">
              A glimpse into our daily operations and happy birds
            </p>
          </div>

          <Masonry columnsCount={4} gutter="16px" className="masonry-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img
                  src={image}
                  alt={`Farm gallery ${index + 1}`}
                  className="w-full h-auto hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </Masonry>

          <div className="text-center mt-10">
            <Link to="/gallery">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 9: Contact & Quote Form */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-lg mb-8 text-green-50">
                Ready to start your poultry journey? Contact us for quality breeds, expert advice, and reliable service.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <a href="tel:+919876543210" className="text-green-50 hover:text-white">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-50 hover:text-white"
                    >
                      Chat with us instantly
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:info@freshnestpoultry.com" className="text-green-50 hover:text-white">
                      info@freshnestpoultry.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">Visit Our Farm</h3>
                <p className="text-green-50 mb-4">
                  FreshNest Poultry Farm<br />
                  Guntur, Andhra Pradesh 522001<br />
                  India
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122503.04239869582!2d80.36051959999999!3d16.3066525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a755cb1787785%3A0x9f21c28143496d89!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123"
                  className="w-full h-48 rounded-lg border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Farm Location"
                ></iframe>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Interested In *</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent" required>
                    <option value="">Select...</option>
                    <option value="live-birds">Live Birds</option>
                    <option value="day-old-chicks">Day-Old Chicks</option>
                    <option value="eggs">Eggs</option>
                    <option value="meat">Fresh Chicken Meat</option>
                    <option value="feed">Poultry Feed</option>
                    <option value="consultation">Farm Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-green-400 hover:bg-green-600 text-white py-3">
                  Send Inquiry
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600 mb-3">Or get instant response on WhatsApp</p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "Hello! I'd like to inquire about your poultry products and services."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-400 hover:bg-green-600 text-white gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Choose Your Hen Breed Today
            </h3>
            <p className="text-lg text-green-50 mb-6">
              Join thousands of satisfied customers across Andhra Pradesh
            </p>
            <Link to="/breeds">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
                Browse All Breeds
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
