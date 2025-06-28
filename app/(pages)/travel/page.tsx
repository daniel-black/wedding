import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TravelPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-left">Travel</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-left">
            For those of you coming from out of town, we&apos;re excited to
            welcome you to Denver! Whether you crossed an ocean, hopped in a
            car, or crossed the sidewalk, here&apos;s everything you need to
            make your stay easy and enjoyable.
          </p>

          <div className="space-y-12">
            {/* Getting to Denver */}
            <section id="getting-to-denver" className="scroll-mt-16">
              <h2 className="text-2xl font-semibold mb-6 text-left">
                <a
                  href="#getting-to-denver"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Getting to Denver
                </a>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="default">✈️</Badge>
                      <CardTitle>By Air</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-3">
                      Denver International Airport (DEN) is the main airport
                      serving the city.
                    </CardDescription>
                    <ul className="space-y-2 text-sm mb-4">
                      <li>
                        • Major airlines: United, Southwest, American, Delta
                      </li>
                      <li>• Direct flights from most major US cities</li>
                      <li>• International connections available</li>
                    </ul>
                    <Button variant="outline" size="sm">
                      <a
                        href="https://www.flydenver.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit DEN Website
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">🚗</Badge>
                      <CardTitle>By Car</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-3">
                      Denver is easily accessible by major highways.
                    </CardDescription>
                    <ul className="space-y-2 text-sm mb-4">
                      <li>• I-25: North-South through Colorado</li>
                      <li>• I-70: East-West through the Rockies</li>
                      <li>• I-76: Northeast to Nebraska</li>
                    </ul>
                    <Button variant="outline" size="sm">
                      <a
                        href="https://www.cotrip.org"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Check Road Conditions
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            {/* Accommodation */}
            <section id="where-to-stay" className="scroll-mt-16">
              <h2 className="text-2xl font-semibold mb-6 text-left">
                <a
                  href="#where-to-stay"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Where to Stay
                </a>
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="default">🏨</Badge>
                      <CardTitle>Hotel Block</CardTitle>
                    </div>
                    <CardDescription>
                      We&apos;ve reserved a block of rooms at the following
                      hotels with special rates for our wedding guests.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-medium">The Brown Palace Hotel</h4>
                        <p className="text-sm text-muted-foreground">
                          321 17th Street, Denver
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Rate: $199/night
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Code: WEDDING2024
                        </p>
                      </div>
                      <div className="border-l-4 border-secondary pl-4">
                        <h4 className="font-medium">The Crawford Hotel</h4>
                        <p className="text-sm text-muted-foreground">
                          1701 Wynkoop Street, Denver
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Rate: $179/night
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Code: WEDDING2024
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <a href="tel:+1-303-297-3111">Call Brown Palace</a>
                      </Button>
                      <Button variant="outline" size="sm">
                        <a href="tel:+1-720-460-3700">Call Crawford</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">🏠</Badge>
                      <CardTitle>Alternative Options</CardTitle>
                    </div>
                    <CardDescription>
                      Denver has many great accommodation options in different
                      neighborhoods.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h4 className="font-medium">Downtown</h4>
                        <p className="text-muted-foreground">
                          Close to venues and nightlife
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">RiNo District</h4>
                        <p className="text-muted-foreground">
                          Artsy neighborhood with breweries
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Cherry Creek</h4>
                        <p className="text-muted-foreground">
                          Upscale shopping and dining
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            {/* Transportation */}
            <section id="getting-around" className="scroll-mt-16">
              <h2 className="text-2xl font-semibold mb-6 text-left">
                <a
                  href="#getting-around"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Getting Around
                </a>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="default">🚇</Badge>
                      <CardTitle>Public Transit</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-3">
                      Denver has an excellent public transportation system.
                    </CardDescription>
                    <ul className="space-y-2 text-sm mb-4">
                      <li>• Light rail (RTD) connects airport to downtown</li>
                      <li>• Bus system covers the entire metro area</li>
                      <li>• $3 day pass for unlimited rides</li>
                    </ul>
                    <Button variant="outline" size="sm">
                      <a
                        href="https://www.rtd-denver.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        RTD Website
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">🚕</Badge>
                      <CardTitle>Rideshare & Taxis</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-3">
                      Uber and Lyft are widely available throughout Denver.
                    </CardDescription>
                    <ul className="space-y-2 text-sm mb-4">
                      <li>• Uber and Lyft operate 24/7</li>
                      <li>• Airport to downtown: ~$35-45</li>
                      <li>• Downtown rides: ~$8-15</li>
                    </ul>
                    <Button variant="outline" size="sm">
                      <a
                        href="https://www.uber.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Uber
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            {/* Weather & Packing */}
            <section id="weather-packing" className="scroll-mt-16">
              <h2 className="text-2xl font-semibold mb-6 text-left">
                <a
                  href="#weather-packing"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Weather & What to Pack
                </a>
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="default">🌤️</Badge>
                        <h3 className="text-lg font-medium">Denver Weather</h3>
                      </div>
                      <p className="text-muted-foreground mb-3">
                        Denver has a semi-arid climate with 300+ days of
                        sunshine annually.
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li>• Summers: Warm days, cool nights</li>
                        <li>• Low humidity year-round</li>
                        <li>• Altitude: 5,280 feet (drink water!)</li>
                        <li>• UV index is high - bring sunscreen</li>
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">👕</Badge>
                        <h3 className="text-lg font-medium">Packing Tips</h3>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li>• Layers for temperature changes</li>
                        <li>• Comfortable walking shoes</li>
                        <li>• Sunglasses and sunscreen</li>
                        <li>• Reusable water bottle</li>
                        <li>• Light jacket for evenings</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Contact Information */}
            <section className="text-center">
              <Card className="bg-muted/30">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-3">
                    Questions About Travel?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We&apos;re here to help make your trip to Denver as smooth
                    as possible!
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button variant="outline">
                      <a href="mailto:travel@ourwedding.com">Email Us</a>
                    </Button>
                    <Button variant="outline">
                      <a href="tel:+1-555-123-4567">Call Us</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
