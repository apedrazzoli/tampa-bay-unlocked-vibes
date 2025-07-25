import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import waterSportsImg from "@/assets/water-sports.jpg";
import arcadeGamingImg from "@/assets/arcade-gaming.jpg";
import miniGolfImg from "@/assets/mini-golf.jpg";
import laserTagImg from "@/assets/laser-tag.jpg";
import tampaImg from "@/assets/tampa-cityscape.jpg";
import stPeteImg from "@/assets/st-pete-waterfront.jpg";
import clearwaterImg from "@/assets/clearwater-beach.jpg";
import funActivitiesImg from "@/assets/fun-activities.jpg";
import beachSceneImg from "@/assets/beach-scene.jpg";
import nightlifeSceneImg from "@/assets/nightlife-scene.jpg";
import restaurantDiningImg from "@/assets/restaurant-dining.jpg";

const Activities = () => {
  const outdoorActivities = [
    {
      name: "Elite Water Sports",
      type: "Water Sports",
      description: "Jet skiing, parasailing, and water adventures",
      features: ["Jet Skiing", "Parasailing", "Boat Rentals", "Gulf Access"],
      website: "#",
      image: waterSportsImg
    },
    {
      name: "Empower Adventures Tampa Bay",
      type: "Adventure Park",
      description: "Zip lining and outdoor adventure courses",
      features: ["Zip Lines", "Obstacle Courses", "Team Building", "Nature"],
      website: "#",
      image: waterSportsImg
    }
  ];

  const sportsActivities = [
    {
      name: "PopStroke Tampa",
      type: "Mini Golf",
      description: "Premium mini golf experience with food and drinks",
      features: ["Premium Course", "Food & Drinks", "Social Atmosphere", "Modern Design"],
      website: "#",
      image: miniGolfImg
    },
    {
      name: "TB Pickleball Oldsmar",
      type: "Pickleball",
      description: "Indoor pickleball courts and leagues",
      features: ["Indoor Courts", "Leagues", "Equipment Rental", "All Levels"],
      website: "#",
      image: miniGolfImg
    },
    {
      name: "Pickleheads at Rowlett Park",
      type: "Outdoor Pickleball",
      description: "Outdoor pickleball courts in Tampa",
      features: ["Outdoor Courts", "Free Play", "Community", "Tampa Location"],
      website: "#",
      image: miniGolfImg
    }
  ];

  const gamingActivities = [
    {
      name: "1UP Arcade Bar",
      type: "Arcade",
      description: "Classic arcade games and modern gaming",
      features: ["Classic Games", "Modern Gaming", "Social Atmosphere", "Tournaments"],
      website: "#",
      image: arcadeGamingImg
    },
    {
      name: "Reboot Amusements",
      type: "Retro Arcade",
      description: "Retro arcade with pinball and classic games",
      features: ["Pinball", "Retro Games", "Nostalgic Vibes", "All Ages"],
      website: "#",
      image: arcadeGamingImg
    },
    {
      name: "GameTime Players",
      type: "Gaming Lounge",
      description: "Gaming lounge with console and PC gaming",
      features: ["Console Gaming", "PC Gaming", "Tournaments", "Social Gaming"],
      website: "#",
      image: arcadeGamingImg
    },
    {
      name: "Elev8 Fun",
      type: "Entertainment Center",
      description: "Multi-level entertainment with arcade and activities",
      features: ["Multi-Level", "Arcade", "Activities", "Group Fun"],
      website: "#",
      image: arcadeGamingImg
    },
    {
      name: "Lowry Arcade",
      type: "Local Arcade",
      description: "Local arcade with classic and modern games",
      features: ["Classic Games", "Modern Games", "Local Favorite", "Affordable"],
      website: "#",
      image: arcadeGamingImg
    }
  ];

  const actionActivities = [
    {
      name: "LaserOps",
      type: "Laser Tag",
      description: "High-tech laser tag arena with multiple game modes",
      features: ["High-Tech Arena", "Multiple Game Modes", "Team Building", "Competitive"],
      website: "#",
      image: laserTagImg
    }
  ];

  const placesToBe = [
    {
      name: "Armature Works",
      type: "Food Hall & Events",
      description: "Food hall and event space with river views",
      image: tampaImg
    },
    {
      name: "Water Street Tampa",
      type: "Entertainment District",
      description: "Modern district with dining, entertainment, and bowling",
      image: funActivitiesImg
    },
    {
      name: "Downtown St. Petersburg",
      type: "Arts & Culture",
      description: "Arts district with galleries, restaurants, and nightlife",
      image: stPeteImg
    },
    {
      name: "Clearwater Beach",
      type: "Beach Town",
      description: "Beach town with shops, restaurants, and activities",
      image: clearwaterImg
    }
  ];

  const ActivityCard = ({ activity }: { activity: any }) => (
    <div className="card-hover">
      <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
        <img 
          src={activity.image} 
          alt={activity.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mb-2">
        <span className="inline-block bg-ocean text-white text-xs px-2 py-1 rounded-full">
          {activity.type}
        </span>
      </div>
      <h3 className="font-heading font-semibold mb-2">{activity.name}</h3>
      <p className="text-sm text-muted-foreground mb-3">{activity.description}</p>
      <div className="flex flex-wrap gap-1 mb-4">
        {activity.features.map((feature: string, index: number) => (
          <span key={index} className="text-xs bg-shell text-ocean px-2 py-1 rounded">
            {feature}
          </span>
        ))}
      </div>
      <Button variant="outline" size="sm" className="w-full group">
        Visit Website
        <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );

  const PlaceCard = ({ place }: { place: any }) => (
    <div className="card-hover group">
      <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
        <img 
          src={place.image} 
          alt={place.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="font-heading font-semibold mb-2">{place.name}</h3>
      <div className="mb-2">
        <span className="inline-block bg-teal text-white text-xs px-2 py-1 rounded-full">
          {place.type}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">{place.description}</p>
    </div>
  );

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
            Activities & Adventures
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From water sports and laser tag to arcade gaming and mini golf, discover endless ways to have fun in Tampa Bay.
          </p>
        </div>

        {/* Outdoor Adventures */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading font-bold mb-8 text-ocean">Outdoor Adventures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outdoorActivities.map((activity, index) => (
              <ActivityCard key={index} activity={activity} />
            ))}
          </div>
        </section>

        {/* Sports & Recreation */}
        <section className="mb-20 bg-sand rounded-2xl p-8">
          <h2 className="text-3xl font-heading font-bold mb-8 text-ocean">Sports & Recreation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsActivities.map((activity, index) => (
              <ActivityCard key={index} activity={activity} />
            ))}
          </div>
        </section>

        {/* Gaming & Arcades */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading font-bold mb-8 text-ocean">Gaming & Arcades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gamingActivities.map((activity, index) => (
              <ActivityCard key={index} activity={activity} />
            ))}
          </div>
        </section>

        {/* Action & Adventure */}
        <section className="mb-20 bg-shell rounded-2xl p-8">
          <h2 className="text-3xl font-heading font-bold mb-8 text-ocean">Action & Adventure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actionActivities.map((activity, index) => (
              <ActivityCard key={index} activity={activity} />
            ))}
          </div>
        </section>

        {/* Places to Be */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading font-bold mb-8 text-ocean">Places to Be</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {placesToBe.map((place, index) => (
              <PlaceCard key={index} place={place} />
            ))}
          </div>
        </section>

        {/* Activity Tips */}
        <section className="bg-gradient-ocean text-white rounded-2xl p-8">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Activity Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-heading font-semibold mb-3">Book Ahead</h3>
              <p className="text-white/90">Popular activities like water sports and adventure courses fill up quickly, especially on weekends.</p>
            </div>
            <div className="text-center">
              <h3 className="font-heading font-semibold mb-3">Group Discounts</h3>
              <p className="text-white/90">Many venues offer group rates for parties of 6+. Perfect for birthday celebrations or friend outings.</p>
            </div>
            <div className="text-center">
              <h3 className="font-heading font-semibold mb-3">Mix & Match</h3>
              <p className="text-white/90">Combine activities for the perfect day out - mini golf followed by arcade games, or water sports then beach dining.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Activities;