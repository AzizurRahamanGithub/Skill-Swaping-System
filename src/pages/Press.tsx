import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Newspaper, 
  Download, 
  ExternalLink, 
  Mail,
  Calendar,
  ArrowRight,
  FileText,
  Image,
  Video
} from "lucide-react";

const pressReleases = [
  {
    id: "1",
    title: "SwapSkill Raises $15M Series A to Expand Global Skill-Sharing Platform",
    date: "December 15, 2024",
    category: "Funding",
    excerpt: "The funding will accelerate product development and expand our presence in new markets across Europe and Asia."
  },
  {
    id: "2",
    title: "SwapSkill Surpasses 500,000 Users, Facilitating Over 1 Million Skill Swaps",
    date: "November 28, 2024",
    category: "Milestone",
    excerpt: "The platform has seen 300% growth in the past year as more people embrace skill-based bartering."
  },
  {
    id: "3",
    title: "SwapSkill Launches Mobile App for iOS and Android",
    date: "October 10, 2024",
    category: "Product",
    excerpt: "Users can now swap skills on-the-go with our new mobile experience, featuring real-time messaging and notifications."
  },
  {
    id: "4",
    title: "SwapSkill Partners with Top Universities for Student Skill Exchange Program",
    date: "September 5, 2024",
    category: "Partnership",
    excerpt: "Students can now access peer-to-peer learning through our new educational partnership initiative."
  }
];

const mediaAssets = [
  {
    title: "Brand Guidelines",
    description: "Logo usage, colors, and typography",
    icon: <FileText className="h-6 w-6" />,
    type: "PDF"
  },
  {
    title: "Logo Package",
    description: "SVG, PNG, and EPS formats",
    icon: <Image className="h-6 w-6" />,
    type: "ZIP"
  },
  {
    title: "Product Screenshots",
    description: "High-resolution app screenshots",
    icon: <Image className="h-6 w-6" />,
    type: "ZIP"
  },
  {
    title: "Founder Photos",
    description: "Professional team headshots",
    icon: <Image className="h-6 w-6" />,
    type: "ZIP"
  },
  {
    title: "Company Overview",
    description: "Fact sheet and key statistics",
    icon: <FileText className="h-6 w-6" />,
    type: "PDF"
  },
  {
    title: "Product Demo Video",
    description: "2-minute platform walkthrough",
    icon: <Video className="h-6 w-6" />,
    type: "MP4"
  }
];

const newsFeatures = [
  {
    outlet: "TechCrunch",
    title: "SwapSkill is reinventing how people exchange services",
    date: "Dec 2024",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop"
  },
  {
    outlet: "Forbes",
    title: "The Rise of Skill-Based Bartering Platforms",
    date: "Nov 2024",
    logo: "https://images.unsplash.com/photo-1611162616305-c69b3037c7bb?w=100&h=100&fit=crop"
  },
  {
    outlet: "The Verge",
    title: "How SwapSkill is building the LinkedIn of services",
    date: "Oct 2024",
    logo: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=100&h=100&fit=crop"
  },
  {
    outlet: "Wired",
    title: "The future of work is trading skills, not money",
    date: "Sep 2024",
    logo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=100&h=100&fit=crop"
  }
];

const stats = [
  { value: "500K+", label: "Active Users" },
  { value: "1M+", label: "Swaps Completed" },
  { value: "150+", label: "Countries" },
  { value: "50K+", label: "Skills Listed" }
];

const Press = () => {
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
                <Newspaper className="h-3 w-3 mr-1" />
                Press & Media
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                SwapSkill in the{" "}
                <span className="text-gradient">News</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Get the latest news, press releases, and media resources about SwapSkill 
                and our mission to transform how people exchange services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Press Team
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Press Kit
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured In */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured In</h2>
              <p className="text-muted-foreground">
                SwapSkill has been featured in leading publications worldwide
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {newsFeatures.map((feature, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <Newspaper className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{feature.outlet}</p>
                        <p className="text-xs text-muted-foreground">{feature.date}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors line-clamp-2">
                      "{feature.title}"
                    </p>
                    <div className="flex items-center gap-1 mt-4 text-primary text-sm font-medium">
                      Read Article
                      <ExternalLink className="h-3 w-3" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Press Releases</h2>
              <p className="text-muted-foreground">
                Official announcements and company news
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {pressReleases.map((release) => (
                <Card 
                  key={release.id}
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {release.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {release.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          {release.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {release.excerpt}
                        </p>
                      </div>
                      <Button variant="ghost" className="gap-2 flex-shrink-0">
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Media Assets */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Media Assets</h2>
              <p className="text-muted-foreground">
                Download logos, screenshots, and other media resources
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {mediaAssets.map((asset, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        {asset.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{asset.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{asset.description}</p>
                        <Badge variant="secondary" className="text-xs">
                          {asset.type}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="icon" className="flex-shrink-0">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-none max-w-3xl mx-auto">
              <CardContent className="p-12 text-center">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Media Inquiries
                </h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  For press inquiries, interview requests, or additional information, 
                  please reach out to our press team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gap-2">
                    <Mail className="h-4 w-4" />
                    press@swapskill.com
                  </Button>
                  <Button size="lg" variant="outline">
                    Schedule an Interview
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Press;
