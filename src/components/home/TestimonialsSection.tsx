import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Freelance Designer",
      location: "Austin, TX",
      avatar: "👩‍🎨",
      rating: 5,
      text: "I traded my graphic design skills for home cleaning services. SWAP N MEET made it feel professional and dignified—not like a last resort.",
      swapped: "Logo Design → Home Cleaning",
    },
    {
      name: "Marcus Johnson",
      role: "Web Developer",
      location: "Brooklyn, NY",
      avatar: "👨‍💻",
      rating: 5,
      text: "Found amazing connections here. I've built three websites in exchange for photography, legal advice, and even car maintenance!",
      swapped: "Web Development → Multiple Services",
    },
    {
      name: "Elena Rodriguez",
      role: "Spanish Tutor",
      location: "Miami, FL",
      avatar: "👩‍🏫",
      rating: 5,
      text: "As a language tutor, I've helped dozens of people while getting everything from accounting help to fresh produce. Love this community!",
      swapped: "Language Lessons → Accounting",
    },
  ];

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary-glow text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hear from Our <span className="text-primary-glow">Community</span>
          </h2>
          <p className="text-background/70 text-lg">
            Real stories from real people who've discovered the power of fair exchange.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-background/5 border border-background/10 backdrop-blur-sm"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/30" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-background/90 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Swap Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary-glow text-xs font-medium mb-6">
                {testimonial.swapped}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-background">{testimonial.name}</p>
                  <p className="text-sm text-background/60">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
