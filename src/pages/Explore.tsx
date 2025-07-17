import CategoryCard from "@/components/ui/CategoryCard";

const Explore = () => {
  const featuredSpots = [
    {
      name: "Bulla GastroBar",
      type: "Restaurant",
      location: "Tampa",
      description: "Rooftop Spanish tapas with amazing city views"
    },
    {
      name: "Fort De Soto Park",
      type: "Beach",
      location: "St. Petersburg",
      description: "Multiple beaches, bike trails, and dog-friendly areas"
    },
    {
      name: "Club Prana",
      type: "Nightlife",
      location: "Ybor City",
      description: "Multi-level 18+ club with different music on each floor"
    },
    {
      name: "Elite Water Sports",
      type: "Activity",
      location: "Tampa Bay",
      description: "Jet skiing, parasailing, and water adventures"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
            Explore Tampa Bay
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your adventure starts here. Browse by category or discover featured spots that make Tampa Bay the perfect place for 18+ fun.
          </p>
        </div>

        {/* Where to Start */}
        <section className="mb-20">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">Where to Start</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard
              title="Tampa Restaurants"
              description="Discover the best dining spots in Tampa"
              href="/restaurants"
            />
            <CategoryCard
              title="St. Pete Nightlife"
              description="Explore St. Petersburg's vibrant night scene"
              href="/nightlife"
            />
            <CategoryCard
              title="Clearwater Beaches"
              description="Find your perfect beach day spot"
              href="/beaches"
            />
            <CategoryCard
              title="Gaming & Arcades"
              description="Level up your fun at Tampa's best arcades"
              href="/activities"
            />
          </div>
        </section>

        {/* Featured This Week */}
        <section className="mb-20 bg-shell rounded-2xl p-8">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center gradient-text">
            Featured This Week
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSpots.map((spot, index) => (
              <div key={index} className="card-hover">
                <div className="w-full h-48 bg-gradient-to-br from-ocean/20 to-teal/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-ocean/60 text-sm font-medium">{spot.name} Image</span>
                </div>
                <div className="mb-2">
                  <span className="inline-block bg-ocean text-white text-xs px-2 py-1 rounded-full mr-2">
                    {spot.type}
                  </span>
                  <span className="text-sm text-muted-foreground">{spot.location}</span>
                </div>
                <h3 className="font-heading font-semibold mb-2">{spot.name}</h3>
                <p className="text-sm text-muted-foreground">{spot.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Browse Categories */}
        <section className="text-center">
          <h2 className="text-3xl font-heading font-bold mb-6 gradient-text">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Browse all our categories to discover everything Tampa Bay has to offer
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <CategoryCard
              title="Restaurants"
              description=""
              href="/restaurants"
              imageSpace={false}
              className="hover-lift"
            />
            <CategoryCard
              title="Beaches"
              description=""
              href="/beaches"
              imageSpace={false}
              className="hover-lift"
            />
            <CategoryCard
              title="Nightlife"
              description=""
              href="/nightlife"
              imageSpace={false}
              className="hover-lift"
            />
            <CategoryCard
              title="Activities"
              description=""
              href="/activities"
              imageSpace={false}
              className="hover-lift"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Explore;