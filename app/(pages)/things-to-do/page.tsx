import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    title: "Explore Tennyson Street",
    description:
      "Take a walk down Tennyson Street and check out the local shops and restaurants. We had our first date at a coffee shop / bookstore on Tennyson and 43rd. Sadly, the place is no longer open but there are still plenty of great spots to check out.",
    categories: ["Shopping", "Food"],
  },
  {
    title: "Ice Cream at Little Man's",
    description:
      "If you're on the north side of town or around the Highlands you should stop by Little Man's for some ice cream.",
    categories: ["Food"],
  },
  {
    title: "Breakfast at Lucille's",
    description:
      "This is one of Steph and I's favorite breakfast spots. We like the Eggs Benedict and the beignets. There are a couple of locations around Denver so check one out if you're in the area.",
    categories: ["Food"],
  },
  {
    title: "Pearl Street in Boulder",
    description:
      "Experience the vibrant energy of Boulder's famous pedestrian mall. Enjoy street performers, unique shops, and plenty of dining options.",
    categories: ["Shopping", "Entertainment", "Food"],
  },
  {
    title: "Flatirons Hike",
    description:
      "Hike the Flatirons for some of the best views around Boulder. It's a classic spot if you want to get outside and enjoy the mountains without having to drive too far.",
    categories: ["Hiking"],
  },
  {
    title: "Washington Park",
    description:
      "Relax in one of Denver's most beautiful parks. Enjoy walking paths, gardens, and plenty of space to unwind and enjoy the outdoors.",
    categories: ["Outdoor Activities"],
  },
  {
    title: "Tony P's Pizza",
    description:
      "Denver has good pizza. Tony P's is one of our favorites. Go get you a slice or six.",
    categories: ["Food"],
  },
  {
    title: "Denver Botanic Gardens",
    description:
      "We're getting married here! On the day of the wedding (May 29th, 2026) all of our guests will have full day access to the gardens for freeso we encourage you to go check it out.",
    categories: ["Outdoor Activities"],
  },
  {
    title: "Happy Camper & Avanti",
    description:
      "Both of these are great places to grab a bite and a drink and hang out. They are right across the street from each other in the Highlands. Avanti has one of the best views of the city and a variety of different food vendors. Happy Camper's pizza punches above its weight.",
    categories: ["Food", "Drinks"],
  },
  {
    title: "Cherry Creek Mall",
    description:
      "If you're looking to do some shopping or just want to wander around indoors for a bit, Cherry Creek Mall is the spot. There are tons of stores, from big brands to smaller shops, and plenty of places to grab a bite. It's a good place to spend a few hours, especially if the weather isn't cooperating.",
    categories: ["Shopping", "Food"],
  },
];

export default function ThingsToDoPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-left">Things To Do</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-left">
            Discover local attractions and activities to enjoy during your visit
            to Denver and Boulder.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        {activity.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {activity.categories.map((category, catIndex) => (
                          <Badge key={catIndex} variant="secondary">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
