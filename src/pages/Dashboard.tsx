import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  Package, 
  ArrowRightLeft, 
  MessageCircle, 
  Settings, 
  Bell,
  ChevronRight,
  Clock,
  CheckCircle,
  XCircle,
  Eye
} from "lucide-react";
import { motion } from "framer-motion";

// Sample data
const myListings = [
  {
    id: "1",
    title: "Logo & Brand Identity Design",
    category: "Design & Creative",
    views: 124,
    requests: 3,
    status: "active",
  },
  {
    id: "2",
    title: "Social Media Graphics",
    category: "Marketing",
    views: 87,
    requests: 1,
    status: "active",
  },
];

const incomingRequests = [
  {
    id: "1",
    from: { name: "Mike Thompson", avatar: "👨‍💼" },
    offering: "Web Development",
    seeking: "Logo Design",
    status: "pending",
    date: "2 hours ago",
  },
  {
    id: "2",
    from: { name: "Lisa Chen", avatar: "👩‍🔬" },
    offering: "Photography",
    seeking: "Brand Identity",
    status: "pending",
    date: "1 day ago",
  },
];

const outgoingRequests = [
  {
    id: "1",
    to: { name: "Carlos Garcia", avatar: "👨‍🎤" },
    offering: "Logo Design",
    seeking: "Music Production",
    status: "accepted",
    date: "3 days ago",
  },
  {
    id: "2",
    to: { name: "Emma Wilson", avatar: "👩‍🍳" },
    offering: "Social Media Graphics",
    seeking: "Cooking Classes",
    status: "pending",
    date: "5 days ago",
  },
];

