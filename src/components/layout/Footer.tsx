import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-ocean to-teal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-heading font-bold mb-4">Fun and The City</h3>
            <p className="text-white/80 text-sm max-w-md">
              Discovering Tampa Bay's best 18+ experiences, one adventure at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/restaurants" className="text-white/80 hover:text-white transition-colors">Restaurants</Link></li>
              <li><Link to="/beaches" className="text-white/80 hover:text-white transition-colors">Beaches</Link></li>
              <li><Link to="/nightlife" className="text-white/80 hover:text-white transition-colors">Nightlife</Link></li>
              <li><Link to="/activities" className="text-white/80 hover:text-white transition-colors">Activities</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">My Story</Link></li>
              <li><Link to="/explore" className="text-white/80 hover:text-white transition-colors">Explore</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80 text-sm flex items-center justify-center">
            © 2024 Fun and The City • Made with <Heart className="w-4 h-4 mx-1 text-teal" /> in Tampa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;