import { motion } from "framer-motion";
import { Shield, Search, FileCheck, Star, MessageCircle, Globe } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Matching",
      description: "Our algorithm finds the perfect swap partners based on what you offer and need.",
    },
    {
      icon: Shield,
      title: "Verified Profiles",
      description: "Trust badges and verification help you connect with confidence.",
    },
    {
      icon: FileCheck,
      title: "Simple Contracts",
      description: "Create clear, fair agreements that protect both parties in every swap.",
    },
    {
      icon: Star,
      title: "Rating System",
      description: "Build your reputation through honest reviews from the community.",
    },
    {
      icon: MessageCircle,
      title: "Direct Messaging",
      description: "Chat securely with potential swap partners before committing.",
    },
    {
      icon: Globe,
      title: "Local & Remote",
      description: "Find swaps in your neighborhood or connect with anyone worldwide.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-secondary-light text-secondary text-sm font-medium mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Swap with Confidence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Built for trust, transparency, and meaningful community connections.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl border border-border bg-card hover:bg-gradient-trust transition-all duration-300 card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
