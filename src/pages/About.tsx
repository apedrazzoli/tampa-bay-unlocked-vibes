import { MapPin, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sand to-shell">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
              Hi, I'm Alessia
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              From New York to Tampa – discovering fun without limits
            </p>
            <Button asChild variant="ocean" size="lg" className="hover-lift">
              <Link to="/explore">Explore My Discoveries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="card-hover mb-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 bg-gradient-to-br from-ocean/20 to-coral/20 rounded-full flex items-center justify-center">
                  <span className="text-ocean/60 font-medium">Alessia's Photo</span>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-heading font-bold mb-2">Alessia Pedrazzoli</h2>
                  <div className="flex items-center justify-center md:justify-start text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    Tampa, FL
                  </div>
                  <p className="text-ocean font-medium">Originally from NYC 🗽</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section className="py-16 bg-shell">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 gradient-text">My Journey</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground mb-6">
                I'm Alessia Pedrazzoli, and like a lot of people my age, I found myself in a new city—excited, curious, and unsure of what to expect. I grew up in New York—the Big Apple—where something's always happening and the pace never slows down. When I moved to Tampa just before starting college, I was ready for sunshine, palm trees, and a new chapter full of fun and adventure.
              </p>
              <p className="text-foreground mb-6">
                But once I got here, I quickly realized that being 18 to 20 came with unexpected limitations. So much of the social scene in Tampa revolves around bars and clubs that are 21 and up. I didn't know where to go or what to do without feeling like I either had to stay home or pretend to be older just to be part of the fun.
              </p>
              <p className="text-foreground mb-6">
                What struck me most was the pervasive culture that equates fun with drinking. There's this unspoken idea that to enjoy yourself—especially on weekends—alcohol has to be involved. I found that mindset limiting and, honestly, disheartening. I didn't want to feel like I had to drink just to fit in or have a good time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Different Perspective Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 gradient-text">A Different Perspective</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground mb-6">
                That's part of why I created this site—not just because of what I was missing in Tampa, but also because of what I've experienced elsewhere. I'm Swiss, and I've traveled extensively throughout Europe, where the mindset around going out is completely different. In many places, young people can go out as early as 16, and there isn't the same pressure to "drink to have fun." Social life isn't limited by age or alcohol—it's about freedom, connection, and genuinely enjoying the moment.
              </p>
              <p className="text-foreground mb-6">
                That sense of liberty stuck with me, and it made the contrast here in the U.S. even more glaring. So, I wanted to challenge that idea and prove that alcohol isn't a requirement for connection, fun, or unforgettable memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Mission Section */}
      <section className="py-16 bg-sand">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 gradient-text">The Mission</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground mb-6">
                Tampa—and the surrounding areas like St. Pete and Dunedin—actually have a lot to offer for the 18+ crowd. From 18+ clubs and live music venues to outdoor adventures, late-night food spots, and creative hangouts, there are countless ways to enjoy yourself without relying on alcohol or a fake ID.
              </p>
              <p className="text-foreground mb-6">
                This site is about embracing that lifestyle. It's here to show you the experiences, spots, and vibes that don't center around drinking but still deliver everything you're looking for—energy, connection, adventure, and fun. Whether you're new to the area or just want something different, I hope this platform helps you discover the other side of Tampa Bay's social scene.
              </p>
              <p className="text-foreground font-semibold text-ocean">
                You don't need to wait until you're 21 to live your life—and you definitely don't need a drink in your hand to enjoy it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Adventure Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center gradient-text">
              My Tampa Bay Adventures
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-hover">
                <div className="w-full h-48 bg-gradient-to-br from-ocean/20 to-teal/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-ocean/60 text-sm font-medium">Exploring Tampa</span>
                </div>
                <h3 className="font-semibold">Exploring Tampa</h3>
              </div>
              <div className="card-hover">
                <div className="w-full h-48 bg-gradient-to-br from-coral/20 to-sunset/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-coral/60 text-sm font-medium">Beach Adventures</span>
                </div>
                <h3 className="font-semibold">Beach day adventures</h3>
              </div>
              <div className="card-hover">
                <div className="w-full h-48 bg-gradient-to-br from-teal/20 to-ocean/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-teal/60 text-sm font-medium">Food Discoveries</span>
                </div>
                <h3 className="font-semibold">Food discoveries</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;