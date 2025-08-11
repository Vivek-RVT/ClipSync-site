import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: React.ReactNode;
  gradient?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  children,
  gradient = "from-primary to-accent-blue",
}: FeatureCardProps) {
  return (
    <Card className="feature-card glass-effect rounded-3xl p-8 group border-white/10 hover:border-primary/50">
      <CardContent className="p-0">
        <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        {children}
      </CardContent>
    </Card>
  );
}
