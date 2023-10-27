import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Star, BadgeCheck, Calendar, MessageCircle, ArrowLeft, Shield, Award, ArrowRightLeft } from "lucide-react";
import { motion } from "framer-motion";
import SwapRequestModal from "@/components/swap/SwapRequestModal";

// Sample profile data
const profileData = {
  id: "1",
  avatar: "👩‍🎨",
  name: "Sarah Mitchell",
  tagline: "Creative Designer with 8+ years of experience",
  location: "Austin, TX",
  verified: true,
  rating: 4.9,
  reviewCount: 47,
  completedSwaps: 38,
  memberSince: "March 2023",
  bio: "I'm a passionate graphic designer specializing in brand identity, logo design, and visual communication. I believe in the power of community and fair exchange. Looking to connect with people who value quality work and meaningful collaboration.",
  offerings: [
    { title: "Logo & Brand Identity Design", category: "Design & Creative", description: "Complete brand packages including logos, color palettes, and brand guidelines." },
    { title: "Social Media Graphics", category: "Marketing", description: "Eye-catching posts, stories, and cover images for all platforms." },
    { title: "Print Design", category: "Design & Creative", description: "Business cards, flyers, brochures, and promotional materials." },
  ],
  seeking: [
    { title: "Home Cleaning Services", category: "Home Services" },
    { title: "Personal Training", category: "Health & Wellness" },
    { title: "Photography Sessions", category: "Photography" },
  ],
  reviews: [
    { name: "Mike Thompson", avatar: "👨‍💼", rating: 5, text: "Sarah designed an amazing logo for my startup. Professional, creative, and easy to work with!", date: "2 weeks ago" },
    { name: "Jessica Lee", avatar: "👩‍🔬", rating: 5, text: "Exceeded my expectations! The brand identity she created perfectly captured my vision.", date: "1 month ago" },
    { name: "Carlos Garcia", avatar: "👨‍🎤", rating: 5, text: "Quick turnaround and fantastic quality. Highly recommend!", date: "2 months ago" },
  ],
};

const Profile = () => {
  const { id } = useParams();
  const [isSwapModalOpen, setIsSwapModalOpen] = useState(false);

  const targetUserForModal = {
    name: profileData.name,
    avatar: profileData.avatar,
    offerings: profileData.offerings.map(o => ({ title: o.title, category: o.category })),
    seeking: profileData.seeking,
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            to="/browse"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to listings
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Profile Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-2xl border border-border p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-trust flex items-center justify-center text-5xl md:text-6xl">
                      {profileData.avatar}
                    </div>
                    {profileData.verified && (
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <BadgeCheck className="w-5 h-5 text-primary-foreground" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h1 className="text-2xl md:text-3xl font-bold">{profileData.name}</h1>
                      {profileData.verified && (
                        <span className="px-2 py-1 rounded-full bg-primary-light text-primary text-xs font-medium">
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4">{profileData.tagline}</p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {profileData.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        {profileData.rating} ({profileData.reviewCount} reviews)
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Member since {profileData.memberSince}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-light">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          {profileData.completedSwaps} swaps completed
                        </span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent-light">
                        <Shield className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-accent-foreground">
                          Trusted Member
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="font-semibold mb-2">About</h3>
                  <p className="text-muted-foreground leading-relaxed">{profileData.bio}</p>
                </div>
              </motion.div>

              {/* What They Offer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 md:p-8"
              >
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center text-primary">✨</span>
                  What {profileData.name.split(" ")[0]} Offers
                </h2>
                <div className="space-y-4">
                  {profileData.offerings.map((offer, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-primary-light border border-primary/20"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-primary">{offer.title}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                          {offer.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{offer.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* What They're Looking For */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl border border-border p-6 md:p-8"
              >
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-secondary-light flex items-center justify-center text-secondary">🔍</span>
                  What {profileData.name.split(" ")[0]} is Looking For
                </h2>
                <div className="flex flex-wrap gap-3">
                  {profileData.seeking.map((item, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 rounded-xl bg-secondary-light border border-secondary/20"
                    >
                      <p className="font-medium text-secondary">{item.title}</p>
                      <p className="text-xs text-secondary/70">{item.category}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Reviews */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl border border-border p-6 md:p-8"
              >
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center text-accent">⭐</span>
                  Reviews ({profileData.reviewCount})
                </h2>
                <div className="space-y-6">
                  {profileData.reviews.map((review, index) => (
                    <div key={index} className="pb-6 border-b border-border last:border-0 last:pb-0">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xl">
                          {review.avatar}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{review.name}</p>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {Array.from({ length: review.rating }).map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                              ))}
                            </div>
                            <span className="text-xs text-muted-foreground">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{review.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Propose Swap */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="sticky top-24 bg-card rounded-2xl border border-border p-6"
              >
                <h3 className="font-bold text-lg mb-4">Propose a Swap</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Interested in exchanging with {profileData.name.split(" ")[0]}? Send a message to start the conversation.
                </p>

                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full mb-3"
                  onClick={() => setIsSwapModalOpen(true)}
                >
                  <ArrowRightLeft className="w-5 h-5 mr-2" />
                  Propose a Swap
                </Button>
                
                <Button variant="outline" size="lg" className="w-full mb-3" asChild>
                  <Link to="/messages">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send Message
                  </Link>
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Typically responds within 24 hours
                </p>

                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold text-sm mb-3">Quick Match</h4>
                  <p className="text-xs text-muted-foreground mb-3">
                    You both might be a great match if you can offer:
                  </p>
                  <div className="space-y-2">
                    {profileData.seeking.slice(0, 2).map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-muted"
                      >
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        {item.title}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      <SwapRequestModal
        isOpen={isSwapModalOpen}
        onClose={() => setIsSwapModalOpen(false)}
        targetUser={targetUserForModal}
      />
    </div>
  );
};

export default Profile;
