import { MapPin, Music, Users, Car } from "lucide-react";

const Nightlife = () => {
  const yborCity = [
    {
      name: "Showbar",
      type: "Club",
      description: "High-energy club with live performances and dancing",
      features: ["Live Shows", "Dancing", "18+", "High Energy"]
    },
    {
      name: "Tangra",
      type: "Nightclub",
      description: "Trendy nightclub with DJ sets and modern vibes",
      features: ["DJ Sets", "Modern Atmosphere", "18+", "Trendy"]
    },
    {
      name: "Club Prana",
      type: "Multi-Level Club",
      description: "Multi-level club with different music styles",
      features: ["Multiple Floors", "Varied Music", "18+", "Large Venue"]
    }
  ];

  const soho = [
    {
      name: "HPC",
      type: "Bar/Club",
      description: "Popular spot with great music and social atmosphere",
      features: ["Social Scene", "Great Music", "Popular", "Energetic"]
    },
    {
      name: "Pete's Place Karaoke Bar",
      type: "Karaoke Bar",
      description: "Local favorite karaoke spot full of friendly faces",
      features: ["Karaoke", "Local Crowd", "Friendly", "Sing-Along Fun"]
    }
  ];

  const downtownTampa = [
    {
      name: "Ivy Rose",
      type: "Lounge",
      description: "Upscale lounge with sophisticated atmosphere",
      features: ["Upscale", "Sophisticated", "Cocktails", "Elegant"]
    },
    {
      name: "Litt Club",
      type: "Club",
      description: "High-energy club with top DJs and dancing",
      features: ["Top DJs", "Dancing", "High Energy", "Popular"]
    },
    {
      name: "Eden",
      type: "Nightclub",
      description: "Trendy nightspot with modern design and great vibes",
      features: ["Modern Design", "Great Vibes", "Trendy", "Stylish"]
    }
  ];

  const VenueCard = ({ venue }: { venue: any }) => (
    <div className="card-hover">
      <div className="w-full h-48 bg-gradient-to-br from-deep-blue/20 to-ocean/20 rounded-lg mb-4 flex items-center justify-center">
        <span className="text-deep-blue/60 text-sm font-medium">{venue.name} Image</span>
      </div>
      <div className="mb-2">
        <span className="inline-block bg-deep-blue text-white text-xs px-2 py-1 rounded-full">
          {venue.type}
        </span>
      </div>
      <h3 className="font-heading font-semibold mb-2">{venue.name}</h3>
      <p className="text-sm text-muted-foreground mb-4">{venue.description}</p>
      <div className="grid grid-cols-2 gap-2">
        {venue.features.map((feature: string, index: number) => (
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
            Nightlife & Entertainment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience Tampa's vibrant 18+ nightlife scene. From high-energy clubs to intimate karaoke bars, discover where the night comes alive.
          </p>
        </div>

        {/* Ybor City */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-bold mb-2 gradient-text">Ybor City</h2>
            <p className="text-muted-foreground">Historic Nightlife District</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yborCity.map((venue, index) => (
              <VenueCard key={index} venue={venue} />
            ))}
          </div>
        </section>

        {/* SoHo */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-bold mb-2 gradient-text">SoHo</h2>
            <p className="text-muted-foreground">Social Hub</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {soho.map((venue, index) => (
              <VenueCard key={index} venue={venue} />
            ))}
          </div>
        </section>

        {/* Downtown Tampa */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-bold mb-2 gradient-text">Downtown Tampa</h2>
            <p className="text-muted-foreground">Urban Scene</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downtownTampa.map((venue, index) => (
              <VenueCard key={index} venue={venue} />
            ))}
          </div>
        </section>

        {/* Night Out Tips */}
        <section className="bg-shell rounded-2xl p-8">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center gradient-text">
            Night Out Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-ocean text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">18+ Venues</h3>
              <p className="text-sm text-muted-foreground">
                All listed venues welcome 18+ guests. Always bring valid ID and check specific event requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-coral text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Best Nights</h3>
              <p className="text-sm text-muted-foreground">
                Thursday-Saturday are peak nights. Check social media for special events and themed nights.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Getting Around</h3>
              <p className="text-sm text-muted-foreground">
                Use rideshare apps, designated drivers, or public transit. Many venues are walkable in each district.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Nightlife;