import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import restaurantImage from "@/assets/restaurant-dining.jpg";
import beachImage from "@/assets/beach-scene.jpg";
import nightlifeImage from "@/assets/nightlife-scene.jpg";
import activitiesImage from "@/assets/fun-activities.jpg";

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  imageSpace?: boolean;
  className?: string;
}

const getImageForCategory = (title: string) => {
  if (title.toLowerCase().includes('restaurant')) return restaurantImage;
  if (title.toLowerCase().includes('beach')) return beachImage;
  if (title.toLowerCase().includes('nightlife')) return nightlifeImage;
  if (title.toLowerCase().includes('activit') || title.toLowerCase().includes('gaming')) return activitiesImage;
  return restaurantImage; // fallback
};

const CategoryCard = ({ title, description, href, imageSpace = true, className = "" }: CategoryCardProps) => {
  return (
    <Link to={href} className={`group ${className}`}>
      <div className="card-hover">
        {imageSpace && (
          <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
            <img 
              src={getImageForCategory(title)} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <h3 className="text-xl font-heading font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        <div className="flex items-center text-ocean font-medium group-hover:text-teal transition-colors duration-300">
          <span>Explore</span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;