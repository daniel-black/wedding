export default function ThingsToDoPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-left">Things To Do</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-left">
            Discover local attractions and activities to enjoy during your
            visit.
          </p>
          <div className="space-y-6">
            {/* Things to do content will go here */}
          </div>
        </div>
      </div>
    </div>
  );
}
