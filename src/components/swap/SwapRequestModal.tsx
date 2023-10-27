import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRightLeft, Send, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SwapRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetUser: {
    name: string;
    avatar: string;
    offerings: { title: string; category: string }[];
    seeking: { title: string; category: string }[];
  };
}

// Sample user's offerings (would come from auth context)
const myOfferings = [
  { title: "Logo & Brand Identity Design", category: "Design & Creative" },
  { title: "Social Media Graphics", category: "Marketing" },
  { title: "Print Design", category: "Design & Creative" },
];

const SwapRequestModal = ({ isOpen, onClose, targetUser }: SwapRequestModalProps) => {
  const { toast } = useToast();
  const [selectedOffering, setSelectedOffering] = useState("");
  const [selectedSeeking, setSelectedSeeking] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedOffering || !selectedSeeking) {
      toast({
        title: "Please select services",
        description: "Choose what you'll offer and what you want in return.",
        variant: "destructive",
      });
      return;
    }

    // Would send request to database here
    toast({
      title: "Swap request sent!",
      description: `Your request has been sent to ${targetUser.name}.`,
    });
    
    onClose();
    setSelectedOffering("");
    setSelectedSeeking("");
    setMessage("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ArrowRightLeft className="w-5 h-5 text-primary" />
            Propose a Swap
          </DialogTitle>
          <DialogDescription>
            Send a swap request to {targetUser.name}. Choose what you'll offer and what you'd like in return.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Target User Info */}
          <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
            <div className="w-12 h-12 rounded-full bg-gradient-trust flex items-center justify-center text-2xl">
              {targetUser.avatar}
            </div>
            <div>
              <p className="font-semibold">{targetUser.name}</p>
              <p className="text-sm text-muted-foreground">
                {targetUser.offerings.length} services available
              </p>
            </div>
          </div>

          {/* What You'll Offer */}
          <div className="space-y-3">
            <Label>What will you offer?</Label>
            <div className="space-y-2">
              {myOfferings.map((offering, index) => (
                <label
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                    selectedOffering === offering.title
                      ? "border-primary bg-primary-light"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="offering"
                    value={offering.title}
                    checked={selectedOffering === offering.title}
                    onChange={(e) => setSelectedOffering(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedOffering === offering.title
                      ? "border-primary bg-primary"
                      : "border-muted-foreground"
                  }`}>
                    {selectedOffering === offering.title && (
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{offering.title}</p>
                    <p className="text-xs text-muted-foreground">{offering.category}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Swap Icon */}
          <div className="flex justify-center">
            <div className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center">
              <ArrowRightLeft className="w-5 h-5 text-secondary" />
            </div>
          </div>

          {/* What You Want */}
          <div className="space-y-3">
            <Label>What do you want in return?</Label>
            <div className="space-y-2">
              {targetUser.offerings.map((offering, index) => (
                <label
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                    selectedSeeking === offering.title
                      ? "border-secondary bg-secondary-light"
                      : "border-border hover:border-secondary/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="seeking"
                    value={offering.title}
                    checked={selectedSeeking === offering.title}
                    onChange={(e) => setSelectedSeeking(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    selectedSeeking === offering.title
                      ? "border-secondary bg-secondary"
                      : "border-muted-foreground"
                  }`}>
                    {selectedSeeking === offering.title && (
                      <div className="w-2 h-2 rounded-full bg-secondary-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{offering.title}</p>
                    <p className="text-xs text-muted-foreground">{offering.category}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Add a message (optional)</Label>
            <Textarea
              id="message"
              placeholder="Introduce yourself and explain why you'd like to swap..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" variant="hero" className="flex-1">
              <Send className="w-4 h-4 mr-2" />
              Send Request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SwapRequestModal;
