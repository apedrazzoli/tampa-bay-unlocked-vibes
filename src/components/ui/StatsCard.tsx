interface StatsCardProps {
  number: string;
  label: string;
  description: string;
}

const StatsCard = ({ number, label, description }: StatsCardProps) => {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2">
        {number}
      </div>
      <div className="text-lg font-semibold text-foreground mb-1">
        {label}
      </div>
      <div className="text-sm text-muted-foreground">
        {description}
      </div>
    </div>
  );
};

export default StatsCard;