const recentMessages = [
  {
    id: "1",
    user: { name: "Mike Thompson", avatar: "👨‍💼" },
    lastMessage: "Great! Let's finalize the swap details...",
    unread: true,
    date: "10 min ago",
  },
  {
    id: "2",
    user: { name: "Carlos Garcia", avatar: "👨‍🎤" },
    lastMessage: "Thanks for accepting! When can we start?",
    unread: false,
    date: "2 hours ago",
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<"incoming" | "outgoing">("incoming");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-accent-light text-accent-foreground">
            <Clock className="w-3 h-3" />
            Pending
          </span>
        );
      case "accepted":
        return (
          <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
            <CheckCircle className="w-3 h-3" />
            Accepted
          </span>
        );
      case "rejected":
        return (
          <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
            <XCircle className="w-3 h-3" />
            Rejected
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Dashboard Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Manage your listings, swaps, and messages</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full text-[10px] flex items-center justify-center text-secondary-foreground font-bold">
                  3
                </span>
              </Button>
              <Button variant="hero" asChild>
                <Link to="/create-listing" className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Create Listing
                </Link>
              </Button>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* My Listings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                      <Package className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold">My Listings</h2>
                  </div>
                  <Link to="/create-listing" className="text-sm text-primary hover:underline flex items-center gap-1">
                    Add New <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                {myListings.length > 0 ? (
                  <div className="space-y-4">
                    {myListings.map((listing) => (
                      <div
                        key={listing.id}
                        className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div>
                          <h3 className="font-semibold">{listing.title}</h3>
                          <p className="text-sm text-muted-foreground">{listing.category}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right text-sm">
                            <p className="flex items-center gap-1 text-muted-foreground">
                              <Eye className="w-3 h-3" /> {listing.views} views
                            </p>
                            <p className="text-primary font-medium">{listing.requests} requests</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Settings className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">You haven't created any listings yet</p>
                    <Button variant="outline" asChild>
                      <Link to="/create-listing">Create Your First Listing</Link>
                    </Button>
                  </div>
                )}
              </motion.div>

              {/* Swap Requests */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-secondary-light flex items-center justify-center">
                    <ArrowRightLeft className="w-5 h-5 text-secondary" />
                  </div>
                  <h2 className="text-xl font-bold">Swap Requests</h2>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-6">
                  <button
                    onClick={() => setActiveTab("incoming")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === "incoming"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Incoming ({incomingRequests.length})
                  </button>
                  <button
                    onClick={() => setActiveTab("outgoing")}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === "outgoing"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Outgoing ({outgoingRequests.length})
                  </button>
                </div>

                {/* Request List */}
                <div className="space-y-4">
                  {activeTab === "incoming" ? (
                    incomingRequests.map((request) => (
                      <div
                        key={request.id}
                        className="p-4 rounded-xl bg-muted/50 border border-border"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-trust flex items-center justify-center text-xl">
                              {request.from.avatar}
                            </div>
                            <div>
                              <p className="font-semibold">{request.from.name}</p>
                              <p className="text-xs text-muted-foreground">{request.date}</p>
                            </div>
                          </div>
                          {getStatusBadge(request.status)}
                        </div>
                        <div className="flex items-center gap-2 text-sm mb-4">
                          <span className="text-primary font-medium">{request.offering}</span>
                          <span className="text-muted-foreground">⇄</span>
                          <span className="text-secondary font-medium">{request.seeking}</span>
                        </div>
                        {request.status === "pending" && (
                          <div className="flex gap-2">
                            <Button variant="hero" size="sm" className="flex-1">
                              Accept
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1">
                              Decline
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                              <Link to="/messages">
                                <MessageCircle className="w-4 h-4" />
                              </Link>
                            </Button>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    outgoingRequests.map((request) => (
                      <div
                        key={request.id}
                        className="p-4 rounded-xl bg-muted/50 border border-border"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-trust flex items-center justify-center text-xl">
                              {request.to.avatar}
                            </div>
                            <div>
                              <p className="font-semibold">{request.to.name}</p>
                              <p className="text-xs text-muted-foreground">{request.date}</p>
                            </div>
                          </div>
                          {getStatusBadge(request.status)}
                        </div>
                        <div className="flex items-center gap-2 text-sm mb-4">
                          <span className="text-primary font-medium">You offer: {request.offering}</span>
                          <span className="text-muted-foreground">⇄</span>
                          <span className="text-secondary font-medium">For: {request.seeking}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" asChild>
                            <Link to="/messages" className="flex items-center gap-2">
                              <MessageCircle className="w-4 h-4" />
                              Message
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <h3 className="font-bold mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-primary-light">
                    <p className="text-2xl font-bold text-primary">2</p>
                    <p className="text-xs text-muted-foreground">Active Listings</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-secondary-light">
                    <p className="text-2xl font-bold text-secondary">5</p>
                    <p className="text-xs text-muted-foreground">Total Swaps</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-accent-light">
                    <p className="text-2xl font-bold text-accent-foreground">3</p>
                    <p className="text-xs text-muted-foreground">Pending</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-muted">
                    <p className="text-2xl font-bold">211</p>
                    <p className="text-xs text-muted-foreground">Profile Views</p>
                  </div>
                </div>
              </motion.div>

              {/* Recent Messages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <h3 className="font-bold">Messages</h3>
                  </div>
                  <Link to="/messages" className="text-sm text-primary hover:underline">
                    View All
                  </Link>
                </div>

                <div className="space-y-4">
                  {recentMessages.map((msg) => (
                    <Link
                      key={msg.id}
                      to="/messages"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors"
                    >
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-trust flex items-center justify-center text-xl">
                          {msg.user.avatar}
                        </div>
                        {msg.unread && (
                          <span className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full border-2 border-card" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className={`text-sm ${msg.unread ? "font-semibold" : "font-medium"}`}>
                            {msg.user.name}
                          </p>
                          <span className="text-xs text-muted-foreground">{msg.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{msg.lastMessage}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Browse More */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-trust rounded-2xl p-6 text-center"
              >
                <h3 className="font-bold mb-2">Find More Swaps</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Discover new opportunities in the community
                </p>
                <Button variant="hero" asChild className="w-full">
                  <Link to="/browse">Browse Listings</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
