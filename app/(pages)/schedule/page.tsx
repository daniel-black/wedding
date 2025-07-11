export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-left">Schedule</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-left">
            Here&apos;s what to expect on our wedding day timeline.
          </p>

          {/* Pre-Wedding Recommendations */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Pre-Wedding
            </h2>
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">📅</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Thursday, May 28th & Earlier
                  </h3>
                  <p className="text-muted-foreground">
                    We recommend our out-of-town guests arrive on Thursday or
                    earlier that week and make a little vacation out of the
                    trip. Denver has so much to offer!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Wedding Day Timeline */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary">
              Friday, May 29th, 2026
            </h2>

            <div className="space-y-6">
              {/* Arrival */}
              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold font-mono">
                      4:30
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      Guest Arrival
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Please arrive at the{" "}
                      <span className="font-medium">
                        Denver Botanic Gardens
                      </span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We&apos;ll mingle and get settled before the ceremony
                      begins
                    </p>
                  </div>
                </div>
              </div>

              {/* Ceremony */}
              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold font-mono">
                      5:00
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      Wedding Ceremony
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      The main event begins at the Denver Botanic Gardens
                    </p>
                  </div>
                </div>
              </div>

              {/* First Cocktail Hour */}
              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold font-mono">
                      5:30
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      Cocktail Hour
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Celebrate with drinks and appetizers in the beautiful
                      garden setting
                    </p>
                  </div>
                </div>
              </div>

              {/* Travel to Second Location */}
              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold font-mono">
                      6:30
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      Travel to The Wright Room
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      We&apos;ll move to our reception venue for dinner and
                      dancing
                    </p>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">
                        Transportation Options:
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>
                          • <span className="font-medium">Rideshare:</span> Uber
                          or Lyft (recommended)
                        </li>
                        <li>
                          • <span className="font-medium">Parking:</span> Denver
                          Pavilions parking lot
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Cocktail Hour */}
              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">7:00</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      Cocktail Hour Continues
                    </h3>
                    <p className="text-muted-foreground">
                      More mingling and celebration at The Wright Room
                    </p>
                  </div>
                </div>
              </div>

              {/* Dinner and Dancing */}
              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">7:30</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">
                      Dinner & Dancing
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Enjoy dinner followed by dancing and celebration
                    </p>
                    <p className="text-sm text-muted-foreground">
                      The celebration continues until 11:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* End Time */}
              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">11:00</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">Farewell</h3>
                    <p className="text-muted-foreground">
                      Thank you for celebrating with us! We hope you had a
                      wonderful time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Venue Information */}
          <div className="bg-muted/30 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Venue Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Denver Botanic Gardens</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Ceremony Location
                </p>
                <p className="text-sm text-muted-foreground">
                  A beautiful garden setting for our ceremony and first cocktail
                  hour
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">The Wright Room</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Reception Location
                </p>
                <p className="text-sm text-muted-foreground">
                  Our reception venue for dinner, dancing, and celebration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
