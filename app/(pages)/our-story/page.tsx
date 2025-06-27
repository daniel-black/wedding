import { Timeline } from "@/components/timeline";

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-pink-50">
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-left">Our Story</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-left">
            Learn about our journey together and how we came to this special
            day.
          </p>
          <Timeline />
        </div>
      </div>
    </div>
  );
}
