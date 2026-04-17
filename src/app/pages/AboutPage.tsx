import { Card, CardContent } from "../components/ui/card";
import { Users, Calendar, Award, Heart, Target, Eye, CheckCircle } from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About FreshNest Poultry Farm
            </h1>
            <p className="text-lg md:text-xl text-green-50 max-w-3xl mx-auto">
              Your trusted partner in quality poultry farming since 2014
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  FreshNest Poultry Farm began its journey in 2014 in the heart of Guntur, Andhra Pradesh, with a simple yet powerful vision: to provide the finest quality poultry products while preserving traditional farming values and embracing modern scientific practices.
                </p>
                <p>
                  What started as a small backyard operation with a handful of native Aseel birds has grown into a comprehensive poultry farm offering everything from premium native breeds like Kadaknath and Ghagus to high-performance commercial layers and broilers.
                </p>
                <p>
                  Over the years, we've built strong relationships with farmers, families, and commercial buyers across Andhra Pradesh. Our commitment to quality, transparency, and ethical farming has made us a trusted name in the region's poultry industry.
                </p>
                <p>
                  Today, FreshNest is proud to support both traditional backyard poultry enthusiasts and large-scale commercial operations with quality birds, expert guidance, and genuine care for our customers' success.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1759774289401-188547168d85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBob2xkaW5nJTIwY2hpY2tlbiUyMHJ1cmFsfGVufDF8fHx8MTc3NTcyNDgwNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Farm"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-sm font-semibold mb-1">Established</div>
                <div className="text-3xl font-bold">2014</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">10,000+</div>
              <div className="text-gray-600">Birds Raised Annually</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">12+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">5,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600">Breed Varieties</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-green-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To provide premium quality native and commercial poultry breeds to farmers and families across Andhra Pradesh, while maintaining the highest standards of bird welfare, biosecurity, and customer service. We strive to support sustainable farming practices and empower our customers with knowledge and quality products.
              </p>
            </Card>

            <Card className="p-8 border-2 border-yellow-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-yellow-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become the most trusted and respected poultry farm in Andhra Pradesh, known for excellence in breeding, ethical farming practices, and comprehensive customer support. We envision a future where every household and commercial farmer has access to healthy, productive, and climate-adapted poultry breeds.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description: "We never compromise on the health, genetics, and care of our birds. Every product meets stringent quality standards."
              },
              {
                title: "Ethical Farming",
                description: "Humane treatment, natural living conditions, and antibiotic-free practices are non-negotiable for us."
              },
              {
                title: "Customer Success",
                description: "Your success is our success. We provide ongoing support, guidance, and genuine care for your poultry journey."
              },
              {
                title: "Traditional Wisdom",
                description: "We honor indigenous breeds and time-tested farming practices while embracing modern scientific knowledge."
              },
              {
                title: "Transparency",
                description: "Complete honesty about our practices, pricing, and bird characteristics. No hidden surprises."
              },
              {
                title: "Sustainability",
                description: "Environmentally responsible farming that protects our land and resources for future generations."
              }
            ].map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FreshNest?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">✓ Climate-Adapted Breeds</h3>
              <p className="text-gray-600">
                All our breeds are selected and raised specifically for Andhra Pradesh's tropical climate, ensuring optimal health and productivity.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">✓ Expert Guidance</h3>
              <p className="text-gray-600">
                Free consultation on breed selection, farm setup, nutrition, and disease management. We're with you every step.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">✓ Quality Assurance</h3>
              <p className="text-gray-600">
                Regular health checks, proper vaccination, and biosecurity protocols ensure you receive only the healthiest birds.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">✓ Competitive Pricing</h3>
              <p className="text-gray-600">
                Fair, transparent pricing with special rates for bulk orders. No hidden costs or surprises.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">✓ Native Breed Specialists</h3>
              <p className="text-gray-600">
                Rare and premium indigenous breeds like Aseel, Kadaknath, and Ghagus with proper pedigree and documentation.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">✓ Local Delivery</h3>
              <p className="text-gray-600">
                Reliable delivery across Guntur and surrounding areas with proper packaging and transportation care.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1709546363436-fb43ac72c3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlJTIwcmFuZ2UlMjBjaGlja2VucyUyMGZhcm0lMjBpbmRpYSUyMHN1bm55fGVufDF8fHx8MTc3NTcyNDgwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Farm"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Our dedicated team of poultry experts, veterinarians, and farm workers ensures that every bird receives the best possible care. With decades of combined experience in traditional and modern poultry farming, we bring knowledge, passion, and commitment to every aspect of our operation.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From the hatchery to the delivery, from nutrition to health management, our team works tirelessly to maintain the highest standards of quality and service.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-900 font-semibold mb-2">"Our birds are not just livestock – they're our pride and responsibility. Every healthy chick, every fresh egg, and every satisfied customer motivates us to do better every day."</p>
                <p className="text-gray-600">— FreshNest Poultry Team, Guntur</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
