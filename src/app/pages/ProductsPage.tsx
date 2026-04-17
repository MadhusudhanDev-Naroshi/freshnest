import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { MessageCircle, ShoppingCart, Truck, Shield } from "lucide-react";

const products = [
  {
    category: "Live Birds",
    items: [
      {
        name: "Aseel Chicken",
        description: "Premium indigenous fighting and meat breed with excellent heat tolerance",
        price: "₹800-1,500",
        unit: "per bird",
        image: "https://images.unsplash.com/photo-1753894935027-6242e91327ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm91ZCUyMHJvb3N0ZXIlMjByZWQlMjBjaGlja2VufGVufDF8fHx8MTc3NTcyNDgxMXww&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "Native Breed"
      },
      {
        name: "Kadaknath",
        description: "Black meat chicken with medicinal properties, GI tagged premium breed",
        price: "₹1,200-2,000",
        unit: "per bird",
        image: "https://images.unsplash.com/photo-1650354812839-22e450b51806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGthZGFrbmF0aCUyMGNoaWNrZW58ZW58MXx8fHwxNzc1NzI0ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "Premium"
      },
      {
        name: "Vanaraja / Giriraja",
        description: "Dual purpose improved breeds, perfect for backyard and commercial farming",
        price: "₹400-750",
        unit: "per bird",
        image: "https://images.unsplash.com/photo-1762154422395-b317404e9a08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMGNoaWNrZW4lMjBoZW4lMjBydXJhbHxlbnwxfHx8fDE3NzU3MjQ4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "Best Seller"
      },
      {
        name: "Layer Hens (Leghorn/BV-300)",
        description: "High egg production commercial layers, ready to lay or point of lay",
        price: "₹350-650",
        unit: "per bird",
        image: "https://images.unsplash.com/photo-1764858362750-a8a5966574f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGxlZ2hvcm4lMjBoZW4lMjBsYXlpbmclMjBlZ2dzfGVufDF8fHx8MTc3NTcyNDgwMXww&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "High Yield"
      }
    ]
  },
  {
    category: "Day-Old Chicks",
    items: [
      {
        name: "Broiler Chicks (Ross/Cobb)",
        description: "Fast-growing meat birds, ready for market in 6 weeks",
        price: "₹25-35",
        unit: "per chick",
        image: "https://images.unsplash.com/photo-1767367573510-2fef1cb26f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwY2hpY2tzJTIweWVsbG93JTIwZmx1ZmZ5fGVufDF8fHx8MTc3NTcyNDgwNHww&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "Commercial"
      },
      {
        name: "Layer Chicks",
        description: "White Leghorn and BV-300 day-old female chicks",
        price: "₹30-48",
        unit: "per chick",
        image: "https://images.unsplash.com/photo-1767367573510-2fef1cb26f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwY2hpY2tzJTIweWVsbG93JTIwZmx1ZmZ5fGVufDF8fHx8MTc3NTcyNDgwNHww&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "Vaccinated"
      },
      {
        name: "Native Breed Chicks",
        description: "Aseel, Kadaknath, Vanaraja, Giriraja, Gramapriya chicks",
        price: "₹35-150",
        unit: "per chick",
        image: "https://images.unsplash.com/photo-1767367573510-2fef1cb26f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwY2hpY2tzJTIweWVsbG93JTIwZmx1ZmZ5fGVufDF8fHx8MTc3NTcyNDgwNHww&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "Native"
      }
    ]
  },
  {
    category: "Fresh Eggs",
    items: [
      {
        name: "White Eggs (Commercial)",
        description: "Farm-fresh white eggs from Leghorn layers, daily collection",
        price: "₹6-7",
        unit: "per egg",
        image: "https://images.unsplash.com/photo-1679602616929-477bf914842f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGVnZ3MlMjBjYXJ0b24lMjBmcmVzaHxlbnwxfHx8fDE3NzU3MjQ4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "Daily Fresh"
      },
      {
        name: "Brown Eggs",
        description: "Nutritious brown eggs from BV-300 and country birds",
        price: "₹7-8",
        unit: "per egg",
        image: "https://images.unsplash.com/photo-1664339307400-9c22e5f44496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJyb3duJTIwZWdncyUyMGJhc2tldHxlbnwxfHx8fDE3NzU3MjQ4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "Organic Feed"
      },
      {
        name: "Kadaknath Eggs",
        description: "Premium black chicken eggs with high protein content",
        price: "₹15-20",
        unit: "per egg",
        image: "https://images.unsplash.com/photo-1679602616929-477bf914842f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGVnZ3MlMjBjYXJ0b24lMjBmcmVzaHxlbnwxfHx8fDE3NzU3MjQ4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "Medicinal"
      },
      {
        name: "Hatching Eggs",
        description: "Fertile eggs from all breeds for incubation",
        price: "₹10-25",
        unit: "per egg",
        image: "https://images.unsplash.com/photo-1664339307400-9c22e5f44496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJyb3duJTIwZWdncyUyMGJhc2tldHxlbnwxfHx8fDE3NzU3MjQ4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "Fertile"
      }
    ]
  },
  {
    category: "Fresh Chicken Meat",
    items: [
      {
        name: "Broiler Chicken",
        description: "Tender broiler meat, hygienically processed, dressed weight",
        price: "₹180-220",
        unit: "per kg",
        image: "https://images.unsplash.com/photo-1759493321741-883fbf9f433c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwY2hpY2tlbiUyMG1lYXQlMjBmcmVzaHxlbnwxfHx8fDE3NzU3MjQ4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "Fresh Cut"
      },
      {
        name: "Desi Chicken (Country)",
        description: "Traditional country chicken from Vanaraja/Giriraja breeds",
        price: "₹300-380",
        unit: "per kg",
        image: "https://images.unsplash.com/photo-1759493321741-883fbf9f433c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwY2hpY2tlbiUyMG1lYXQlMjBmcmVzaHxlbnwxfHx8fDE3NzU3MjQ4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "Traditional Taste"
      },
      {
        name: "Kadaknath Meat",
        description: "Premium black meat with low fat and high protein",
        price: "₹600-800",
        unit: "per kg",
        image: "https://images.unsplash.com/photo-1759493321741-883fbf9f433c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwY2hpY2tlbiUyMG1lYXQlMjBmcmVzaHxlbnwxfHx8fDE3NzU3MjQ4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "Premium"
      }
    ]
  },
  {
    category: "Poultry Feed & Supplies",
    items: [
      {
        name: "Chick Starter Feed",
        description: "Complete nutrition for 0-4 weeks chicks, medicated",
        price: "₹2,200-2,400",
        unit: "per 50kg bag",
        image: "https://images.unsplash.com/photo-1569466593977-94ee7ed02ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwZmVlZCUyMGdyYWlucyUyMHBvdWx0cnl8ZW58MXx8fHwxNzc1NzI0ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "High Protein"
      },
      {
        name: "Grower Feed",
        description: "For growing birds 5-16 weeks, balanced nutrition",
        price: "₹1,900-2,100",
        unit: "per 50kg bag",
        image: "https://images.unsplash.com/photo-1569466593977-94ee7ed02ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwZmVlZCUyMGdyYWlucyUyMHBvdWx0cnl8ZW58MXx8fHwxNzc1NzI0ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "Growth Formula"
      },
      {
        name: "Layer Feed",
        description: "For laying hens, enriched with calcium for strong shells",
        price: "₹1,800-2,000",
        unit: "per 50kg bag",
        image: "https://images.unsplash.com/photo-1569466593977-94ee7ed02ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwZmVlZCUyMGdyYWlucyUyMHBvdWx0cnl8ZW58MXx8fHwxNzc1NzI0ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "Calcium Rich"
      },
      {
        name: "Broiler Finisher Feed",
        description: "For meat birds final stage, high energy formula",
        price: "₹2,000-2,200",
        unit: "per 50kg bag",
        image: "https://images.unsplash.com/photo-1569466593977-94ee7ed02ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwZmVlZCUyMGdyYWlucyUyMHBvdWx0cnl8ZW58MXx8fHwxNzc1NzI0ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        badge: "Fast Growth"
      }
    ]
  }
];

