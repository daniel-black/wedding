import { Polaroid } from "@/components/polaroid";

export default function RSVPPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-left">RSVP</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-left">
            Please let us know if you'll be joining us for our special day.
          </p>
          <div className="space-y-6">
            <div className="bg-red-400 w-full h-[20px]"></div>
            <Polaroid />
          </div>
        </div>
      </div>
    </div>
  );
}
