import { MapPin, Music, Users, Car } from "lucide-react";
import multiLevelClubImg from "@/assets/multi-level-club.jpg";
import karaokeBarImg from "@/assets/karaoke-bar.jpg";
import upscaleLoungeImg from "@/assets/upscale-lounge.jpg";

const Nightlife = () => {
  const yborCity = [
    {
      name: "Showbar",
      type: "Club",
      description: "High-energy club with live performances and dancing",
      features: ["Live Shows", "Dancing", "18+", "High Energy"],
      image: multiLevelClubImg
    },
    {
      name: "Tangra",
      type: "Nightclub", 
      description: "Trendy nightclub with DJ sets and modern vibes",
      features: ["DJ Sets", "Modern Atmosphere", "18+", "Trendy"],
      image: multiLevelClubImg
    },
    {
      name: "Club Prana",
      type: "Multi-Level Club",
      description: "Multi-level club with different music styles",
      features: ["Multiple Floors", "Varied Music", "18+", "Large Venue"],
      image: multiLevelClubImg
    }
  ];

  const soho = [
    {
      name: "HPC",
      type: "Bar/Club",
      description: "Popular spot with great music and social atmosphere",
      features: ["Social Scene", "Great Music", "Popular", "Energetic"],
      image: multiLevelClubImg
    },
    {
      name: "Pete's Place Karaoke Bar",
      type: "Karaoke Bar",
      description: "Local favorite karaoke spot full of friendly faces",
      features: ["Karaoke", "Local Crowd", "Friendly", "Sing-Along Fun"],
      image: karaokeBarImg
    }
  ];

  const downtownTampa = [
    {
      name: "Ivy Rose",
      type: "Lounge",
      description: "Upscale lounge with sophisticated atmosphere",
      features: ["Upscale", "Sophisticated", "Cocktails", "Elegant"],
      image: upscaleLoungeImg
    },
    {
      name: "Litt Club",
      type: "Club",
      description: "High-energy club with top DJs and dancing",
      features: ["Top DJs", "Dancing", "High Energy", "Popular"],
      image: multiLevelClubImg
    },
    {
      name: "Eden",
      type: "Nightclub",
      description: "Trendy nightspot with modern design and great vibes",
      features: ["Modern Design", "Great Vibes", "Trendy", "Stylish"],
      image: multiLevelClubImg
    }
  ];

  const VenueCard = ({ venue }: { venue: any }) => (
    <div className="card-hover group">
      <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
        <img 
          src={venue.image} 
          alt={venue.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mb-2">
        <span className="inline-block bg-ocean text-white text-xs px-2 py-1 rounded-full">
          {venue.type}
        </span>
      </div>
      <h3 className="text-xl font-heading font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
        {venue.name}
      </h3>
      <p className="text-muted-foreground mb-4">
        {venue.description}
      </p>
      <div className="flex flex-wrap gap-1">
        {venue.features.map((feature: string, index: number) => (
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
            Nightlife & Entertainment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience Tampa's vibrant 18+ nightlife scene. From high-energy clubs to intimate karaoke bars, discover where the night comes alive.
          </p>
        </div>

        {/* Ybor City */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <MapPin className="w-6 h-6 text-ocean mr-3" />
            <h2 className="text-3xl font-heading font-bold text-ocean">Ybor City</h2>
            <span className="ml-4 text-sm text-muted-foreground bg-shell px-3 py-1 rounded-full">Historic Nightlife District</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yborCity.map((venue, index) => (
              <VenueCard key={index} venue={venue} />
            ))}
          </div>
        </section>

        {/* SoHo */}
        <section className="mb-20 bg-sand rounded-2xl p-8">
          <div className="flex items-center mb-8">
            <MapPin className="w-6 h-6 text-ocean mr-3" />
            <h2 className="text-3xl font-heading font-bold text-ocean">SoHo</h2>
            <span className="ml-4 text-sm text-muted-foreground bg-white px-3 py-1 rounded-full">Social Hub</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {soho.map((venue, index) => (
              <VenueCard key={index} venue={venue} />
            ))}
          </div>
        </section>

        {/* Downtown Tampa */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <MapPin className="w-6 h-6 text-ocean mr-3" />
            <h2 className="text-3xl font-heading font-bold text-ocean">Downtown Tampa</h2>
            <span className="ml-4 text-sm text-muted-foreground bg-shell px-3 py-1 rounded-full">Urban Scene</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downtownTampa.map((venue, index) => (
              <VenueCard key={index} venue={venue} />
            ))}
          </div>
        </section>

        {/* Night Out Tips */}
        <section className="bg-gradient-ocean text-white rounded-2xl p-8">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Night Out Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-3">18+ Venues</h3>
              <p className="text-white/90">All listed venues welcome 18+ guests. Always bring valid ID and check specific event requirements.</p>
            </div>
            <div className="text-center">
              <Music className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-3">Best Nights</h3>
              <p className="text-white/90">Thursday-Saturday are peak nights. Check social media for special events and themed nights.</p>
            </div>
            <div className="text-center">
              <Car className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-heading font-semibold mb-3">Getting Around</h3>
              <p className="text-white/90">Use rideshare apps, designated drivers, or public transit. Many venues are walkable in each district.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Nightlife;