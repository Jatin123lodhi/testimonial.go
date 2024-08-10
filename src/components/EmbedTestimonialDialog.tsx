import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export function EmbedTestimonialDialog() {
  const { toast } = useToast();
  const handleCopy = () => {
    toast({
      description: "Code Copied !",
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Embed this testimonial to your website</DialogTitle>
          {/* <DialogDescription>
          Embed this testimonial to your website
          </DialogDescription> */}
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              defaultValue={`<iframe width="400px" height="225px" src="https://embed-v2.testimonial.to/v/d15ca425-d7d9-4266-8239-e124736120cc" frameborder="0" scrolling="no" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="max-width: 100%;"></iframe>`}
              readOnly
            />
          </div>
          <Button onClick={handleCopy} type="submit" size="sm" className="px-3">
            <span className="sr-only">Copy </span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
