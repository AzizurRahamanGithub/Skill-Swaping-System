import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ListingCard from "@/components/browse/ListingCard";
import FilterSidebar from "@/components/browse/FilterSidebar";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, Grid3X3, List } from "lucide-react";
import { motion } from "framer-motion";

// Sample data
const listings = [
  {
    id: "1",
    avatar: "👩‍🎨",
    name: "Sarah Mitchell",
    location: "Austin, TX",
    verified: true,
    rating: 4.9,
    reviewCount: 47,
    offering: "Logo & Brand Design",
    offeringCategory: "Design & Creative",
    seeking: "Home Cleaning Services",
    seekingCategory: "Home Services",
  },
  {
    id: "2",
    avatar: "👨‍💻",
    name: "Marcus Johnson",
    location: "Brooklyn, NY",
    verified: true,
    rating: 5.0,
    reviewCount: 32,
    offering: "Full-Stack Web Development",
    offeringCategory: "Web Development",
    seeking: "Photography Sessions",
    seekingCategory: "Photography",
  },
  {
    id: "3",
    avatar: "👩‍🏫",
    name: "Elena Rodriguez",
    location: "Miami, FL",
    verified: true,
    rating: 4.8,
    reviewCount: 65,
    offering: "Spanish & French Tutoring",
    offeringCategory: "Teaching & Tutoring",
    seeking: "Accounting & Tax Help",
    seekingCategory: "Business Services",
  },
  {
    id: "4",
    avatar: "👨‍🍳",
    name: "David Chen",
    location: "San Francisco, CA",
    verified: false,
    rating: 4.7,
    reviewCount: 23,
    offering: "Personal Chef Services",
    offeringCategory: "Home Services",
    seeking: "Guitar Lessons",
    seekingCategory: "Music & Audio",
  },
  {
    id: "5",
    avatar: "👩‍⚕️",
    name: "Dr. Amara Okafor",
    location: "Chicago, IL",
    verified: true,
    rating: 5.0,
    reviewCount: 89,
    offering: "Wellness & Nutrition Coaching",
    offeringCategory: "Health & Wellness",
    seeking: "Website Design",
    seekingCategory: "Web Development",
  },
  {
    id: "6",
    avatar: "📸",
    name: "Jake Williams",
    location: "Denver, CO",
    verified: true,
    rating: 4.9,
    reviewCount: 56,
    offering: "Portrait & Event Photography",
    offeringCategory: "Photography",
    seeking: "Marketing Consultation",
    seekingCategory: "Marketing",
  },
];

const Browse = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Browse <span className="text-gradient">Swap Listings</span>
            </h1>
            <p className="text-muted-foreground">
              Discover skills, services, and goods available for exchange in your community.
            </p>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="outline"
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>

            <div className="hidden lg:block text-sm text-muted-foreground">
              Showing <strong>{listings.length}</strong> listings
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex gap-8">
            <FilterSidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />

            {/* Listings Grid */}
            <div className="flex-1">
              <div
                className={`grid gap-6 ${
                  viewMode === "grid"
                    ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                    : "grid-cols-1"
                }`}
              >
                {listings.map((listing) => (
                  <ListingCard key={listing.id} {...listing} />
                ))}
              </div>

              {/* Load More */}
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg">
                  Load More Listings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Browse;
