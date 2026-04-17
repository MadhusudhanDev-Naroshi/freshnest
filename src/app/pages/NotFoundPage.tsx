import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-green-600 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for seems to have flown the coop! Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2">
              <Home className="w-5 h-5" />
              Back to Home
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => window.history.back()}
            className="gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <Link to="/breeds" className="text-green-600 hover:text-green-700 font-medium">
            Hen Breeds
          </Link>
          <Link to="/products" className="text-green-600 hover:text-green-700 font-medium">
            Products
          </Link>
          <Link to="/about" className="text-green-600 hover:text-green-700 font-medium">
            About Us
          </Link>
          <Link to="/contact" className="text-green-600 hover:text-green-700 font-medium">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
