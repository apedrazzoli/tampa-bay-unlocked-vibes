import { MapPin, Sun, Camera, Clock } from "lucide-react";

const Beaches = () => {
  const beaches = [
    {
      name: "Coconut Charlie's",
      type: "Party Beach",
      location: "Clearwater",
      description: "Beach bar with music, volleyball, and mocktails",
      features: ["Volleyball", "Live Music", "Mocktails", "Beach Games"]
    },
    {
      name: "Caddy's on the Beach",
      type: "Sunset Spot",
      location: "Treasure Island",
      description: "Food, music, and sunsets on the sand",
      features: ["Live Music", "Sunset Views", "Beach Dining", "Dancing"]
    },
    {
      name: "Pass-a-Grille Beach",
      type: "Laid-back",
      location: "St. Pete Beach",
      description: "Laid-back beach with shops and cafés",
      features: ["Shopping", "Cafés", "Walking", "Relaxing"]
    },
    {
      name: "Fort De Soto",
      type: "Adventure",
      location: "St. Petersburg",
      description: "Multiple beaches, bike trails, dog beach, and history",
      features: ["Biking", "Dog Beach", "History", "Multiple Beaches"]
    },
    {
      name: "Indian Rocks Beach",
      type: "Peaceful",
      location: "Indian Rocks",
      description: "Quiet, wide beach for games and relaxing",
      features: ["Beach Games", "Swimming", "Sunbathing", "Walking"]
    },
    {
      name: "Apollo Beach",
      type: "Nature",
      location: "Apollo Beach",
      description: "Peaceful with fishing and wildlife viewing",
      features: ["Fishing", "Wildlife Watching", "Photography", "Nature"]
    },
    {
      name: "Davis Islands Beach",
      type: "Local Favorite",
      location: "Tampa",
      description: "Skyline views and a local, chill scene",
      features: ["City Views", "Local Hangout", "Swimming", "Picnics"]
    },
    {
      name: "Treasure Island",
      type: "Active",
      location: "Treasure Island",
      description: "Volleyball courts, water sports, and beach bars",
      features: ["Volleyball", "Water Sports", "Beach Bars", "Rentals"]
    },
    {
      name: "Honeymoon Island",
      type: "Natural",
      location: "Dunedin",
      description: "Shelling, trails, and natural beauty",
      features: ["Shelling", "Nature Trails", "Wildlife", "Photography"]
    },
    {
      name: "St. Pete Beach",
      type: "Classic Beach",
      location: "St. Pete Beach",
      description: "Classic busy beach with parasailing and shops",
      features: ["Parasailing", "Shopping", "Water Sports", "Dining"]
    },
    {
      name: "White Sand Beach",
      type: "Group Fun",
      location: "Clearwater",
      description: "Soft sand, perfect for games and group outings",
      features: ["Beach Games", "Group Activities", "Swimming", "Sunbathing"]
    }
  ];

  const BeachCard = ({ beach }: { beach: any }) => (
    <div className="card-hover">
      <div className="w-full h-48 bg-gradient-to-br from-ocean/20 to-teal/20 rounded-lg mb-4 flex items-center justify-center">
        <span className="text-ocean/60 text-sm font-medium">{beach.name} Image</span>
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="inline-block bg-ocean text-white text-xs px-2 py-1 rounded-full">
          {beach.type}
        </span>
        <div className="flex items-center text-xs text-muted-foreground">
          <MapPin className="w-3 h-3 mr-1" />
          {beach.location}
        </div>
      </div>
      <h3 className="font-heading font-semibold mb-2">{beach.name}</h3>
      <p className="text-sm text-muted-foreground mb-4">{beach.description}</p>
      <div className="grid grid-cols-2 gap-2">
        {beach.features.map((feature: string, index: number) => (
          <span key={index} className="text-xs bg-sand text-stone px-2 py-1 rounded text-center">
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
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beaches.map((beach, index) => (
              <BeachCard key={index} beach={beach} />
            ))}
          </div>
        </section>

        {/* Beach Day Tips */}
        <section className="bg-shell rounded-2xl p-8">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center gradient-text">
            Beach Day Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-ocean text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Best Times to Visit</h3>
              <p className="text-sm text-muted-foreground">
                Early morning (7-10am) for peaceful vibes, late afternoon (4-7pm) for sunset views and social scenes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">What to Bring</h3>
              <p className="text-sm text-muted-foreground">
                Sunscreen, water, snacks, beach games, portable speaker, and a cooler for the perfect beach day.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-ocean text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Photo Spots</h3>
              <p className="text-sm text-muted-foreground">
                Sunset at Caddy's, skyline views from Davis Islands, and natural beauty at Honeymoon Island.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Beaches;