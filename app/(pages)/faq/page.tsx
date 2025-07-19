import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import Link from "next/link";

const faqs: Array<{ question: string; answer: React.ReactNode }> = [
  {
    question: "What should I expect for weather?",
    answer: (
      <p>
        End of May in Denver is typically warm and sunny, but it can be
        unpredictable. We recommend coming prepared for a variety of weather.
        The greenhouse is a covered space and the surrounding garden has a
        decent bit of tree cover. Please check the{" "}
        <a
          href="https://www.accuweather.com/en/us/denver/80203/may-weather/347810?year=2026"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-primary hover:text-blue-600 transition-colors duration-75"
        >
          forecast
        </a>{" "}
        closer to the date.
      </p>
    ),
  },
  {
    question: "What is the dress code for the wedding?",
    answer: (
      <div>
        <p>
          Cocktail attire. Wear something colorful and bright for the garden.
          Please leave the plain black clothes at home.
        </p>
        <p>
          Check out this{" "}
          <a
            href="https://www.pinterest.com/castrillo1228/wedding/wedding-attire"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 text-primary hover:text-blue-600 transition-colors duration-75"
          >
            Pinterest board
          </a>{" "}
          for some inspiration.
        </p>
      </div>
    ),
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "Plus ones are only included if specifically noted on your invitation. If you have questions about your invitation, please reach out to us directly.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "Please arrive 30 minutes before the ceremony start time. This will give you time to find parking, get settled, and find your seat.",
  },
  {
    question: "Is there parking available at the Denver Botanic Gardens?",
    answer: (
      <div className="space-y-4">
        <p>
          Yes, there is free parking available at the gardens.{" "}
          <a
            href="https://www.botanicgardens.org/york-street/parking-transportation-accessibility-york-street"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 text-primary hover:text-blue-600 transition-colors duration-75"
          >
            Details{" "}
          </a>
        </p>
        <GoogleMapsEmbed
          apiKey={process.env.GOOGLE_MAPS_EMBED_API_KEY ?? ""}
          height={300}
          width="100%"
          mode="place"
          q="39.73163244562152,-104.95951183147558"
          zoom="16"
          maptype="roadmap"
          style="border-radius: 10px;"
        />
      </div>
    ),
  },
  {
    question:
      "How far away from the Denver Botanic Gardens is the reception and dinner venue?",
    answer: (
      <div className="space-y-2">
        <p>
          The Wright Room is a 10 to 15 minute drive from the gardens depending
          on traffic.
        </p>
        <p>
          We recommend hopping in an Uber or a Lyft but if you&apos;re feeling
          particularly adventurous you could grab a scooter and take a 22 minute
          joyride through the city.
        </p>
        <p>
          If you&apos;re driving, you can park in the{" "}
          <a
            href="https://denverpavilions.com/parking/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 text-primary hover:text-blue-600 transition-colors duration-75"
          >
            Denver Pavilions Parking Garage
          </a>{" "}
          by the 16th Street Mall to get to the Wright Room.
        </p>
        <GoogleMapsEmbed
          apiKey={process.env.GOOGLE_MAPS_EMBED_API_KEY ?? ""}
          height={300}
          width="100%"
          mode="place"
          q="Denver+Pavilions+Parking+Garage"
          zoom="16"
          maptype="roadmap"
          style="border-radius: 10px;"
        />
      </div>
    ),
  },
  {
    question: "What happens if it rains?",
    answer: (
      <p>
        We will all huddle in the greenhouse together. The dinner and reception
        venue is indoors so we will be alright.
      </p>
    ),
  },
  {
    question: "Can I take photos during the ceremony?",
    answer:
      "We kindly ask that you refrain from taking photos during the ceremony. Our professional photographer will capture all the special moments, and we'll be happy to share the photos with you afterward.",
  },
  {
    question: "What's the timeline for the day?",
    answer:
      "We recommend trickling into the garden at 4:30 PM. The ceremony will start at 5 PM and then will be followed by a cocktail hour in the garden. Then we will take the party to the Wright Room around 7:30 PM where we will have the dinner and reception until around 11 PM.",
  },
  {
    question: "Are there accommodations nearby?",
    answer: (
      <p>
        Yes! There&apos;s a lot of{" "}
        <a
          href="https://www.google.com/maps/search/Hotels/@39.7483811,-105.004088,5547m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-primary hover:text-blue-600 transition-colors duration-75"
        >
          hotels
        </a>{" "}
        and{" "}
        <a
          href="https://www.airbnb.com/s/Denver--CO/homes?refinement_paths%5B%5D=%2Fhomes&place_id=ChIJzxcfI6qAa4cR1jaKJ_j0jhE&checkin=2026-05-28&checkout=2026-05-31&adults=1&query=Denver%2C%20CO&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2025-07-01&monthly_length=3&monthly_end_date=2025-10-01&search_mode=regular_search&price_filter_input_type=2&price_filter_num_nights=3&channel=EXPLORE&ne_lat=39.77993408712175&ne_lng=-104.96375244951616&sw_lat=39.714300563478986&sw_lng=-105.0225874882725&zoom=13.354978269350728&zoom_level=13.354978269350728&search_by_map=true&search_type=user_map_move"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-primary hover:text-blue-600 transition-colors duration-75"
        >
          Airbnbs
        </a>{" "}
        in the area.
      </p>
    ),
  },
  {
    question: "What should I do if I can't attend?",
    answer: (
      <p>
        We understand that circumstances change. Please{" "}
        <Link
          href="/rsvp"
          className="underline underline-offset-2 text-primary hover:text-blue-600 transition-colors duration-75"
        >
          RSVP
        </Link>{" "}
        <b>no</b> as soon as possible so we can adjust our plans accordingly.
        We&apos;ll miss you but appreciate your timely response.
      </p>
    ),
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-left">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl text-left">
            Here are answers to some of the most common questions about our
            wedding day. If you have any other questions, feel free to reach
            out!
          </p>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map(({ question, answer }, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
