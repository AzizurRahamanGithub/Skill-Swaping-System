import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Send, 
  Search, 
  MoreVertical,
  Phone,
  Video,
  Info,
  CheckCheck,
  Clock
} from "lucide-react";
import { motion } from "framer-motion";

// Sample conversations
const conversations = [
  {
    id: "1",
    user: { name: "Mike Thompson", avatar: "👨‍💼", online: true },
    lastMessage: "Great! Let's finalize the swap details...",
    unread: 2,
    date: "10 min ago",
    swap: "Web Dev ⇄ Logo Design",
  },
  {
    id: "2",
    user: { name: "Carlos Garcia", avatar: "👨‍🎤", online: false },
    lastMessage: "Thanks for accepting! When can we start?",
    unread: 0,
    date: "2 hours ago",
    swap: "Music Production ⇄ Logo Design",
  },
  {
    id: "3",
    user: { name: "Lisa Chen", avatar: "👩‍🔬", online: true },
    lastMessage: "I'm interested in your brand identity services",
    unread: 1,
    date: "1 day ago",
    swap: "Photography ⇄ Brand Identity",
  },
  {
    id: "4",
    user: { name: "Emma Wilson", avatar: "👩‍🍳", online: false },
    lastMessage: "Sure, I can teach you Italian cooking!",
    unread: 0,
    date: "3 days ago",
    swap: "Social Media Graphics ⇄ Cooking Classes",
  },
];

// Sample messages for selected conversation
const sampleMessages = [
  {
    id: "1",
    sender: "other",
    text: "Hi! I saw your logo design services and I'm very interested. I can offer web development in exchange.",
    time: "10:30 AM",
    status: "read",
  },
  {
    id: "2",
    sender: "me",
    text: "Hello Mike! Thanks for reaching out. I'd love to hear more about what you need for your logo.",
    time: "10:32 AM",
    status: "read",
  },
  {
    id: "3",
    sender: "other",
    text: "I'm starting a new tech startup and need a modern, minimal logo. Something clean and professional.",
    time: "10:35 AM",
    status: "read",
  },
  {
    id: "4",
    sender: "me",
    text: "That sounds great! I specialize in minimal brand identities. What kind of web development work would you offer in exchange?",
    time: "10:38 AM",
    status: "read",
  },
  {
    id: "5",
    sender: "other",
    text: "I can build you a complete landing page with React, or help with any frontend development work you need.",
    time: "10:40 AM",
    status: "read",
  },
  {
    id: "6",
    sender: "other",
    text: "Great! Let's finalize the swap details. I'll send you my brand requirements document.",
    time: "10:42 AM",
    status: "delivered",
  },
];

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [messageInput, setMessageInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileListView, setIsMobileListView] = useState(true);

  const filteredConversations = conversations.filter(conv =>
    conv.user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageInput.trim()) {
      // Would add message to state here with database integration
      setMessageInput("");
    }
  };

  const handleSelectConversation = (conv: typeof conversations[0]) => {
    setSelectedConversation(conv);
    setIsMobileListView(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-0 h-screen">
        <div className="container mx-auto px-0 md:px-4 h-[calc(100vh-80px)]">
          <div className="bg-card rounded-none md:rounded-2xl border-0 md:border border-border h-full flex overflow-hidden">
            {/* Conversations List */}
            <div 
              className={`w-full md:w-80 lg:w-96 border-r border-border flex flex-col ${
                !isMobileListView ? "hidden md:flex" : "flex"
              }`}
            >
              {/* List Header */}
              <div className="p-4 border-b border-border">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Messages</h2>
                  <Link
                    to="/dashboard"
                    className="md:hidden text-muted-foreground hover:text-foreground"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </Link>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>

              {/* Conversations */}
              <div className="flex-1 overflow-y-auto">
                {filteredConversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => handleSelectConversation(conv)}
                    className={`w-full p-4 flex items-start gap-3 hover:bg-muted/50 transition-colors border-b border-border ${
                      selectedConversation?.id === conv.id ? "bg-muted/50" : ""
                    }`}
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-trust flex items-center justify-center text-2xl">
                        {conv.user.avatar}
                      </div>
                      {conv.user.online && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-center justify-between mb-1">
                        <p className={`font-semibold truncate ${conv.unread > 0 ? "text-foreground" : "text-foreground"}`}>
                          {conv.user.name}
                        </p>
                        <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">{conv.date}</span>
                      </div>
                      <p className="text-xs text-primary mb-1">{conv.swap}</p>
                      <div className="flex items-center justify-between">
                        <p className={`text-sm truncate ${conv.unread > 0 ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                          {conv.lastMessage}
                        </p>
                        {conv.unread > 0 && (
                          <span className="flex-shrink-0 ml-2 w-5 h-5 bg-secondary rounded-full text-[10px] flex items-center justify-center text-secondary-foreground font-bold">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div 
              className={`flex-1 flex flex-col ${
                isMobileListView ? "hidden md:flex" : "flex"
              }`}
            >
              {selectedConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsMobileListView(true)}
                        className="md:hidden text-muted-foreground hover:text-foreground"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-trust flex items-center justify-center text-xl">
                          {selectedConversation.user.avatar}
                        </div>
                        {selectedConversation.user.online && (
                          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-card" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold">{selectedConversation.user.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {selectedConversation.user.online ? "Online" : "Offline"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="hidden sm:flex">
                        <Phone className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hidden sm:flex">
                        <Video className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Info className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Swap Info Banner */}
                  <div className="px-4 py-2 bg-primary-light border-b border-primary/20">
                    <p className="text-sm text-center">
                      <span className="font-medium text-primary">Active Swap: </span>
                      <span className="text-muted-foreground">{selectedConversation.swap}</span>
                    </p>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {sampleMessages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] md:max-w-[70%] px-4 py-3 rounded-2xl ${
                            message.sender === "me"
                              ? "bg-primary text-primary-foreground rounded-br-md"
                              : "bg-muted rounded-bl-md"
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <div className={`flex items-center justify-end gap-1 mt-1 ${
                            message.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                          }`}>
                            <span className="text-[10px]">{message.time}</span>
                            {message.sender === "me" && (
                              message.status === "read" ? (
                                <CheckCheck className="w-3 h-3" />
                              ) : (
                                <Clock className="w-3 h-3" />
                              )
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <form onSubmit={handleSendMessage} className="p-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Input
                        placeholder="Type a message..."
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        className="flex-1"
                      />
                      <Button type="submit" variant="hero" size="icon" disabled={!messageInput.trim()}>
                        <Send className="w-5 h-5" />
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-center p-8">
                  <div>
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                      💬
                    </div>
                    <h3 className="font-semibold mb-2">Select a conversation</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose a conversation from the list to start messaging
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Messages;
