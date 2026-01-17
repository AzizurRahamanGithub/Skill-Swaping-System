import { motion } from "framer-motion";
import { User, ListPlus, Users, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: User,
      number: "01",
      title: "Create Your Profile",
      description: "Set up your profile with your skills, location, and what makes you unique. Build trust from day one.",
      color: "primary",
    },
    {
      icon: ListPlus,
      number: "02",
      title: "List What You Offer & Need",
      description: "Tell the community what services, skills, or goods you can offer—and what you're looking for in return.",
      color: "secondary",
    },
    {
      icon: Users,
      number: "03",
      title: "Get Matched",
      description: "Our smart matching connects you with compatible swap partners based on complementary needs and offers.",
      color: "accent",
    },
    {
      icon: FileText,
      number: "04",
      title: "Agree & Swap Safely",
      description: "Create a simple contract, agree on terms, and complete your swap with transparency and protection.",
      color: "primary",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Swapping in <span className="text-gradient">Four Simple Steps</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            No complicated processes. Just connect, agree, and exchange value with your community.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-border z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                </div>
              )}

              <div className="relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 card-hover h-full">
                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-sm shadow-md">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl mb-5 flex items-center justify-center ${
                  step.color === "primary" ? "bg-primary-light" :
                  step.color === "secondary" ? "bg-secondary-light" :
                  "bg-accent-light"
                }`}>
                  <step.icon className={`w-7 h-7 ${
                    step.color === "primary" ? "text-primary" :
                    step.color === "secondary" ? "text-secondary" :
                    "text-accent"
                  }`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/signup" className="flex items-center gap-2">
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
