import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-left">Schedule</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-left">
            Here&apos;s what to expect for our wedding timeline.
          </p>

          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Pre-Wedding</CardTitle>
                <CardDescription>
                  Thursday, May 28th &amp; Earlier
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We recommend our out-of-town guests arrive on Thursday or
                  earlier that week and make a little vacation out of the trip.
                  We love our home and we want you to enjoy everything Colorado
                  has to offer.
                </p>
                <p>
                  For recommendations on where to stay and how to get around,
                  visit our{" "}
                  <Link
                    href="/travel"
                    className="underline text-primary hover:text-primary/80"
                  >
                    travel page
                  </Link>{" "}
                  and explore our curated list of local attractions on the{" "}
                  <Link
                    href="/things-to-do"
                    className="underline text-primary hover:text-primary/80"
                  >
                    things to do page
                  </Link>
                  . We hope you make the most of your time in Colorado!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Wedding Day Timeline */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Wedding Day Timeline</CardTitle>
                <CardDescription>Friday, May 29th, 2026</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Badge variant="secondary" className="font-mono">
                        4:30
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        Guest Arrival
                      </h3>
                      <p className="text-muted-foreground mb-1">
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

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Badge variant="secondary" className="font-mono">
                        5:00
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        Wedding Ceremony
                      </h3>
                      <p className="text-muted-foreground">
                        The main event begins at the Denver Botanic Gardens
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Badge variant="secondary" className="font-mono">
                        5:30
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        Cocktail Hour
                      </h3>
                      <p className="text-muted-foreground">
                        Celebrate with drinks and appetizers in the garden
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Badge variant="secondary" className="font-mono">
                        6:30
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        Travel to The Wright Room
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        We&apos;ll move to our reception venue for dinner and
                        dancing
                      </p>
                      <div className="bg-muted/50 rounded-lg p-3">
                        <h4 className="font-medium mb-1 text-sm">
                          Transportation Options:
                        </h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                          <li>
                            <span className="font-medium">Rideshare:</span> Uber
                            or Lyft
                            <Badge
                              variant="outline"
                              className="ml-2 text-xs text-muted-foreground"
                            >
                              recommended
                            </Badge>
                          </li>
                          <li>
                            <span className="font-medium">Parking:</span> Denver
                            Pavilions parking lot
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Badge variant="secondary" className="font-mono">
                        7:00
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        Cocktail Hour Continues
                      </h3>
                      <p className="text-muted-foreground">
                        More mingling and celebration at The Wright Room
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Badge variant="secondary" className="font-mono">
                        7:30
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        Dinner & Dancing
                      </h3>
                      <p className="text-muted-foreground mb-1">
                        Enjoy dinner followed by dancing and celebration
                      </p>
                      <p className="text-sm text-muted-foreground">
                        The celebration continues until 11:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Badge variant="secondary" className="font-mono">
                        11:00
                      </Badge>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">Goodnight</h3>
                      <p className="text-muted-foreground">
                        Thank you for celebrating with us! We hope you had a
                        wonderful time.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Venue Information */}
          <div className="bg-muted/30 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Venue Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Denver Botanic Gardens</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  1007 York St, Denver, CO 80206
                </p>
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
                  535 16th St Mall #240, Denver, CO 80202
                </p>
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
