import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Plus, X, Sparkles, Package, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const categories = [
  "Design & Creative",
  "Web Development",
  "Marketing",
  "Photography",
  "Writing & Content",
  "Home Services",
  "Health & Wellness",
  "Education & Tutoring",
  "Music & Audio",
  "Business & Consulting",
  "Handmade & Crafts",
  "Other",
];

interface ServiceItem {
  title: string;
  category: string;
  description: string;
}

const CreateListing = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Offerings state
  const [offerings, setOfferings] = useState<ServiceItem[]>([]);
  const [currentOffering, setCurrentOffering] = useState<ServiceItem>({
    title: "",
    category: "",
    description: "",
  });
  
  // Seeking state
  const [seekingItems, setSeekingItems] = useState<{ title: string; category: string }[]>([]);
  const [currentSeeking, setCurrentSeeking] = useState({ title: "", category: "" });

  const addOffering = () => {
    if (currentOffering.title && currentOffering.category) {
      setOfferings([...offerings, currentOffering]);
      setCurrentOffering({ title: "", category: "", description: "" });
    }
  };

  const removeOffering = (index: number) => {
    setOfferings(offerings.filter((_, i) => i !== index));
  };

  const addSeekingItem = () => {
    if (currentSeeking.title && currentSeeking.category) {
      setSeekingItems([...seekingItems, currentSeeking]);
      setCurrentSeeking({ title: "", category: "" });
    }
  };

  const removeSeekingItem = (index: number) => {
    setSeekingItems(seekingItems.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (offerings.length === 0) {
      toast({
        title: "Add at least one service",
        description: "Please add at least one service you can offer.",
        variant: "destructive",
      });
      return;
    }

    // For now, show success toast (database integration would go here)
    toast({
      title: "Listing created successfully!",
      description: "Your services are now visible to the community.",
    });
    
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Create Your Listing</h1>
            <p className="text-muted-foreground">
              Tell the community what you can offer and what you're looking for.
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* What You Offer Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">What You Offer</h2>
                  <p className="text-sm text-muted-foreground">Add services, skills, or goods you can provide</p>
                </div>
              </div>

              {/* Added Offerings */}
              {offerings.length > 0 && (
                <div className="space-y-3 mb-6">
                  {offerings.map((offer, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between p-4 rounded-xl bg-primary-light border border-primary/20"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-primary">{offer.title}</h3>
                          <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                            {offer.category}
                          </span>
                        </div>
                        {offer.description && (
                          <p className="text-sm text-muted-foreground">{offer.description}</p>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeOffering(index)}
                        className="p-1 hover:bg-primary/20 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4 text-primary" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Add New Offering Form */}
              <div className="space-y-4 p-4 rounded-xl bg-muted/50 border border-border">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="offering-title">Service Title *</Label>
                    <Input
                      id="offering-title"
                      placeholder="e.g., Logo Design, Web Development"
                      value={currentOffering.title}
                      onChange={(e) => setCurrentOffering({ ...currentOffering, title: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="offering-category">Category *</Label>
                    <select
                      id="offering-category"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={currentOffering.category}
                      onChange={(e) => setCurrentOffering({ ...currentOffering, category: e.target.value })}
                    >
                      <option value="">Select category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="offering-description">Description (Optional)</Label>
                  <Textarea
                    id="offering-description"
                    placeholder="Describe what you offer, your experience, etc."
                    rows={3}
                    value={currentOffering.description}
                    onChange={(e) => setCurrentOffering({ ...currentOffering, description: e.target.value })}
                  />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={addOffering}
                  disabled={!currentOffering.title || !currentOffering.category}
                  className="w-full"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Service
                </Button>
              </div>
            </motion.div>

            {/* What You're Looking For Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl border border-border p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary-light flex items-center justify-center">
                  <Search className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">What You're Looking For</h2>
                  <p className="text-sm text-muted-foreground">Add services or goods you want in exchange</p>
                </div>
              </div>

              {/* Added Seeking Items */}
              {seekingItems.length > 0 && (
                <div className="flex flex-wrap gap-3 mb-6">
                  {seekingItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary-light border border-secondary/20"
                    >
                      <div>
                        <p className="font-medium text-secondary text-sm">{item.title}</p>
                        <p className="text-xs text-secondary/70">{item.category}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeSeekingItem(index)}
                        className="p-1 hover:bg-secondary/20 rounded-lg transition-colors"
                      >
                        <X className="w-3 h-3 text-secondary" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Add New Seeking Item Form */}
              <div className="space-y-4 p-4 rounded-xl bg-muted/50 border border-border">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="seeking-title">What You Need *</Label>
                    <Input
                      id="seeking-title"
                      placeholder="e.g., Photography, Home Cleaning"
                      value={currentSeeking.title}
                      onChange={(e) => setCurrentSeeking({ ...currentSeeking, title: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="seeking-category">Category *</Label>
                    <select
                      id="seeking-category"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={currentSeeking.category}
                      onChange={(e) => setCurrentSeeking({ ...currentSeeking, category: e.target.value })}
                    >
                      <option value="">Select category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={addSeekingItem}
                  disabled={!currentSeeking.title || !currentSeeking.category}
                  className="w-full"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add What You Need
                </Button>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button type="submit" variant="hero" size="lg" className="flex-1">
                <Sparkles className="w-5 h-5 mr-2" />
                Publish Listing
              </Button>
              <Button type="button" variant="outline" size="lg" onClick={() => navigate("/dashboard")}>
                Save as Draft
              </Button>
            </motion.div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateListing;
