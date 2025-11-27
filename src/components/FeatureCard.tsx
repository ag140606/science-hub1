import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, image, icon }: FeatureCardProps) => {
  return (
    <Card className="group overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-card-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        <Button variant="ghost" className="group/btn text-primary hover:text-primary hover:bg-primary/10">
          Explore Now
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </Card>
  );
};

export default FeatureCard;
