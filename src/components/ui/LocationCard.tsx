import tampaImage from "@/assets/tampa-cityscape.jpg";
import stPeteImage from "@/assets/st-pete-waterfront.jpg";
import clearwaterImage from "@/assets/clearwater-beach.jpg";
import dunedinImage from "@/assets/dunedin-downtown.jpg";

interface LocationCardProps {
  name: string;
  description: string;
  imageSpace?: boolean;
}

const getImageForLocation = (name: string) => {
  if (name.toLowerCase().includes('tampa')) return tampaImage;
  if (name.toLowerCase().includes('petersburg')) return stPeteImage;
  if (name.toLowerCase().includes('clearwater')) return clearwaterImage;
  if (name.toLowerCase().includes('dunedin')) return dunedinImage;
  return tampaImage; // fallback
};

const LocationCard = ({ name, description, imageSpace = true }: LocationCardProps) => {
  return (
    <div className="card-hover group">
      {imageSpace && (
        <div className="w-full h-56 rounded-lg mb-4 overflow-hidden">
          <img 
            src={getImageForLocation(name)} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <h3 className="text-xl font-heading font-semibold mb-2 group-hover:gradient-text transition-all duration-300">
        {name}
      </h3>
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default LocationCard;