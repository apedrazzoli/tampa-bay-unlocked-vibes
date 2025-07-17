import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  imageSpace?: boolean;
  className?: string;
}

const CategoryCard = ({ title, description, href, imageSpace = true, className = "" }: CategoryCardProps) => {
  return (
    <Link to={href} className={`group ${className}`}>
      <div className="card-hover">
        {imageSpace && (
          <div className="w-full h-48 bg-gradient-to-br from-ocean/20 to-teal/20 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-ocean/60 text-sm font-medium">Image Placeholder</span>
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