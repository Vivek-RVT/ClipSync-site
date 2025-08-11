import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  buttonVariant?: "default" | "outline";
  popular?: boolean;
  onButtonClick?: () => void;
}

export function PricingCard({
  name,
  price,
  description,
  features,
  buttonText,
  buttonVariant = "outline",
  popular = false,
  onButtonClick,
}: PricingCardProps) {
  return (
    <Card
      className={`pricing-card glass-effect rounded-3xl p-8 relative border-white/10 ${
        popular ? "border-primary scale-105" : ""
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-primary to-accent-blue px-4 py-2 text-sm font-semibold">
            Most Popular
          </Badge>
        </div>
      )}

      <CardHeader className="text-center mb-8 p-0">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="text-4xl font-black mb-2">
          {price}
          {price !== "Custom" && price !== "$0" && (
            <span className="text-lg text-muted-foreground font-normal">/month</span>
          )}
        </div>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>

      <CardContent className="p-0">
        <ul className="space-y-4 mb-8">
          {features.map((feature) => (
            <li key={feature.name} className="flex items-center space-x-3">
              {feature.included ? (
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
              ) : (
                <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              )}
              <span
                className={
                  feature.included ? "text-foreground" : "text-muted-foreground"
                }
              >
                {feature.name}
              </span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full py-3 rounded-xl font-semibold ${
            buttonVariant === "default" ? "btn-primary" : ""
          }`}
          variant={buttonVariant}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
