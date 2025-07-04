import RSVPForm from "@/components/rsvp-form";

export default function RSVPPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-md mx-auto">
          <RSVPForm />
        </div>
      </div>
    </div>
  );
}
