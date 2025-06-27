import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the dress code for the wedding?",
    answer:
      "The dress code is cocktail attire. We recommend semi-formal to formal wear. For women, cocktail dresses or elegant separates are perfect. For men, a suit and tie or sport coat with dress pants would be appropriate.",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "Plus ones are only included if specifically noted on your invitation. If you have questions about your invitation, please reach out to us directly.",
  },
  {
    question: "Are children welcome at the wedding?",
    answer:
      "We love your little ones, but we have chosen to make our wedding an adults-only celebration. This allows all guests to relax and enjoy the evening. We appreciate your understanding!",
  },
  {
    question: "What time should I arrive?",
    answer:
      "Please arrive 30 minutes before the ceremony start time. This will give you time to find parking, get settled, and find your seat.",
  },
  {
    question: "Is there parking available at the venue?",
    answer:
      "Yes, there is complimentary parking available at the venue. Valet parking will also be provided for your convenience.",
  },
  {
    question: "What happens if it rains?",
    answer:
      "Our ceremony and reception are both indoors, so the celebration will proceed as planned regardless of the weather. We'll have umbrellas available for guests moving between buildings.",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer:
      "We kindly ask that you refrain from taking photos during the ceremony. Our professional photographer will capture all the special moments, and we'll be happy to share the photos with you afterward.",
  },
  {
    question: "What type of food will be served?",
    answer:
      "We'll be serving a plated dinner with options for different dietary restrictions. Please let us know about any dietary requirements when you RSVP.",
  },
  {
    question: "Is there a wedding registry?",
    answer:
      "Your presence at our wedding is the greatest gift of all. However, if you'd like to give a gift, we have a small registry available. Information can be found on our wedding website.",
  },
  {
    question: "What's the timeline for the day?",
    answer:
      "The ceremony begins at 4:00 PM, followed by cocktail hour from 5:00-6:00 PM, and dinner and dancing from 6:00 PM until 11:00 PM.",
  },
  {
    question: "Are there accommodations nearby?",
    answer:
      "Yes! We've reserved a block of rooms at several nearby hotels. Please check our travel page for more details and booking information.",
  },
  {
    question: "What should I do if I can't attend?",
    answer:
      "We understand that circumstances change. Please RSVP 'no' as soon as possible so we can adjust our plans accordingly. We'll miss you but appreciate your timely response.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-4xl mx-auto">
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
