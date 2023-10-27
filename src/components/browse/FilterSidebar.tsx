import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Filter, X } from "lucide-react";

const categories = [
  "All Categories",
  "Design & Creative",
  "Web Development",
  "Marketing",
  "Writing & Content",
  "Photography",
  "Music & Audio",
  "Teaching & Tutoring",
  "Home Services",
  "Health & Wellness",
  "Business Services",
  "Other",
];

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterSidebar = ({ isOpen, onClose }: FilterSidebarProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-foreground/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen lg:h-auto lg:top-24 w-80 lg:w-72
          bg-card border-r lg:border border-border rounded-none lg:rounded-2xl
          p-6 z-50 lg:z-0 transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Mobile Close Button */}
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-muted"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-6">
          <Filter className="w-5 h-5 text-primary" />
          <h2 className="font-semibold">Filters</h2>
        </div>

        {/* Search */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block">Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search skills, services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Location */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-2 block">Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="City or remote"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <label className="text-sm font-medium mb-3 block">Category</label>
          <div className="space-y-1 max-h-64 overflow-y-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Apply Button */}
        <Button variant="hero" className="w-full">
          Apply Filters
        </Button>

        {/* Clear */}
        <button className="w-full mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
          Clear all filters
        </button>
      </aside>
    </>
  );
};

export default FilterSidebar;
