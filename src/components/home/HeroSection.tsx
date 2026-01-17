import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const stats = [
    { value: "15K+", label: "Active Members" },
    { value: "45K+", label: "Successful Swaps" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-trust opacity-50" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Join 15,000+ community members</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Exchange What You Have{" "}
              <span className="text-gradient">for What You Need.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              A community-powered platform for trading skills, services, and value—without cash. 
              Connect, barter, and build meaningful relationships.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="xl" asChild>
                <Link to="/signup" className="flex items-center gap-2">
                  Join the Community
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/how-it-works">How It Works</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span>Verified Members</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span>Trusted Community</span>
              </div>
            </div>
          </motion.div>

          {/* Visual / Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-card rounded-3xl p-8 shadow-lg border border-border">
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-primary rounded-2xl p-4 shadow-lg"
              >
                <span className="text-3xl">🎨</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 bg-secondary rounded-2xl p-4 shadow-lg"
              >
                <span className="text-3xl">💻</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-4 -right-6 bg-accent rounded-2xl p-4 shadow-lg"
              >
                <span className="text-3xl">📸</span>
              </motion.div>

              {/* Card Content */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">Ready to start swapping?</h3>
                <p className="text-muted-foreground text-sm">
                  Join thousands already trading skills & services
                </p>
              </div>

              {/* Sample Swap */}
              <div className="bg-gradient-trust rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                      👩‍🎨
                    </div>
                    <div>
                      <p className="font-medium text-sm">Sarah offers</p>
                      <p className="text-primary font-semibold">Logo Design</p>
                    </div>
                  </div>
                  <div className="text-2xl">⇄</div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="font-medium text-sm">Mike offers</p>
                      <p className="text-secondary font-semibold">Web Dev</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-2xl">
                      👨‍💻
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Swap completed successfully!
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
