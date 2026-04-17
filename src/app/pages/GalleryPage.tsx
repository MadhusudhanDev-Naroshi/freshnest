import { useState } from "react";
import Masonry from "react-responsive-masonry";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

const galleryImages = {
  all: [
    {
      url: "https://images.unsplash.com/photo-1709546363436-fb43ac72c3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlJTIwcmFuZ2UlMjBjaGlja2VucyUyMGZhcm0lMjBpbmRpYSUyMHN1bm55fGVufDF8fHx8MTc3NTcyNDgwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Free-Range Chickens",
      category: "farm"
    },
    {
      url: "https://images.unsplash.com/photo-1753894935027-6242e91327ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm91ZCUyMHJvb3N0ZXIlMjByZWQlMjBjaGlja2VufGVufDF8fHx8MTc3NTcyNDgxMXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Aseel Rooster",
      category: "breeds"
    },
    {
      url: "https://images.unsplash.com/photo-1650354812839-22e450b51806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGthZGFrbmF0aCUyMGNoaWNrZW58ZW58MXx8fHwxNzc1NzI0ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Kadaknath Hen",
      category: "breeds"
    },
    {
      url: "https://images.unsplash.com/photo-1664339307400-9c22e5f44496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJyb3duJTIwZWdncyUyMGJhc2tldHxlbnwxfHx8fDE3NzU3MjQ4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Fresh Brown Eggs",
      category: "products"
    },
    {
      url: "https://images.unsplash.com/photo-1767367573510-2fef1cb26f88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwY2hpY2tzJTIweWVsbG93JTIwZmx1ZmZ5fGVufDF8fHx8MTc3NTcyNDgwNHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Day-Old Chicks",
      category: "products"
    },
    {
      url: "https://images.unsplash.com/photo-1759774289401-188547168d85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBob2xkaW5nJTIwY2hpY2tlbiUyMHJ1cmFsfGVufDF8fHx8MTc3NTcyNDgwNHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Farm Owner with Hen",
      category: "farm"
    },
    {
      url: "https://images.unsplash.com/photo-1618346146499-5a503b5e4893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwY29vcCUyMGZhcm0lMjBtb2Rlcm58ZW58MXx8fHwxNzc1NzI0ODAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Modern Chicken Coop",
      category: "facilities"
    },
    {
      url: "https://images.unsplash.com/photo-1617077890517-42c3adf64770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZW4lMjB3aXRoJTIwY2hpY2tzJTIwbW90aGVyfGVufDF8fHx8MTc3NTcyNDgwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Hen with Chicks",
      category: "farm"
    },
    {
      url: "https://images.unsplash.com/photo-1774432128053-bb478f5afa06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29zdGVyJTIwc3VucmlzZSUyMGZhcm0lMjBtb3JuaW5nfGVufDF8fHx8MTc3NTcyNDgwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Rooster at Sunrise",
      category: "farm"
    },
    {
      url: "https://images.unsplash.com/photo-1762154422395-b317404e9a08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMGNoaWNrZW4lMjBoZW4lMjBydXJhbHxlbnwxfHx8fDE3NzU3MjQ4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Brown Vanaraja Hen",
      category: "breeds"
    },
    {
      url: "https://images.unsplash.com/photo-1764858362750-a8a5966574f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGxlZ2hvcm4lMjBoZW4lMjBsYXlpbmclMjBlZ2dzfGVufDF8fHx8MTc3NTcyNDgwMXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "White Leghorn Layer",
      category: "breeds"
    },
    {
      url: "https://images.unsplash.com/photo-1630090374791-c9eb7bab3935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9pbGVyJTIwY2hpY2tlbiUyMG1lYXQlMjBmYXJtaW5nfGVufDF8fHx8MTc3NTcyNDgwMnww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Broiler Birds",
      category: "breeds"
    },
    {
      url: "https://images.unsplash.com/photo-1545251765-6aad90d25972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGNoaWNrZW4lMjByb29zdGVyfGVufDF8fHx8MTc3NTcyNDgwMnww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Colorful Giriraja",
      category: "breeds"
    },
    {
      url: "https://images.unsplash.com/photo-1759493321741-883fbf9f433c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwY2hpY2tlbiUyMG1lYXQlMjBmcmVzaHxlbnwxfHx8fDE3NzU3MjQ4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Fresh Chicken Meat",
      category: "products"
    },
    {
      url: "https://images.unsplash.com/photo-1569466593977-94ee7ed02ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwZmVlZCUyMGdyYWlucyUyMHBvdWx0cnl8ZW58MXx8fHwxNzc1NzI0ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Poultry Feed",
      category: "products"
    },
    {
      url: "https://images.unsplash.com/photo-1609509535635-c1f5a530b05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3VsdHJ5JTIwZmFybSUyMHNoZWQlMjBiaXJkc3xlbnwxfHx8fDE3NzU3MjQ4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Farm Shed",
      category: "facilities"
    },
    {
      url: "https://images.unsplash.com/photo-1750184016795-85d307ea2bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VucyUyMHBlY2tpbmclMjBncmFzcyUyMG91dGRvb3J8ZW58MXx8fHwxNzc1NzI0ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Free-Range Foraging",
      category: "farm"
    },
    {
      url: "https://images.unsplash.com/photo-1679602616929-477bf914842f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGVnZ3MlMjBjYXJ0b24lMjBmcmVzaHxlbnwxfHx8fDE3NzU3MjQ4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "White Eggs Carton",
      category: "products"
    },
    {
      url: "https://images.unsplash.com/photo-1682399109294-cc5670465fcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpJTIwY2hpY2tlbiUyMG5hdGl2ZSUyMGluZGlhbnxlbnwxfHx8fDE3NzU3MjQ4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Gramapriya Bird",
      category: "breeds"
    }
  ]
};

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredImages = selectedCategory === "all" 
    ? galleryImages.all 
    : galleryImages.all.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Farm Gallery
            </h1>
            <p className="text-lg md:text-xl text-green-50 max-w-3xl mx-auto">
              A visual journey through our farm - our breeds, facilities, products, and daily life at FreshNest Poultry
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 bg-gray-100 p-1">
              <TabsTrigger value="all" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                All Photos
              </TabsTrigger>
              <TabsTrigger value="breeds" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                Hen Breeds
              </TabsTrigger>
              <TabsTrigger value="farm" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                Farm Life
              </TabsTrigger>
              <TabsTrigger value="products" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                Products
              </TabsTrigger>
              <TabsTrigger value="facilities" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                Facilities
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-green-700">{filteredImages.length}</span> photo(s)
            </p>
          </div>

          <Masonry columnsCount={3} gutter="16px" className="masonry-grid">
            {filteredImages.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-auto hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                    <p className="text-sm text-green-200 capitalize">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit Our Farm in Guntur
          </h2>
          <p className="text-lg text-green-50 mb-8">
            See our operations firsthand. Schedule a farm visit and meet our birds in person!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919876543210">
              <button className="px-8 py-3 bg-white text-green-700 rounded-md font-semibold hover:bg-green-50 transition-colors">
                Call to Schedule Visit
              </button>
            </a>
            <a 
              href={`https://wa.me/+919876543210?text=${encodeURIComponent("I'd like to schedule a farm visit.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-3 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-green-700 transition-colors">
                WhatsApp Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
