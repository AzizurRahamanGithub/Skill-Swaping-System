import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { User, ListPlus, Users, FileText, Shield, ArrowRight, CheckCircle2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: User,
      number: "01",
      title: "Create Your Profile",
      description: "Sign up in minutes and tell the community about yourself. Add your skills, location, and what makes you unique.",
      details: [
        "Add a photo and bio to build trust",
        "Highlight your expertise and experience",
        "Set your location for local matches",
        "Get verified for extra credibility",
      ],
    },
    {
      icon: ListPlus,
      number: "02",
      title: "List What You Offer & Need",
      description: "Create listings for the skills, services, or goods you can offer. Then tell us what you're looking for in return.",
      details: [
        "Describe your offerings in detail",
        "Set clear expectations and terms",
        "Browse categories to find matches",
        "Update listings anytime",
      ],
    },
    {
      icon: Users,
      number: "03",
      title: "Get Matched & Connect",
      description: "Our smart matching system finds compatible swap partners. Browse listings or let matches come to you.",
      details: [
        "Smart algorithm finds compatible swaps",
        "Filter by category, location, or ratings",
        "Send messages to potential partners",
        "Review profiles and past swaps",
      ],
    },
    {
      icon: FileText,
      number: "04",
      title: "Agree & Create a Contract",
      description: "Once you find a match, agree on terms and create a simple contract that protects both parties.",
      details: [
        "Define scope and deliverables",
        "Set timeline and milestones",
        "Both parties approve the terms",
        "Small fee covers contract creation",
      ],
    },
    {
      icon: Shield,
      number: "05",
      title: "Swap & Build Your Reputation",
      description: "Complete the exchange, leave reviews, and build your reputation in the community.",
      details: [
        "Deliver on your commitments",
        "Leave honest reviews",
        "Earn badges and trust points",
        "Grow your network",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-trust opacity-50" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
                How It Works
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Start Swapping in <span className="text-gradient">5 Easy Steps</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                SWAP N MEET makes bartering simple, safe, and dignified. Here's how our platform
                helps you exchange value with your community.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-full w-0.5 h-8 bg-border hidden md:block" />
                  )}

                  <div className="bg-card rounded-2xl border border-border p-6 md:p-8 hover:border-primary/30 transition-colors">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon & Number */}
                      <div className="flex items-start gap-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center">
                            <step.icon className="w-8 h-8 text-primary-foreground" />
                          </div>
                          <span className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-foreground text-background flex items-center justify-center text-sm font-bold">
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center bg-gradient-trust rounded-3xl p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-6">
                Join thousands of community members already exchanging value. It only takes a few minutes to create your profile.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/signup" className="flex items-center gap-2">
                    Create Your Profile
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/browse">Browse Listings First</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
