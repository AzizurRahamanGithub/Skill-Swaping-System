import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Zap, 
  Globe,
  Coffee,
  Laptop,
  GraduationCap,
  ArrowRight,
  Building2
} from "lucide-react";

const benefits = [
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "Remote First",
    description: "Work from anywhere in the world with flexible hours"
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs"
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Learning Budget",
    description: "$2,000 annual budget for courses and conferences"
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Unlimited PTO",
    description: "Take the time you need to recharge and refresh"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Team Retreats",
    description: "Annual company retreats to connect in person"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Equity Package",
    description: "Share in our success with competitive equity"
  }
];

const openPositions = [
  {
    id: "1",
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-time",
    salary: "$120k - $180k"
  },
  {
    id: "2",
    title: "Product Designer",
    department: "Design",
    location: "Remote (US/Europe)",
    type: "Full-time",
    salary: "$100k - $140k"
  },
  {
    id: "3",
    title: "Community Manager",
    department: "Marketing",
    location: "Remote (Global)",
    type: "Full-time",
    salary: "$70k - $90k"
  },
  {
    id: "4",
    title: "Customer Success Lead",
    department: "Operations",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$80k - $110k"
  },
  {
    id: "5",
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "Remote (Global)",
    type: "Full-time",
    salary: "$90k - $130k"
  },
  {
    id: "6",
    title: "Mobile Developer (React Native)",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Contract",
    salary: "$100k - $150k"
  }
];

const values = [
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Community First",
    description: "We believe in the power of community and building genuine connections between people."
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Trust & Transparency",
    description: "We operate with radical transparency and build trust through honest communication."
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Move Fast & Learn",
    description: "We embrace experimentation, learn from failures, and iterate quickly."
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                <Briefcase className="h-3 w-3 mr-1" />
                We're Hiring
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Join Our Mission to{" "}
                <span className="text-gradient">Transform Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Help us build the future of skill-based bartering and create meaningful 
                connections between talented people around the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  View Open Positions
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn About Our Culture
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do and shape our culture
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-none shadow-lg bg-background">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Join SwapSkill?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer competitive benefits to help you do your best work
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Open Positions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find your next opportunity and help us shape the future
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {openPositions.map((position) => (
                <Card 
                  key={position.id}
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            <Building2 className="h-3 w-3 mr-1" />
                            {position.department}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {position.type}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {position.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {position.salary}
                          </span>
                        </div>
                      </div>
                      <Button className="gap-2 group-hover:gap-3 transition-all">
                        Apply Now
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-none">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Don't See the Right Role?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We're always looking for talented people. Send us your resume and 
                  we'll reach out when we have a role that matches your skills.
                </p>
                <Button size="lg" variant="outline" className="gap-2">
                  Send Your Resume
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
