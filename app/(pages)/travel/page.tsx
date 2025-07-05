import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mountain, Plane } from "lucide-react";
import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function TravelPage() {
  return (
    <div className="min-h-fit bg-background">
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-left">Travel</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-left">
            Whether you&apos;re coming from across town, out of state, or out of
            country we want to make sure you have everything you need for a
            smooth and enjoyable wedding weekend.
          </p>

          <div className="space-y-12">
            <section>
              <Tabs defaultValue="out-of-towners" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="out-of-towners">
                    <span>Out of Towners</span>
                    <Plane className="ml-2 h-4 w-4" />
                  </TabsTrigger>
                  <TabsTrigger value="colorado-folks">
                    <span>Colorado Folks</span>
                    <Mountain className="ml-2 h-4 w-4" />
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="colorado-folks">
                  <Card>
                    <CardHeader>
                      <CardTitle>Hey friends</CardTitle>
                      <CardDescription>
                        Not much to tell you guys, you know how to get around
                        and where to find us.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        {/* <h3 className="text-lg font-semibold mb-3">
                          Getting to the Wedding
                        </h3> */}
                        <p className="text-muted-foreground mb-4">
                          We strongly recommend using{" "}
                          <span className="font-semibold">Uber</span> or{" "}
                          <span className="font-semibold">Lyft</span> to get to
                          and from the wedding venues so you can fully enjoy the
                          celebration without worrying about driving home.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          <i>However</i>, if you prefer to drive there is
                          parking available at both the Denver Botanic Gardens
                          and the Wright Room.
                        </p>

                        <div className="space-y-6">
                          <h3 className="text-lg font-semibold">
                            Venue Parking
                          </h3>

                          <div className="grid lg:grid-cols-2 gap-6">
                            {/* Denver Botanic Gardens */}
                            <div className="bg-muted/30 rounded-lg p-4 space-y-3 border border-border/50">
                              <div>
                                <h4 className="font-medium">
                                  Denver Botanic Gardens
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  Ceremony & Cocktail Hour
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  1007 York Street, Denver, CO 80206
                                </p>
                                <Button
                                  variant="link"
                                  size="sm"
                                  className="p-0 h-auto"
                                >
                                  <a
                                    href="https://www.botanicgardens.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-blue-600 transition-colors"
                                  >
                                    Visit Website
                                  </a>
                                </Button>
                              </div>
                              <GoogleMapsEmbed
                                apiKey={
                                  process.env.GOOGLE_MAPS_EMBED_API_KEY ?? ""
                                }
                                height={250}
                                width="100%"
                                mode="place"
                                q="39.73163244562152,-104.95951183147558"
                                zoom="16"
                                maptype="roadmap"
                                style="border-radius: 8px;"
                              />
                            </div>

                            {/* The Wright Room */}
                            <div className="bg-muted/30 rounded-lg p-4 space-y-3 border border-border/50">
                              <div>
                                <h4 className="font-medium">The Wright Room</h4>
                                <p className="text-sm text-muted-foreground">
                                  Dinner & Reception
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  535 16th St Mall #240, Denver, CO 80202
                                </p>
                                <Button
                                  variant="link"
                                  size="sm"
                                  className="p-0 h-auto"
                                >
                                  <a
                                    href="https://denverpavilions.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-blue-600 transition-colors"
                                  >
                                    Visit Website
                                  </a>
                                </Button>
                              </div>
                              <GoogleMapsEmbed
                                apiKey={
                                  process.env.GOOGLE_MAPS_EMBED_API_KEY ?? ""
                                }
                                height={250}
                                width="100%"
                                mode="place"
                                q="Denver+Pavilions+Parking+Garage"
                                zoom="16"
                                maptype="roadmap"
                                style="border-radius: 8px;"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="out-of-towners">
                  <div className="space-y-6">
                    {/* Getting to Denver */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Getting to Denver</CardTitle>
                        <CardDescription>
                          Once you fly into Denver International Airport, you
                          have a few options for getting into the city.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium mb-2">
                              RTD Train to Union Station
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Inexpensive and uneventful option
                            </p>
                            <ul className="text-sm space-y-1 list-disc list-inside">
                              <li>Cost: $10</li>
                              <li>Duration: ~37 minutes</li>
                              <li>Runs every 15 minutes</li>
                              <li>Drops you in the heart of downtown</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">
                              Uber/Lyft to Downtown
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              More convenient but pricier option
                            </p>
                            <ul className="text-sm space-y-1 list-disc list-inside">
                              <li>Cost: $35-60</li>
                              <li>Duration: 25-40 minutes</li>
                              <li>Direct to your accommodation</li>
                              <li>Small talk with strangers</li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <a
                              href="https://www.rtd-denver.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              RTD Schedule
                            </a>
                          </Button>
                          <Button variant="outline" size="sm">
                            <a
                              href="https://www.flydenver.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              DEN Airport Info
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Where to Stay */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Where to Stay</CardTitle>
                        <CardDescription>
                          Denver has great accommodation options in various
                          neighborhoods
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-4">
                            Neighborhoods to Consider
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium mb-2">Highland</h4>
                              <p className="text-sm text-muted-foreground mb-2">
                                Trendy neighborhood with great restaurants and
                                views of downtown.
                              </p>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">
                                Downtown/LoDo
                              </h4>
                              <p className="text-sm text-muted-foreground mb-2">
                                Close to Union Station, restaurants, and
                                nightlife. Walking distance to many attractions.
                              </p>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">
                                RiNo (River North)
                              </h4>
                              <p className="text-sm text-muted-foreground mb-2">
                                Artsy, industrial neighborhood with breweries,
                                restaurants, and street art.
                              </p>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Cherry Creek</h4>
                              <p className="text-sm text-muted-foreground mb-2">
                                Upscale shopping district with boutique hotels
                                and fine dining.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4">
                            Accommodation Options
                          </h3>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium mb-2">Hotels</h4>
                              <p className="text-sm text-muted-foreground mb-2">
                                There are a lot of great options downtown and in
                                close proximity to both of the venue locations.
                              </p>
                              <ul className="text-sm space-y-1 list-disc list-inside">
                                <li>
                                  Downtown: The Crawford Hotel, The Brown
                                  Palace, The Oxford, Le Méridien
                                </li>
                                <li>
                                  RiNo: The Source Hotel, The Ramble Hotel
                                </li>
                                <li>Cherry Creek: The Jacquard, Halcyon</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">
                                Airbnb & VRBO
                              </h4>
                              <p className="text-sm text-muted-foreground mb-2">
                                Great for groups or longer stays. Many options
                                in residential neighborhoods.
                              </p>
                              <ul className="text-sm space-y-1 list-disc list-inside">
                                <li>
                                  Capitol Hill: Historic homes, walkable to
                                  downtown
                                </li>
                                <li>
                                  Washington Park: Residential area with parks
                                  and restaurants
                                </li>
                                <li>
                                  Baker: Hip neighborhood with local shops and
                                  cafes
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Getting Around */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Getting Around Denver</CardTitle>
                        <CardDescription>
                          Denver is relatively easy to navigate with multiple
                          transportation options
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium mb-2">
                              Rideshare & Taxis
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Uber and Lyft are widely available
                            </p>
                            <ul className="text-sm space-y-1 list-disc list-inside">
                              <li>Downtown rides: $8-15</li>
                              <li>Cross-town rides: $15-25</li>
                              <li>Available 24/7</li>
                              <li>Most convenient option</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">
                              Public Transit (RTD)
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              Light rail and bus system covering the metro area
                            </p>
                            <ul className="text-sm space-y-1 list-disc list-inside">
                              <li>Day pass: $6</li>
                              <li>Single ride: $3</li>
                              <li>Light rail connects major areas</li>
                              <li>Buses fill in the gaps</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Walking & Biking</h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            Denver is very walkable in many areas, especially
                            downtown and LoDo.
                          </p>
                          <ul className="text-sm space-y-1 list-disc list-inside">
                            <li>Downtown is compact and pedestrian-friendly</li>
                            <li>Bike share available</li>
                            <li>Many attractions within walking distance</li>
                          </ul>
                        </div>
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

                    {/* Weather & Packing */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Weather & What to Pack</CardTitle>
                        <CardDescription>
                          What to expect from Denver&apos;s climate and at the
                          end of May
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant="default">🌤️</Badge>
                              <h3 className="text-lg font-medium">
                                Denver Weather
                              </h3>
                            </div>
                            <p className="text-muted-foreground mb-3">
                              Expect mild, spring-like weather.
                            </p>
                            <ul className="space-y-2 text-sm list-disc list-inside">
                              <li>Warm days, cooler nights.</li>
                              <li>UV index is high - bring sunscreen</li>
                              <li>Altitude: 5,280 feet (drink water!)</li>
                              <li>Low humidity year-round</li>
                            </ul>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant="secondary">👕</Badge>
                              <h3 className="text-lg font-medium">
                                Packing Tips
                              </h3>
                            </div>
                            <ul className="space-y-2 text-sm list-disc list-inside">
                              <li>Layers for temperature changes</li>
                              <li>Comfortable walking shoes</li>
                              <li>Sunglasses and sunscreen</li>
                              <li>Light jacket for evenings</li>
                              <li>Water bottle</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
