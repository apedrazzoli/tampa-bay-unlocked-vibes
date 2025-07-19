import { MapPin, Star, Clock, Heart } from "lucide-react";
import coffeeShopImg from "@/assets/coffee-shop.jpg";
import healthyBrunchImg from "@/assets/healthy-brunch.jpg";
import rooftopDiningImg from "@/assets/rooftop-dining.jpg";
import seafoodRestaurantImg from "@/assets/seafood-restaurant.jpg";
import mexicanRestaurantImg from "@/assets/mexican-restaurant.jpg";
import restaurantDiningImg from "@/assets/restaurant-dining.jpg";

const Restaurants = () => {
  const tampaRestaurants = [
    {
      name: "Oxford Exchange",
      type: "Upscale Café",
      description: "Upscale café with artisanal coffee and gourmet breakfast",
      features: ["Artisanal Coffee", "Gourmet Breakfast", "Instagram-Worthy", "Study Spot"],
      image: coffeeShopImg
    },
    {
      name: "Buddy Brew Coffee",
      type: "Local Coffee",
      description: "Local coffee roaster with amazing breakfast sandwiches",
      features: ["Local Roaster", "Breakfast Sandwiches", "Multiple Locations", "Student Friendly"],
      image: coffeeShopImg
    },
    {
      name: "First Watch",
      type: "Fresh & Healthy",
      description: "Fresh breakfast and brunch with healthy options",
      features: ["Healthy Options", "Fresh Ingredients", "Brunch Menu", "Casual Dining"],
      image: healthyBrunchImg
    },
    {
      name: "Olivia",
      type: "Upscale Casual",
      description: "Modern Italian with an open kitchen",
      features: ["Open Kitchen", "Modern Italian", "Great Atmosphere"],
      image: restaurantDiningImg
    },
    {
      name: "Besos",
      type: "Upscale",
      description: "Upscale Mexican, tableside guac, cocktails",
      features: ["Tableside Guac", "Craft Cocktails", "Mexican Cuisine"],
      image: mexicanRestaurantImg
    },
    {
      name: "Timpano",
      type: "Lively",
      description: "Bold Italian-American with a lively scene",
      features: ["Italian-American", "Energetic Vibe", "Great for Groups"],
      image: restaurantDiningImg
    },
    {
      name: "Bartaco",
      type: "Casual",
      description: "Coastal vibes, handheld bites",
      features: ["Coastal Theme", "Tacos", "Relaxed Atmosphere"],
      image: mexicanRestaurantImg
    },
    {
      name: "Prime Water",
      type: "Upscale",
      description: "Seafood with great views",
      features: ["Waterfront Views", "Fresh Seafood", "Scenic Dining"],
      image: seafoodRestaurantImg
    },
    {
      name: "Salt Shack on the Bay",
      type: "Tropical",
      description: "Tropical seafood escape",
      features: ["Bay Views", "Tropical Vibes", "Seafood Specialties"],
      image: seafoodRestaurantImg
    },
    {
      name: "Jay Luigi",
      type: "Classy Casual",
      description: "Classy casual Italian and bar",
      features: ["Italian Cuisine", "Bar Scene", "Sophisticated"],
      image: restaurantDiningImg
    },
    {
      name: "Latin Grill",
      type: "Party",
      description: "Latin food + dance floor + LED vibes",
      features: ["Dance Floor", "LED Lighting", "Latin Music"],
      image: mexicanRestaurantImg
    },
    {
      name: "Bulla GastroBar",
      type: "Rooftop",
      description: "Rooftop lounge, Spanish tapas",
      features: ["Rooftop Views", "Spanish Tapas", "Lounge Atmosphere"],
      image: rooftopDiningImg
    },
    {
      name: "Green Lemon",
      type: "Fun & Casual",
      description: "SoHo's fun Mexican street food spot",
      features: ["Street Food", "SoHo Location", "Vibrant Atmosphere"],
      image: mexicanRestaurantImg
    }
  ];

  const stPetersburgRestaurants = [
    {
      name: "The Mill",
      type: "Trendy Breakfast",
      description: "Trendy breakfast spot with creative dishes and great coffee",
      features: ["Creative Dishes", "Great Coffee", "Instagram-Worthy", "Local Favorite"],
      image: coffeeShopImg
    },
    {
      name: "Ruby's Elixir",
      type: "Health Café",
      description: "Health-focused café with smoothie bowls and avocado toast",
      features: ["Smoothie Bowls", "Avocado Toast", "Health-Focused", "Fresh Ingredients"],
      image: healthyBrunchImg
    },
    {
      name: "Banyan Café",
      type: "Cozy Café",
      description: "Cozy breakfast spot with homemade pastries and specialty coffee",
      features: ["Homemade Pastries", "Specialty Coffee", "Cozy Atmosphere", "Local Gem"],
      image: coffeeShopImg
    },
    {
      name: "Cassis",
      type: "Party Brasserie",
      description: "Brasserie with American comfort food and a party vibe",
      features: ["Comfort Food", "Party Atmosphere", "American Cuisine"],
      image: restaurantDiningImg
    },
    {
      name: "Doc Ford Rum Bar & Grille",
      type: "Waterfront",
      description: "Caribbean-Latin waterfront with live music",
      features: ["Live Music", "Caribbean-Latin", "Waterfront Dining"],
      image: seafoodRestaurantImg
    },
    {
      name: "Ceviche",
      type: "Festive",
      description: "Flamenco, tapas, sangria, and festive energy",
      features: ["Flamenco Shows", "Spanish Tapas", "Festive Energy"],
      image: restaurantDiningImg
    },
    {
      name: "Bacchus",
      type: "European",
      description: "European flair, charcuterie, and live music",
      features: ["Charcuterie", "Live Music", "European Atmosphere"],
      image: restaurantDiningImg
    },
    {
      name: "Rain Fusion",
      type: "Neon Vibes",
      description: "Neon-lit Asian fusion with mocktails and music",
      features: ["Asian Fusion", "Mocktails", "Neon Lighting"],
      image: restaurantDiningImg
    },
    {
      name: "Birchwood",
      type: "Rooftop",
      description: "Rooftop lounge, sunset views, and small plates",
      features: ["Sunset Views", "Small Plates", "Rooftop Lounge"],
      image: rooftopDiningImg
    },
    {
      name: "Trys",
      type: "Modern",
      description: "Open kitchen, modern decor, and shareable dishes",
      features: ["Open Kitchen", "Shareable Dishes", "Modern Design"],
      image: restaurantDiningImg
    },
    {
      name: "Social Roost",
      type: "Social",
      description: "Global comfort food and colorful mocktails",
      features: ["Global Cuisine", "Colorful Mocktails", "Social Atmosphere"],
      image: restaurantDiningImg
    },
    {
      name: "Haiku",
      type: "Garden Style",
      description: "Sushi, ramen, garden-style decor, and a buzzing vibe",
      features: ["Sushi & Ramen", "Garden Decor", "Buzzing Atmosphere"],
      image: restaurantDiningImg
    }
  ];

  const clearwaterRestaurants = [
    {
      name: "Lenny's Restaurant",
      type: "Classic Diner",
      description: "Classic American breakfast diner with huge portions",
      features: ["Huge Portions", "Classic American", "Affordable", "Local Institution"],
      image: healthyBrunchImg
    },
    {
      name: "Another Broken Egg Café",
      type: "Upscale Brunch",
      description: "Upscale breakfast and brunch with creative twists",
      features: ["Creative Twists", "Upscale Brunch", "Specialty Coffee", "Weekend Favorite"],
      image: healthyBrunchImg
    },
    {
      name: "Island Way Grill",
      type: "Waterfront",
      description: "Seafood and sushi with waterfront views",
      features: ["Waterfront Views", "Sushi", "Fresh Seafood"],
      image: seafoodRestaurantImg
    },
    {
      name: "The Sandbar at Opal Sands",
      type: "Beach",
      description: "Beach eats with music and sunset views",
      features: ["Beach Location", "Live Music", "Sunset Views"],
      image: seafoodRestaurantImg
    },
    {
      name: "Marina Cantina",
      type: "Rooftop",
      description: "Rooftop Mexican fusion and fresh-caught seafood",
      features: ["Mexican Fusion", "Fresh Seafood", "Rooftop Dining"],
      image: rooftopDiningImg
    },
    {
      name: "Bavaro's",
      type: "Social",
      description: "Neapolitan pizza in a social, upbeat setting",
      features: ["Neapolitan Pizza", "Upbeat Atmosphere", "Social Setting"],
      image: restaurantDiningImg
    },
    {
      name: "Frenchy's Rockaway Grill",
      type: "Beach Casual",
      description: "Casual beach staple with seafood and music",
      features: ["Beach Staple", "Live Music", "Casual Dining"],
      image: seafoodRestaurantImg
    }
  ];

  const dunedinRestaurants = [
    {
      name: "Café Alfresco",
      type: "European Café",
      description: "European-style café with fresh pastries and strong coffee",
      features: ["Fresh Pastries", "Strong Coffee", "European Style", "Outdoor Seating"],
      image: coffeeShopImg
    },
    {
      name: "Casa Tina",
      type: "Festive",
      description: "Festive Mexican restaurant with a vibrant feel",
      features: ["Mexican Cuisine", "Vibrant Atmosphere", "Festive Decor"],
      image: mexicanRestaurantImg
    },
    {
      name: "The Living Room",
      type: "Cozy",
      description: "Cozy comfort food in a homey setting",
      features: ["Comfort Food", "Homey Setting", "Cozy Atmosphere"],
      image: restaurantDiningImg
    },
    {
      name: "Bon Appetit",
      type: "Rustic French",
      description: "Rustic French-inspired bistro on the water",
      features: ["French Cuisine", "Waterfront", "Rustic Charm"],
      image: seafoodRestaurantImg
    },
    {
      name: "The Honu",
      type: "Hawaiian",
      description: "Hawaiian-themed, family-friendly island vibes",
      features: ["Hawaiian Theme", "Island Vibes", "Family-Friendly"],
      image: restaurantDiningImg
    },
    {
      name: "Country Boy",
      type: "Comfort",
      description: "Hearty American-Greek comfort food",
      features: ["American-Greek", "Hearty Portions", "Comfort Food"],
      image: restaurantDiningImg
    }
  ];

  const RestaurantCard = ({ restaurant }: { restaurant: any }) => (
    <div className="card-hover group">
      <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mb-2">
        <span className="inline-block bg-ocean text-white text-xs px-2 py-1 rounded-full">
          {restaurant.type}
        </span>
      </div>
      <h3 className="text-xl font-heading font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
        {restaurant.name}
      </h3>
      <p className="text-muted-foreground mb-4">
        {restaurant.description}
      </p>
      <div className="flex flex-wrap gap-1">
        {restaurant.features.map((feature: string, index: number) => (
          <span key={index} className="text-xs bg-shell text-ocean px-2 py-1 rounded">
            {feature}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
            Restaurants & Dining
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From upscale dining to casual hangouts, discover the best eats across Tampa Bay. Every spot welcomes 18+ and offers unforgettable experiences.
          </p>
        </div>

        {/* Tampa */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <MapPin className="w-6 h-6 text-ocean mr-3" />
            <h2 className="text-3xl font-heading font-bold text-ocean">Tampa</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tampaRestaurants.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
          </div>
        </section>

        {/* St. Petersburg */}
        <section className="mb-20 bg-sand rounded-2xl p-8">
          <div className="flex items-center mb-8">
            <MapPin className="w-6 h-6 text-ocean mr-3" />
            <h2 className="text-3xl font-heading font-bold text-ocean">St. Petersburg</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stPetersburgRestaurants.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
          </div>
        </section>

        {/* Clearwater */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <MapPin className="w-6 h-6 text-ocean mr-3" />
            <h2 className="text-3xl font-heading font-bold text-ocean">Clearwater</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clearwaterRestaurants.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
          </div>
        </section>

        {/* Dunedin */}
        <section className="mb-20 bg-shell rounded-2xl p-8">
          <div className="flex items-center mb-8">
            <MapPin className="w-6 h-6 text-ocean mr-3" />
            <h2 className="text-3xl font-heading font-bold text-ocean">Dunedin</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dunedinRestaurants.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Restaurants;