import { ExternalLink, Clock, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const Activities = () => {
  const outdoorActivities = [
    {
      name: "Elite Water Sports",
      type: "Water Sports",
      description: "Jet skiing, parasailing, and water adventures",
      features: ["Jet Skiing", "Parasailing", "Boat Rentals", "Gulf Access"],
      website: "#"
    },
    {
      name: "Empower Adventures Tampa Bay",
      type: "Adventure Park",
      description: "Zip lining and outdoor adventure courses",
      features: ["Zip Lines", "Obstacle Courses", "Team Building", "Nature"],
      website: "#"
    }
  ];

  const sportsActivities = [
    {
      name: "PopStroke Tampa",
      type: "Mini Golf",
      description: "Premium mini golf experience with food and drinks",
      features: ["Premium Course", "Food & Drinks", "Social Atmosphere", "Modern Design"],
      website: "#"
    },
    {
      name: "TB Pickleball Oldsmar",
      type: "Pickleball",
      description: "Indoor pickleball courts and leagues",
      features: ["Indoor Courts", "Leagues", "Equipment Rental", "All Levels"],
      website: "#"
    },
    {
      name: "Pickleheads at Rowlett Park",
      type: "Outdoor Pickleball",
      description: "Outdoor pickleball courts in Tampa",
      features: ["Outdoor Courts", "Free Play", "Community", "Tampa Location"],
      website: "#"
    }
  ];

  const gamingActivities = [
    {
      name: "1UP Arcade Bar",
      type: "Arcade",
      description: "Classic arcade games and modern gaming",
      features: ["Classic Games", "Modern Gaming", "Social Atmosphere", "Tournaments"],
      website: "#"
    },
    {
      name: "Reboot Amusements",
      type: "Retro Arcade",
      description: "Retro arcade with pinball and classic games",
      features: ["Pinball", "Retro Games", "Nostalgic Vibes", "All Ages"],
      website: "#"
    },
    {
      name: "GameTime Players",
      type: "Gaming Lounge",
      description: "Gaming lounge with console and PC gaming",
      features: ["Console Gaming", "PC Gaming", "Tournaments", "Social Gaming"],
      website: "#"
    },
    {
      name: "Elev8 Fun",
      type: "Entertainment Center",
      description: "Multi-level entertainment with arcade and activities",
      features: ["Multi-Level", "Arcade", "Activities", "Group Fun"],
      website: "#"
    },
    {
      name: "Lowry Arcade",
      type: "Local Arcade",
      description: "Local arcade with classic and modern games",
      features: ["Classic Games", "Modern Games", "Local Favorite", "Affordable"],
      website: "#"
    }
  ];

  const actionActivities = [
    {
      name: "LaserOps",
      type: "Laser Tag",
      description: "High-tech laser tag arena with multiple game modes",
      features: ["High-Tech Arena", "Multiple Game Modes", "Team Building", "Competitive"],
      website: "#"
    }
  ];

  const placesToBe = [
    {
      name: "Armature Works",
      type: "Food Hall & Events",
      description: "Food hall and event space with river views"
    },
    {
      name: "Water Street Tampa",
      type: "Entertainment District",
      description: "Modern district with dining, entertainment, and bowling"
    },
    {
      name: "Downtown St. Petersburg",
      type: "Arts & Culture",
      description: "Arts district with galleries, restaurants, and nightlife"
    },
    {
      name: "Clearwater Beach",
      type: "Beach Town",
      description: "Beach town with shops, restaurants, and activities"
    }
  ];

  const ActivityCard = ({ activity }: { activity: any }) => (
    <div className="card-hover">
      <div className="w-full h-48 bg-gradient-to-br from-ocean/20 to-teal/20 rounded-lg mb-4 flex items-center justify-center">
        <span className="text-ocean/60 text-sm font-medium">{activity.name} Image</span>
      </div>
      <div className="mb-2">
        <span className="inline-block bg-ocean text-white text-xs px-2 py-1 rounded-full">
          {activity.type}
        </span>
      </div>
      <h3 className="font-heading font-semibold mb-2">{activity.name}</h3>
      <p className="text-sm text-muted-foreground mb-4">{activity.description}</p>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {activity.features.map((feature: string, index: number) => (
          <span key={index} className="text-xs bg-sand text-stone px-2 py-1 rounded">
            {feature}
          </span>
        ))}
      </div>
      <Button size="sm" variant="outline" className="w-full">
        <ExternalLink className="w-4 h-4 mr-2" />
        Visit Website
      </Button>
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
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 gradient-text">Outdoor Adventures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outdoorActivities.map((activity, index) => (
              <ActivityCard key={index} activity={activity} />
            ))}
          </div>
        </section>

        {/* Sports & Recreation */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 gradient-text">Sports & Recreation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsActivities.map((activity, index) => (
              <ActivityCard key={index} activity={activity} />
            ))}
          </div>
        </section>

        {/* Gaming & Arcades */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 gradient-text">Gaming & Arcades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gamingActivities.map((activity, index) => (
              <ActivityCard key={index} activity={activity} />
            ))}
          </div>
        </section>

        {/* Action & Adventure */}
        <section className="mb-16">
          <h2 className="text-3xl font-heading font-bold mb-8 gradient-text">Action & Adventure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actionActivities.map((activity, index) => (
              <ActivityCard key={index} activity={activity} />
            ))}
          </div>
        </section>

        {/* Places to Be */}
        <section className="mb-16 bg-shell rounded-2xl p-8">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center gradient-text">Places to Be</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {placesToBe.map((place, index) => (
              <div key={index} className="card-hover">
                <div className="w-full h-32 bg-gradient-to-br from-coral/20 to-sunset/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-coral/60 text-sm font-medium">{place.name}</span>
                </div>
                <h3 className="font-heading font-semibold mb-2">{place.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{place.type}</p>
                <p className="text-xs text-muted-foreground">{place.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Activity Tips */}
        <section className="bg-sand rounded-2xl p-8">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center gradient-text">Activity Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-ocean text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Book Ahead</h3>
              <p className="text-sm text-muted-foreground">
                Popular activities like water sports and adventure courses fill up quickly, especially on weekends.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-coral text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Group Discounts</h3>
              <p className="text-sm text-muted-foreground">
                Many venues offer group rates for parties of 6+. Perfect for birthday celebrations or friend outings.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Mix & Match</h3>
              <p className="text-sm text-muted-foreground">
                Combine activities for the perfect day out - mini golf followed by arcade games, or water sports then beach dining.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Activities;