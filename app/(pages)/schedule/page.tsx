export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-left">Schedule</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-left">
            Here's what to expect on our wedding day timeline.
          </p>
          <div className="space-y-6">{/* Schedule content will go here */}</div>
        </div>
      </div>
    </div>
  );
}
