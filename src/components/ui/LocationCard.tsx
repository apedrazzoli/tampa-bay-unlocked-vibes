interface LocationCardProps {
  name: string;
  description: string;
  imageSpace?: boolean;
}

const LocationCard = ({ name, description, imageSpace = true }: LocationCardProps) => {
  return (
    <div className="card-hover group">
      {imageSpace && (
        <div className="w-full h-56 bg-gradient-to-br from-ocean/20 to-teal/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
          <span className="text-ocean/60 text-sm font-medium">Image: {name}</span>
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