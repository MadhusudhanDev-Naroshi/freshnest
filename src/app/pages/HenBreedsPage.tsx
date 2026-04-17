import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { MessageCircle, Award, TrendingUp, Heart, Egg } from "lucide-react";

const allBreeds = [
  {
    id: 1,
    name: "Aseel",
    category: "meat",
    nativeBreed: true,
    purpose: "Meat / Fighting",
    image: "https://images.unsplash.com/photo-1753894935027-6242e91327ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm91ZCUyMHJvb3N0ZXIlMjByZWQlMjBjaGlja2VufGVufDF8fHx8MTc3NTcyNDgxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    eggProduction: "40-50 eggs/year",
    meatQuality: "Excellent - Firm, flavorful meat",
    weight: "3-4 kg (Male), 2-3 kg (Female)",
    climate: "Excellent heat tolerance, perfect for AP",
    features: [
      "Ancient Indian breed known for strength",
      "Superior meat quality with unique taste",
      "Disease resistant and hardy",
      "Suitable for traditional farming",
      "Good mothering instincts"
    ],
    price: "₹800-1,500 per bird",
    chickPrice: "₹80-120 per day-old chick"
  },
  {
    id: 2,
    name: "Kadaknath",
    category: "dual",
    nativeBreed: true,
    purpose: "Dual Purpose (Meat & Eggs)",
    image: "https://images.unsplash.com/photo-1650354812839-22e450b51806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGthZGFrbmF0aCUyMGNoaWNrZW58ZW58MXx8fHwxNzc1NzI0ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    eggProduction: "80-100 eggs/year",
    meatQuality: "Premium - Black meat with medicinal value",
    weight: "1.5-2 kg (Male), 1-1.2 kg (Female)",
    climate: "Very adaptable to hot climate",
    features: [
      "Black meat rich in protein and low in fat",
      "High demand and premium market price",
      "Traditional medicinal properties",
      "GI tag protected breed",
      "Excellent disease resistance"
    ],
    price: "₹1,200-2,000 per bird",
    chickPrice: "₹100-150 per day-old chick"
  },
  {
    id: 3,
    name: "Vanaraja",
    category: "dual",
    nativeBreed: false,
    purpose: "Dual Purpose",
    image: "https://images.unsplash.com/photo-1762154422395-b317404e9a08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93biUyMGNoaWNrZW4lMjBoZW4lMjBydXJhbHxlbnwxfHx8fDE3NzU3MjQ4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    eggProduction: "140-160 eggs/year",
    meatQuality: "Good - Tender and tasty",
    weight: "2.5-3 kg in 6 months",
    climate: "Developed for Indian backyard conditions",
    features: [
      "ICAR developed improved breed",
      "Suitable for free-range farming",
      "Good for small-scale commercial farming",
      "Low maintenance and hardy",
      "Brown egg layer"
    ],
    price: "₹400-700 per bird",
    chickPrice: "₹35-50 per day-old chick"
  },
  {
    id: 4,
    name: "Giriraja",
    category: "dual",
    nativeBreed: false,
    purpose: "Dual Purpose",
    image: "https://images.unsplash.com/photo-1545251765-6aad90d25972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGNoaWNrZW4lMjByb29zdGVyfGVufDF8fHx8MTc3NTcyNDgwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    eggProduction: "180-200 eggs/year",
    meatQuality: "Very Good - Desi chicken taste",
    weight: "2-2.5 kg in 6 months",
    climate: "Well-suited for tropical climate",
    features: [
      "Developed in Karnataka, popular in South India",
      "High egg production for backyard breed",
      "Low feed consumption",
      "Attractive colored plumage",
      "Good foraging ability"
    ],
    price: "₹450-750 per bird",
    chickPrice: "₹40-55 per day-old chick"
  },
  {
    id: 5,
    name: "Gramapriya",
    category: "dual",
    nativeBreed: false,
    purpose: "Dual Purpose",
    image: "https://images.unsplash.com/photo-1682399109294-cc5670465fcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpJTIwY2hpY2tlbiUyMG5hdGl2ZSUyMGluZGlhbnxlbnwxfHx8fDE3NzU3MjQ4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    eggProduction: "200-225 eggs/year",
    meatQuality: "Good - Country chicken flavor",
    weight: "1.8-2.2 kg in 6 months",
    climate: "Excellent for rural Indian conditions",
    features: [
      "ICAR developed for village farming",
      "Best for backyard poultry in AP",
      "Dual purpose - eggs and meat",
      "Hardy with good survivability",
      "Multi-colored eggs (brown to light)"
    ],
    price: "₹500-800 per bird",
    chickPrice: "₹45-60 per day-old chick"
  },
  {
    id: 6,
    name: "White Leghorn",
    category: "egg",
    nativeBreed: false,
    purpose: "Egg Production",
    image: "https://images.unsplash.com/photo-1764858362750-a8a5966574f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGxlZ2hvcm4lMjBoZW4lMjBsYXlpbmclMjBlZ2dzfGVufDF8fHx8MTc3NTcyNDgwMXww&ixlib=rb-4.1.0&q=80&w=1080",
    eggProduction: "280-320 white eggs/year",
    meatQuality: "Fair - Not primarily for meat",
    weight: "2-2.5 kg (Male), 1.5-2 kg (Female)",
    climate: "Needs good management in hot climate",
    features: [
      "World's most popular layer breed",
      "Large white eggs with excellent shell quality",
      "Early maturity (18-20 weeks)",
      "Efficient feed conversion",
      "Commercial layer farming favorite"
    ],
    price: "₹350-600 per bird",
    chickPrice: "₹30-45 per day-old chick"
  },
  {
    id: 7,
    name: "BV-300 Layer",
    category: "egg",
    nativeBreed: false,
    purpose: "Egg Production",
    image: "https://images.unsplash.com/photo-1750184016795-85d307ea2bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VucyUyMHBlY2tpbmclMjBncmFzcyUyMG91dGRvb3J8ZW58MXx8fHwxNzc1NzI0ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    eggProduction: "290-310 brown eggs/year",
    meatQuality: "Fair",
    weight: "2-2.3 kg (Male), 1.6-1.9 kg (Female)",
    climate: "Hardy, heat tolerant",
    features: [
      "Popular brown egg layer in India",
      "Good persistency in egg production",
      "Better adaptability than Leghorn",
      "Suitable for cage and floor systems",
      "Lower feed consumption"
    ],
    price: "₹380-650 per bird",
    chickPrice: "₹35-48 per day-old chick"
  },
  {
    id: 8,
    name: "Broiler (Ross 308)",
    category: "meat",
    nativeBreed: false,
    purpose: "Meat Production",
    image: "https://images.unsplash.com/photo-1630090374791-c9eb7bab3935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9pbGVyJTIwY2hpY2tlbiUyMG1lYXQlMjBmYXJtaW5nfGVufDF8fHx8MTc3NTcyNDgwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    eggProduction: "N/A - Meat bird",
    meatQuality: "Excellent - Tender, high breast yield",
    weight: "2-2.5 kg in 38-42 days",
    climate: "Requires controlled environment",
    features: [
      "Fast growth and high feed efficiency",
      "Uniform flock with consistent weight",
      "High breast meat percentage",
      "Most economical for meat production",
      "Short rearing period (6 weeks)"
    ],
    price: "₹150-250 per kg (live weight)",
    chickPrice: "₹25-35 per day-old chick"
  },
  {
    id: 9,
    name: "Ghagus",
    category: "meat",
    nativeBreed: true,
    purpose: "Meat / Traditional",
    image: "https://images.unsplash.com/photo-1774432128053-bb478f5afa06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29zdGVyJTIwc3VucmlzZSUyMGZhcm0lMjBtb3JuaW5nfGVufDF8fHx8MTc3NTcyNDgwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    eggProduction: "50-70 eggs/year",
    meatQuality: "Excellent - Traditional taste",
    weight: "2.5-3.5 kg (Male), 1.5-2.5 kg (Female)",
    climate: "Very good heat tolerance",
    features: [
      "Indigenous to Andhra Pradesh",
      "Hardy and disease resistant",
      "Low input backyard farming",
      "Good meat flavor valued locally",
      "Cultural and traditional significance"
    ],
    price: "₹600-1,000 per bird",
    chickPrice: "₹60-90 per day-old chick"
  },
  {
    id: 10,
    name: "Danki",
    category: "dual",
    nativeBreed: true,
    purpose: "Dual Purpose / Traditional",
    image: "https://images.unsplash.com/photo-1617077890517-42c3adf64770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZW4lMjB3aXRoJTIwY2hpY2tzJTIwbW90aGVyfGVufDF8fHx8MTc3NTcyNDgwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    eggProduction: "60-80 eggs/year",
    meatQuality: "Good",
    weight: "2-3 kg (Male), 1.5-2 kg (Female)",
    climate: "Adapted to AP climate",
    features: [
      "Native breed from Andhra region",
      "Good for scavenging systems",
      "Resistant to common diseases",
      "Low cost of rearing",
      "Suitable for organic farming"
    ],
    price: "₹500-900 per bird",
    chickPrice: "₹50-75 per day-old chick"
  }
];