const features = [
  {
    icon: Shield,
    title: "100% Fresh & Healthy",
    description: "Direct from farm with quality guarantee"
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description: "Across Guntur and nearby areas in AP"
  },
  {
    icon: MessageCircle,
    title: "Expert Support",
    description: "Farming guidance and after-sales care"
  },
  {
    icon: ShoppingCart,
    title: "Bulk Orders",
    description: "Special pricing for commercial buyers"
  }
];

export function ProductsPage() {
  const whatsappNumber = "+919876543210";

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Poultry Products
            </h1>
            <p className="text-lg md:text-xl text-green-50 max-w-3xl mx-auto">
              Fresh from farm to your table. Quality birds, eggs, meat, and feed delivered with care.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {products.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-green-600">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((product, productIndex) => (
                  <Card key={productIndex} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 right-3 bg-green-600 text-white">
                        {product.badge}
                      </Badge>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-end justify-between mb-4">
                        <div>
                          <div className="text-2xl font-bold text-green-700">
                            {product.price}
                          </div>
                          <div className="text-xs text-gray-600">{product.unit}</div>
                        </div>
                      </div>
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                          `Hi! I'd like to order ${product.name}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white gap-2">
                          <MessageCircle className="w-4 h-4" />
                          Order Now
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bulk Orders & Custom Requirements
          </h2>
          <p className="text-lg text-green-50 mb-8">
            Special pricing for commercial buyers, restaurants, and large-scale farmers. Contact us for customized solutions.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Hello! I'm interested in bulk orders. Please share pricing and availability."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Bulk Pricing
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
