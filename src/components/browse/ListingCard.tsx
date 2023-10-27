import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Star, ArrowRight, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

interface ListingCardProps {
  id: string;
  avatar: string;
  name: string;
  location: string;
  verified: boolean;
  rating: number;
  reviewCount: number;
  offering: string;
  offeringCategory: string;
  seeking: string;
  seekingCategory: string;
}

const ListingCard = ({
  id,
  avatar,
  name,
  location,
  verified,
  rating,
  reviewCount,
  offering,
  offeringCategory,
  seeking,
  seekingCategory,
}: ListingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-2xl border border-border p-6 card-hover"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-gradient-trust flex items-center justify-center text-2xl">
              {avatar}
            </div>
            {verified && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <BadgeCheck className="w-3 h-3 text-primary-foreground" />
              </div>
            )}
          </div>
          <div>
            <h3 className="font-semibold flex items-center gap-2">
              {name}
            </h3>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {location}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-accent text-accent" />
                {rating} ({reviewCount})
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Swap Details */}
      <div className="space-y-3 mb-5">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-primary-light">
          <span className="text-xs font-medium uppercase tracking-wide text-primary/70">Offers</span>
          <div className="flex-1">
            <p className="font-medium text-primary">{offering}</p>
            <p className="text-xs text-primary/70">{offeringCategory}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary-light">
          <span className="text-xs font-medium uppercase tracking-wide text-secondary/70">Seeks</span>
          <div className="flex-1">
            <p className="font-medium text-secondary">{seeking}</p>
            <p className="text-xs text-secondary/70">{seekingCategory}</p>
          </div>
        </div>
      </div>

      {/* Action */}
      <Button variant="outline" className="w-full" asChild>
        <Link to={`/profile/${id}`} className="flex items-center justify-center gap-2">
          Propose a Swap
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
    </motion.div>
  );
};

export default ListingCard;
