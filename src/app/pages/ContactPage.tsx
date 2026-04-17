import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";

export function ContactPage() {
  const whatsappNumber = "+919876543210";

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-green-50 max-w-3xl mx-auto">
              We're here to help! Reach out for inquiries, orders, or farm visits
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <a href="tel:+919876543210" className="text-green-600 hover:text-green-700 font-medium">
                +91 98765 43210
              </a>
              <p className="text-sm text-gray-600 mt-2">Mon-Sat, 8 AM - 7 PM</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Chat with us
              </a>
              <p className="text-sm text-gray-600 mt-2">Instant response</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <a href="mailto:info@freshnestpoultry.com" className="text-green-600 hover:text-green-700 font-medium text-sm">
                info@freshnestpoultry.com
              </a>
              <p className="text-sm text-gray-600 mt-2">24-48 hour response</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
              <p className="text-gray-700 font-medium text-sm">Guntur, AP 522001</p>
              <p className="text-sm text-gray-600 mt-2">Schedule a farm visit</p>
            </Card>
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject...</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="breeds">Hen Breeds Information</option>
                    <option value="order">Place an Order</option>
                    <option value="bulk">Bulk Order Quote</option>
                    <option value="visit">Schedule Farm Visit</option>
                    <option value="consultation">Farming Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tell us about your requirements, questions, or feedback..."
                    required
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Need immediate assistance?</strong> Get instant response via WhatsApp
                </p>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "Hello! I have a question about FreshNest Poultry."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Info & Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Farm</h2>
              
              <Card className="mb-6">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-700">
                        FreshNest Poultry Farm<br />
                        Guntur, Andhra Pradesh 522001<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-700">
                        Monday - Saturday: 8:00 AM - 7:00 PM<br />
                        Sunday: 9:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Contact Numbers</h3>
                      <p className="text-gray-700">
                        Phone: <a href="tel:+919876543210" className="text-green-600 hover:underline">+91 98765 43210</a><br />
                        WhatsApp: <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">+91 98765 43210</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-700">
                        General: <a href="mailto:info@freshnestpoultry.com" className="text-green-600 hover:underline">info@freshnestpoultry.com</a><br />
                        Orders: <a href="mailto:orders@freshnestpoultry.com" className="text-green-600 hover:underline">orders@freshnestpoultry.com</a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122503.04239869582!2d80.36051959999999!3d16.3066525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a755cb1787785%3A0x9f21c28143496d89!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123"
                  className="w-full h-80 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FreshNest Poultry Farm Location"
                ></iframe>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-gray-900 mb-2">Farm Visit Guidelines</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Please call ahead to schedule your visit</li>
                  <li>• Biosecurity protocols must be followed</li>
                  <li>• Photography allowed with permission</li>
                  <li>• Free consultation for serious buyers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: "Do you deliver birds and products across Andhra Pradesh?",
                a: "Yes, we deliver across Guntur and nearby districts. For orders beyond our regular delivery area, please contact us for custom arrangements."
              },
              {
                q: "What is the minimum order quantity for day-old chicks?",
                a: "For commercial breeds (broilers/layers), minimum order is 25 chicks. For native breeds, you can order as few as 5 chicks. Bulk orders get special pricing."
              },
              {
                q: "Do you provide vaccination and health certificates?",
                a: "Yes, all our birds come with proper vaccination records and health certificates. We maintain complete documentation for biosecurity compliance."
              },
              {
                q: "Can I visit the farm before placing an order?",
                a: "Absolutely! We encourage farm visits. Please call or WhatsApp to schedule your visit. Our team will be happy to show you around and answer your questions."
              },
              {
                q: "Do you offer guidance for new poultry farmers?",
                a: "Yes, we provide free consultation on breed selection, farm setup, nutrition, and management. We believe in supporting our customers' success."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
