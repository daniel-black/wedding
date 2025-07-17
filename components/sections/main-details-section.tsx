import { EngagementBackground } from "../engagement-background";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export function MainDetailsSection() {
  return (
    <section className="relative w-full min-h-screen h-screen overflow-hidden">
      <EngagementBackground />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="tracking-tighter font-medium text-center text-primary-foreground text-3xl md:text-5xl lg:text-6xl px-4 select-none leading-tight text-balance drop-shadow-2xl">
            Details
          </h1>
          <p className="text-xl font-medium md:text-2xl text-center drop-shadow text-primary-foreground/90 max-w-3xl mx-auto">
            Join us for our small intimate wedding in our home here in Denver
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* When */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <Badge variant="secondary" className="mb-4 text-sm font-medium">
                  WHEN
                </Badge>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Friday, May 29th, 2026
                </h3>
                <p className="text-gray-600">
                  Save the date for our special day
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Where */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <Badge variant="secondary" className="mb-4 text-sm font-medium">
                  WHERE
                </Badge>
                <div className="space-y-6">
                  {/* Ceremony */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Ceremony
                    </h4>
                    <p className="text-lg font-medium text-gray-800 mb-1">
                      Denver Botanic Gardens
                    </p>
                    <p className="text-gray-600 text-sm">
                      1007 York St, Denver, CO 80206
                    </p>
                  </div>
                  {/* Reception */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Dinner & Reception
                    </h4>
                    <p className="text-lg font-medium text-gray-800 mb-1">
                      The Wright Room
                    </p>
                    <p className="text-gray-600 text-sm">
                      535 16th St Mall #240, Denver, CO 80202
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-primary-foreground/90 drop-shadow max-w-2xl mx-auto">
            We can't wait to celebrate this beautiful moment with our closest
            family and friends
          </p>
        </div>
      </div>
    </section>
  );
}
