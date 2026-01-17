import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Quote, 
  ArrowRight, 
  MapPin,
  Calendar,
  Heart,
  Share2
} from "lucide-react";

const featuredStory = {
  id: "featured",
  title: "From Coding Lessons to a New Career Path",
  excerpt: "How Sarah's web development skills helped Marcus transition from marketing to tech, while she gained invaluable business strategy knowledge.",
  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
  user1: {
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    skill: "Web Development",
    location: "San Francisco, CA"
  },
  user2: {
    name: "Marcus Johnson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    skill: "Business Strategy",
    location: "Austin, TX"
  },
  quote: "SwapSkill didn't just help me learn to code—it connected me with someone who became a mentor and friend. The exchange of skills felt natural and incredibly valuable.",
  date: "December 2024",
  category: "Career Change"
};

const successStories = [
  {
    id: "1",
    title: "Language Exchange Leads to Lifelong Friendship",
    excerpt: "Emily learned Japanese for her dream trip to Tokyo, while helping Yuki master English for her business expansion.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    user1: { name: "Emily Rodriguez", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", skill: "English Teaching" },
    user2: { name: "Yuki Tanaka", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop", skill: "Japanese Lessons" },
    quote: "We still video chat every week, even after completing our language goals!",
    category: "Language",
    likes: 234
  },
  {
    id: "2",
    title: "Fitness Training for Photography Skills",
    excerpt: "David got in the best shape of his life while Lisa built an amazing portfolio for her photography business.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    user1: { name: "David Kim", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", skill: "Personal Training" },
    user2: { name: "Lisa Park", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop", skill: "Photography" },
    quote: "The accountability of our swap kept us both motivated to deliver our best work.",
    category: "Fitness",
    likes: 189
  },
  {
    id: "3",
    title: "Music Lessons Meet Graphic Design",
    excerpt: "Alex designed album artwork and branding while Jordan taught guitar—both launched their creative passions.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    user1: { name: "Alex Thompson", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop", skill: "Graphic Design" },
    user2: { name: "Jordan Lee", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop", skill: "Guitar Lessons" },
    quote: "I never thought I'd be designing for a real musician. This swap opened new doors for both of us.",
    category: "Creative",
    likes: 156
  },
  {
    id: "4",
    title: "Cooking Classes for Home Repairs",
    excerpt: "Maria learned to fix everything around the house while Tom discovered his passion for Italian cuisine.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop",
    user1: { name: "Maria Santos", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop", skill: "Italian Cooking" },
    user2: { name: "Tom Wilson", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop", skill: "Home Repairs" },
    quote: "Now I can make pasta from scratch AND fix a leaky faucet. Best trade ever!",
    category: "Lifestyle",
    likes: 203
  },
  {
    id: "5",
    title: "Yoga Instruction for Financial Planning",
    excerpt: "Rachel found inner peace while helping Michael understand investments and retirement planning.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
    user1: { name: "Rachel Green", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop", skill: "Yoga Teaching" },
    user2: { name: "Michael Brown", avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop", skill: "Financial Planning" },
    quote: "Balancing my finances and my chakras—who knew they'd go together so well?",
    category: "Wellness",
    likes: 178
  },
  {
    id: "6",
    title: "Marketing Strategy for Art Lessons",
    excerpt: "Chris learned watercolor painting while helping Anna grow her art studio's online presence.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=400&fit=crop",
    user1: { name: "Chris Martinez", avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop", skill: "Digital Marketing" },
    user2: { name: "Anna White", avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop", skill: "Art Teaching" },
    quote: "My Instagram following tripled, and Chris's paintings are now gallery-worthy!",
    category: "Business",
    likes: 145
  }
];

const categories = ["All", "Career Change", "Language", "Fitness", "Creative", "Lifestyle", "Wellness", "Business"];

const SuccessStories = () => {
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
                <Star className="h-3 w-3 mr-1 fill-current" />
                Real Stories, Real Impact
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Success{" "}
                <span className="text-gradient">Stories</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover how SwapSkill members are transforming their lives through 
                skill-sharing. These are real stories from our community.
              </p>
              <Button size="lg" className="gap-2">
                Share Your Story
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={featuredStory.image} 
                    alt={featuredStory.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                  <Badge className="absolute top-4 left-4 bg-primary">
                    Featured Story
                  </Badge>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">
                    {featuredStory.category}
                  </Badge>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {featuredStory.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredStory.excerpt}
                  </p>
                  
                  {/* Users */}
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-3">
                      <img 
                        src={featuredStory.user1.avatar} 
                        alt={featuredStory.user1.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                      />
                      <div>
                        <p className="font-medium text-foreground text-sm">{featuredStory.user1.name}</p>
                        <p className="text-xs text-muted-foreground">{featuredStory.user1.skill}</p>
                      </div>
                    </div>
                    <div className="text-2xl text-primary">⇄</div>
                    <div className="flex items-center gap-3">
                      <img 
                        src={featuredStory.user2.avatar} 
                        alt={featuredStory.user2.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-secondary"
                      />
                      <div>
                        <p className="font-medium text-foreground text-sm">{featuredStory.user2.name}</p>
                        <p className="text-xs text-muted-foreground">{featuredStory.user2.skill}</p>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative bg-muted/50 rounded-lg p-4 mb-6">
                    <Quote className="h-6 w-6 text-primary/30 absolute top-2 left-2" />
                    <p className="text-sm italic text-muted-foreground pl-6">
                      "{featuredStory.quote}"
                    </p>
                  </div>

                  <Button className="w-fit gap-2">
                    Read Full Story
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {successStories.map((story) => (
                <Card 
                  key={story.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-3 left-3" variant="secondary">
                      {story.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {story.excerpt}
                    </p>

                    {/* Users */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex -space-x-2">
                        <img 
                          src={story.user1.avatar} 
                          alt={story.user1.name}
                          className="w-8 h-8 rounded-full border-2 border-background object-cover"
                        />
                        <img 
                          src={story.user2.avatar} 
                          alt={story.user2.name}
                          className="w-8 h-8 rounded-full border-2 border-background object-cover"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {story.user1.name} & {story.user2.name}
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="text-xs italic text-muted-foreground mb-4 line-clamp-2">
                      "{story.quote}"
                    </p>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                        <Heart className="h-4 w-4" />
                        {story.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                        <Share2 className="h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="gap-2">
                Load More Stories
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-none max-w-3xl mx-auto">
              <CardContent className="p-12 text-center">
                <Star className="h-12 w-12 text-primary mx-auto mb-4 fill-primary/20" />
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Share Your Success Story
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Had an amazing swap experience? We'd love to feature your story 
                  and inspire others in our community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gap-2">
                    Submit Your Story
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Read More Stories
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

export default SuccessStories;
