import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/CategoryCard";
import LocationCard from "@/components/ui/LocationCard";
import StatsCard from "@/components/ui/StatsCard";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 animate-slide-up">
              Fun and The City
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Your guide to Tampa Bay's best 18+ spots, activities, and experiences. No fake ID required – just pure fun and adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button asChild variant="ocean" size="lg" className="hover-lift">
                <Link to="/explore">
                  Start Exploring
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-lift">
                <Link to="/about">My Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-sand">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCard number="4" label="Cities Covered" description="Tampa Bay Area" />
            <StatsCard number="50+" label="Restaurants" description="Dining Spots" />
            <StatsCard number="15+" label="Beaches" description="Coastal Fun" />
            <StatsCard number="18+" label="Age Friendly" description="No Limits" />
          </div>
        </div>
      </section>

      {/* Explore Tampa Bay */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 gradient-text">
              Explore Tampa Bay
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the unique personality of each city in Tampa Bay
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <LocationCard
              name="Tampa"
              description="The heart of the bay with vibrant dining and nightlife"
            />
            <LocationCard
              name="St. Petersburg"
              description="Artsy downtown with waterfront dining and culture"
            />
            <LocationCard
              name="Clearwater"
              description="Beautiful beaches and laid-back coastal vibes"
            />
            <LocationCard
              name="Dunedin"
              description="Charming small town with unique dining experiences"
            />
          </div>
        </div>
      </section>

      {/* What You'll Find */}
      <section className="py-20 bg-shell">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 gradient-text">
              What You'll Find
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for the perfect Tampa Bay adventure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard
              title="Restaurants"
              description="From upscale dining to casual hangouts, discover the best eats across Tampa Bay"
              href="/restaurants"
            />
            <CategoryCard
              title="Beaches"
              description="Sun, sand, and endless activities at the most beautiful beaches in Florida"
              href="/beaches"
            />
            <CategoryCard
              title="Nightlife"
              description="18+ clubs, karaoke bars, and late-night spots for unforgettable nights out"
              href="/nightlife"
            />
            <CategoryCard
              title="Activities"
              description="Adventure sports, arcades, mini golf, and unique experiences for every mood"
              href="/activities"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Explore Tampa Bay?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the community of young adults discovering the best 18+ experiences in Tampa Bay
          </p>
          <Button asChild variant="teal" size="lg" className="hover-lift">
            <Link to="/explore">
              Start Your Adventure
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;