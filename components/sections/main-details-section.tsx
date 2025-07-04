import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Heart, Gift } from "lucide-react";
import Link from "next/link";

export function MainDetailsSection() {
  return (
    <section className="w-full h-fit bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Wedding Details</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for a beautiful celebration of love in the heart of Denver's
            most stunning gardens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Date & Time */}
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-2">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Date & Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold mb-2">May 29, 2026</p>
              <p className="text-lg">5:00 PM</p>
              <p className="text-sm text-muted-foreground mt-2">
                Ceremony & Reception
              </p>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-2">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold mb-2">
                Denver Botanic Gardens
              </p>
              <p className="text-sm text-muted-foreground">
                1007 York Street
                <br />
                Denver, CO 80206
              </p>
              <Button variant="outline" size="sm" className="mt-4" asChild>
                <Link href="/travel" target="_blank">
                  Get Directions
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* RSVP */}
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>RSVP</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Please respond by April 15, 2026
              </p>
              <Button className="w-full" asChild>
                <Link href="/rsvp">RSVP Now</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Dress Code */}
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-2">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Dress Code</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold mb-2">Garden Party Attire</p>
              <p className="text-sm text-muted-foreground">
                Semi-formal to formal
                <br />
                Comfortable shoes recommended
              </p>
            </CardContent>
          </Card>

          {/* Schedule */}
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-2">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="font-semibold">5:00 PM</p>
                  <p className="text-muted-foreground">Ceremony</p>
                </div>
                <div>
                  <p className="font-semibold">5:30 PM</p>
                  <p className="text-muted-foreground">Cocktail Hour</p>
                </div>
                <div>
                  <p className="font-semibold">6:30 PM</p>
                  <p className="text-muted-foreground">Reception</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="mt-4" asChild>
                <Link href="/schedule">Full Schedule</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/rsvp">RSVP Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/things-to-do">Things to Do in Denver</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
