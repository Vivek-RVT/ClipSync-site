import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface PlatformCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  version?: string;
  size?: string;
  buttonText: string;
  available?: boolean;
  gradient?: string;
  onDownload?: () => void;
}

export function PlatformCard({
  icon: Icon,
  name,
  description,
  version,
  size,
  buttonText,
  available = true,
  gradient = "from-primary/20 to-accent-blue/20",
  onDownload,
}: PlatformCardProps) {
  return (
    <Card
      className={`glass-effect rounded-3xl p-8 text-center group transition-all duration-300 cursor-pointer border-white/10 ${
        available
          ? "hover:scale-105 hover:border-primary/50"
          : "opacity-60 cursor-not-allowed"
      }`}
    >
      <CardContent className="p-0">
        <div
          className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors ${
            available ? `group-hover:${gradient.replace("/20", "/30")}` : ""
          }`}
        >
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <Button
          className={available ? "btn-primary w-full py-3 rounded-xl font-semibold" : "w-full py-3 rounded-xl font-semibold"}
          variant={available ? "default" : "outline"}
          disabled={!available}
          onClick={onDownload}
        >
          {buttonText}
        </Button>
        {(version || size) && (
          <div className="text-sm text-muted-foreground mt-2">
            {version && size ? `${version} • ${size}` : version || size || "In Development"}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