export function HenBreedsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const whatsappNumber = "+919876543210";

  const filteredBreeds =
    selectedCategory === "all"
      ? allBreeds
      : allBreeds.filter((breed) => breed.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Hen Breeds Catalog
          </h1>
          <p className="text-lg text-green-50 max-w-3xl mx-auto">
            Premium native and commercial chicken breeds perfectly suited for Indian climate.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 gap-2 bg-gray-100 p-1">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="egg">
                <Egg className="w-4 h-4 mr-2" />
                Egg
              </TabsTrigger>
              <TabsTrigger value="meat">
                <Award className="w-4 h-4 mr-2" />
                Meat
              </TabsTrigger>
              <TabsTrigger value="dual">
                <TrendingUp className="w-4 h-4 mr-2" />
                Dual
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Cards Section (UPDATED) */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-6 flex justify-between">
            <p>
              Showing{" "}
              <span className="font-bold text-green-700">
                {filteredBreeds.length}
              </span>{" "}
              breeds
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Heart className="w-4 h-4 text-green-600" />
              Native Available
            </div>
          </div>

          {/* ✅ NEW PREMIUM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredBreeds.map((breed) => (
              <Card
                key={breed.id}
                className="group overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={breed.image}
                    alt={breed.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {breed.nativeBreed && (
                      <Badge className="bg-orange-500 text-white">
                        Native
                      </Badge>
                    )}
                    <Badge className="bg-green-600 text-white">
                      {breed.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-5">
                  <h3 className="text-xl font-bold">{breed.name}</h3>
                  <p className="text-sm text-green-700 mb-3">
                    {breed.purpose}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                    <div className="bg-gray-50 p-2 rounded-lg">
                      <p className="text-xs text-gray-500">Eggs</p>
                      <p className="font-semibold">
                        {breed.eggProduction}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-lg">
                      <p className="text-xs text-gray-500">Weight</p>
                      <p className="font-semibold">{breed.weight}</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-lg">
                      <p className="text-xs text-gray-500">Meat</p>
                      <p className="font-semibold">
                        {breed.meatQuality}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-lg">
                      <p className="text-xs text-gray-500">Climate</p>
                      <p className="font-semibold">{breed.climate}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    {breed.features.slice(0, 2).map((f, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="flex justify-between mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Bird</p>
                      <p className="font-bold text-green-700">
                        {breed.price}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Chick</p>
                      <p className="font-bold text-green-700">
                        {breed.chickPrice}
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hi! I'm interested in ${breed.name} breed.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Enquire Now
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Help Choosing Breed?
        </h2>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-green-700"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Get Advice
          </Button>
        </a>
      </section>
    </div>
  );
}


// import { useState } from "react";
// import { Card, CardContent } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
// import { MessageCircle, Heart, Egg, Award, TrendingUp } from "lucide-react";

// const allBreeds = [
//   {
//     id: 1,
//     name: "Aseel",
//     category: "meat",
//     nativeBreed: true,
//     purpose: "Meat / Fighting",
//     image: "https://images.unsplash.com/photo-1753894935027-6242e91327ac",
//     eggProduction: "40-50 eggs/year",
//     weight: "3-4 kg",
//     features: ["Strong breed", "Tasty meat", "Disease resistant"],
//     price: "₹800-1500",
//     chickPrice: "₹80-120"
//   },
//   {
//     id: 2,
//     name: "Kadaknath",
//     category: "dual",
//     nativeBreed: true,
//     purpose: "Dual Purpose",
//     image: "https://images.unsplash.com/photo-1650354812839-22e450b51806",
//     eggProduction: "80-100 eggs/year",
//     weight: "1.5-2 kg",
//     features: ["Black meat", "High demand", "Medicinal value"],
//     price: "₹1200-2000",
//     chickPrice: "₹100-150"
//   },
//   {
//     id: 3,
//     name: "Vanaraja",
//     category: "dual",
//     nativeBreed: false,
//     purpose: "Dual Purpose",
//     image: "https://images.unsplash.com/photo-1762154422395-b317404e9a08",
//     eggProduction: "140-160 eggs/year",
//     weight: "2.5-3 kg",
//     features: ["Low maintenance", "Free range", "Hardy"],
//     price: "₹400-700",
//     chickPrice: "₹35-50"
//   },
//   {
//     id: 4,
//     name: "White Leghorn",
//     category: "egg",
//     nativeBreed: false,
//     purpose: "Egg Production",
//     image: "https://images.unsplash.com/photo-1764858362750-a8a5966574f6",
//     eggProduction: "280-320 eggs/year",
//     weight: "2 kg",
//     features: ["High eggs", "Commercial use", "Efficient"],
//     price: "₹350-600",
//     chickPrice: "₹30-45"
//   }
// ];

// export function HenBreedsPage() {
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const whatsappNumber = "919876543210";

//   const filteredBreeds =
//     selectedCategory === "all"
//       ? allBreeds
//       : allBreeds.filter((b) => b.category === selectedCategory);

//   return (
//     <div className="min-h-screen bg-gray-50">

//       {/* Hero */}
//       <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16 text-center">
//         <h1 className="text-4xl font-bold mb-3">Hen Breeds Catalog</h1>
//         <p className="text-green-100 max-w-xl mx-auto">
//           Explore the best poultry breeds for your farm. Choose based on eggs, meat, or dual purpose.
//         </p>
//       </section>

//       {/* Tabs */}
//       <div className="sticky top-0 bg-white z-40 border-b">
//         <div className="max-w-6xl mx-auto p-4">
//           <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
//             <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
//               <TabsTrigger value="all">All</TabsTrigger>
//               <TabsTrigger value="egg"><Egg className="w-4 h-4 mr-1"/>Egg</TabsTrigger>
//               <TabsTrigger value="meat"><Award className="w-4 h-4 mr-1"/>Meat</TabsTrigger>
//               <TabsTrigger value="dual"><TrendingUp className="w-4 h-4 mr-1"/>Dual</TabsTrigger>
//             </TabsList>
//           </Tabs>
//         </div>
//       </div>

//       {/* Grid */}
//       <div className="max-w-6xl mx-auto px-4 py-10">

//         {/* Top Info */}
//         <div className="flex justify-between items-center mb-6">
//           <p>
//             Showing <span className="font-bold text-green-600">{filteredBreeds.length}</span> breeds
//           </p>
//           <div className="flex items-center gap-1 text-gray-500 text-sm">
//             <Heart className="w-4 h-4 text-green-600"/> Native Available
//           </div>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
//           {filteredBreeds.map((breed) => (
//             <Card key={breed.id} className="group rounded-2xl overflow-hidden hover:shadow-xl transition">

//               {/* Image */}
//               <div className="relative h-52 overflow-hidden">
//                 <img src={breed.image} className="w-full h-full object-cover group-hover:scale-110 transition" />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60" />

//                 <div className="absolute top-2 left-2 flex gap-2">
//                   {breed.nativeBreed && (
//                     <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
//                       Native
//                     </span>
//                   )}
//                   <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
//                     {breed.category}
//                   </span>
//                 </div>

//                 <div className="absolute bottom-2 left-3">
//                   <h3 className="text-white font-bold text-lg">{breed.name}</h3>
//                   <p className="text-green-200 text-xs">{breed.purpose}</p>
//                 </div>
//               </div>

//               {/* Content */}
//               <CardContent className="p-4">

//                 {/* Stats */}
//                 <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
//                   <div className="bg-gray-100 p-2 rounded">
//                     <p className="text-xs text-gray-500">Eggs</p>
//                     <p className="font-semibold">{breed.eggProduction}</p>
//                   </div>
//                   <div className="bg-gray-100 p-2 rounded">
//                     <p className="text-xs text-gray-500">Weight</p>
//                     <p className="font-semibold">{breed.weight}</p>
//                   </div>
//                 </div>

//                 {/* Features */}
//                 <ul className="text-sm text-gray-600 mb-3 space-y-1">
//                   {breed.features.map((f, i) => (
//                     <li key={i}>✔ {f}</li>
//                   ))}
//                 </ul>

//                 {/* Price */}
//                 <div className="flex justify-between text-sm border-t pt-2 mb-3">
//                   <div>
//                     <p className="text-gray-500 text-xs">Bird</p>
//                     <p className="text-green-700 font-bold">{breed.price}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-500 text-xs">Chick</p>
//                     <p className="text-green-700 font-bold">{breed.chickPrice}</p>
//                   </div>
//                 </div>

//                 {/* Button */}
//                 <a
//                   href={`https://wa.me/${whatsappNumber}?text=Hi, I want ${breed.name}`}
//                   target="_blank"
//                 >
//                   <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
//                     <MessageCircle className="w-4 h-4 mr-2"/> Enquire
//                   </Button>
//                 </a>

//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="bg-green-600 text-white text-center py-12">
//         <h2 className="text-2xl font-bold mb-2">Need Help Choosing?</h2>
//         <p className="text-green-100 mb-4">Talk to our poultry experts</p>
//         <a href={`https://wa.me/${whatsappNumber}`}>
//           <Button variant="outline" className="text-green-700 bg-white">
//             Contact Now
//           </Button>
//         </a>
//       </div>
//     </div>
//   );
// }