import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Users, Shield, Sparkles, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in the power of people helping people. Every swap strengthens our collective community.",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Verified profiles, clear contracts, and honest reviews build a foundation of trust.",
    },
    {
      icon: Users,
      title: "Fair Exchange",
      description: "Every skill has value. We celebrate diverse talents and make exchange dignified.",
    },
    {
      icon: Sparkles,
      title: "Modern Bartering",
      description: "Ancient practice, modern platform. We've made trading simple for the digital age.",
    },
  ];

  const stats = [
    { value: "15,000+", label: "Community Members" },
    { value: "45,000+", label: "Successful Swaps" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "50+", label: "Countries" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-trust opacity-50" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Building a World Where{" "}
                <span className="text-gradient">Value Flows Freely</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                SWAP N MEET was born from a simple belief: everyone has something valuable to offer.
                We're creating a community where skills, services, and goods can be exchanged fairly—without cash always being the answer.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  We're on a mission to democratize exchange. Too often, money stands between people who could help each other.
                  A graphic designer who needs legal advice. A lawyer who wants art lessons. A chef who needs home repairs.
                </p>
                <p className="text-muted-foreground mb-4">
                  SWAP N MEET removes that barrier. We provide the platform, the trust systems, and the community to make
                  skill-for-skill, service-for-service exchanges happen—safely and professionally.
                </p>
                <p className="text-muted-foreground">
                  This isn't about being broke. It's about being smart, building connections, and valuing what you bring to the table.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="bg-card rounded-2xl border border-border p-6 text-center"
                  >
                    <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground">
                These principles guide everything we do at SWAP N MEET.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl border border-border p-6 text-center card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
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
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="text-muted-foreground mb-6">
                Be part of something bigger. Start exchanging value with people who share your values.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/signup" className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
