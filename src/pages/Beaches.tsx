import { MapPin, Sun, Camera, Clock } from "lucide-react";
import beachBarImg from "@/assets/beach-bar.jpg";
import beachVolleyballImg from "@/assets/beach-volleyball.jpg";
import clearwaterBeachImg from "@/assets/clearwater-beach.jpg";
import fortDeSotoImg from "@/assets/fort-de-soto.jpg";

const Beaches = () => {
  const beaches = [
    {
      name: "Coconut Charlie's",
      type: "Party Beach",
      location: "Clearwater",
      description: "Beach bar with music, volleyball, and mocktails",
      features: ["Volleyball", "Live Music", "Mocktails", "Beach Games"],
      image: beachBarImg
    },
    {
      name: "Caddy's on the Beach",
      type: "Sunset Spot",
      location: "Treasure Island",
      description: "Food, music, and sunsets on the sand",
      features: ["Live Music", "Sunset Views", "Beach Dining", "Dancing"],
      image: beachBarImg
    },
    {
      name: "Pass-a-Grille Beach",
      type: "Laid-back",
      location: "St. Pete Beach",
      description: "Laid-back beach with shops and cafés",
      features: ["Shopping", "Cafés", "Walking", "Relaxing"],
      image: clearwaterBeachImg
    },
    {
      name: "Fort De Soto",
      type: "Adventure",
      location: "St. Petersburg",
      description: "Multiple beaches, bike trails, dog beach, and history",
      features: ["Biking", "Dog Beach", "History", "Multiple Beaches"],
      image: fortDeSotoImg
    },
    {
      name: "Indian Rocks Beach",
      type: "Peaceful",
      location: "Indian Rocks",
      description: "Quiet, wide beach for games and relaxing",
      features: ["Beach Games", "Swimming", "Sunbathing", "Walking"],
      image: clearwaterBeachImg
    },
    {
      name: "Apollo Beach",
      type: "Nature",
      location: "Apollo Beach",
      description: "Peaceful with fishing and wildlife viewing",
      features: ["Fishing", "Wildlife Watching", "Photography", "Nature"],
      image: clearwaterBeachImg
    },
    {
      name: "Davis Islands Beach",
      type: "Local Favorite",
      location: "Tampa",
      description: "Skyline views and a local, chill scene",
      features: ["City Views", "Local Hangout", "Swimming", "Picnics"],
      image: clearwaterBeachImg
    },
    {
      name: "Treasure Island",
      type: "Active",
      location: "Treasure Island",
      description: "Volleyball courts, water sports, and beach bars",
      features: ["Volleyball", "Water Sports", "Beach Bars", "Rentals"],
      image: beachVolleyballImg
    },
    {
      name: "Honeymoon Island",
      type: "Natural",
      location: "Dunedin",
      description: "Shelling, trails, and natural beauty",
      features: ["Shelling", "Nature Trails", "Wildlife", "Photography"],
      image: clearwaterBeachImg
    },
    {
      name: "St. Pete Beach",
      type: "Classic Beach",
      location: "St. Pete Beach",
      description: "Classic busy beach with parasailing and shops",
      features: ["Parasailing", "Shopping", "Water Sports", "Dining"],
      image: clearwaterBeachImg
    },
    {
      name: "White Sand Beach",
      type: "Group Fun",
      location: "Clearwater",
      description: "Soft sand, perfect for games and group outings",
      features: ["Beach Games", "Group Activities", "Swimming", "Sunbathing"],
      image: clearwaterBeachImg
    }
  ];

  const BeachCard = ({ beach }: { beach: any }) => (
    <div className="card-hover group">
      <div className="w-full h-56 rounded-lg mb-4 overflow-hidden">
        <img 
          src={beach.image} 
          alt={beach.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-block bg-ocean text-white text-xs px-2 py-1 rounded-full">
            {beach.type}
          </span>
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="w-3 h-3 mr-1" />
            {beach.location}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-heading font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
        {beach.name}
      </h3>
      <p className="text-muted-foreground mb-4">
        {beach.description}
      </p>
      <div className="flex flex-wrap gap-1">
        {beach.features.map((feature: string, index: number) => (
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
            Beaches & Coastal Fun
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From party beaches with live music to peaceful nature spots, discover Tampa Bay's most beautiful coastlines and the endless activities they offer.
          </p>
        </div>

        {/* Beaches Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beaches.map((beach, index) => (
              <BeachCard key={index} beach={beach} />
            ))}
          </div>
        </section>

        {/* Beach Day Tips */}
        <section className="bg-gradient-ocean text-white rounded-2xl p-8">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Beach Day Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-3">Best Times to Visit</h3>
              <p className="text-white/90">Early morning (7-10am) for peaceful vibes, late afternoon (4-7pm) for sunset views and social scenes.</p>
            </div>
            <div className="text-center">
              <Sun className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-3">What to Bring</h3>
              <p className="text-white/90">Sunscreen, water, snacks, beach games, portable speaker, and a cooler for the perfect beach day.</p>
            </div>
            <div className="text-center">
              <Camera className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-3">Photo Spots</h3>
              <p className="text-white/90">Sunset at Caddy's, skyline views from Davis Islands, and natural beauty at Honeymoon Island.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Beaches;