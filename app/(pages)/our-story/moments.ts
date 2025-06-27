export type Moment = {
  date: string;
  title: string;
  text: string;
  images?: Array<{
    src: string;
    alt: string;
    text: string;
  }>;
};

export const moments: Array<Moment> = [
  {
    date: "01/08/23",
    title: "The Day We Met",
    text: "Our story begins at a coffee shop bookstore on Tennyson street.",
  },
  {
    date: "02/18/23",
    title: "First Time Snowboarding Together",
    text: "This is one of the earliest pictures in our camera roll. We went on a ski date just the two of us to Breckenridge.",
    images: [
      {
        src: "/our-story/first-time-skiing.jpeg",
        alt: "Dan and Steph after skiing",
        text: "Shredded mad gnar",
      },
    ],
  },
  {
    date: "03/27/23",
    title: "Steph's New York Trip - maybe?",
    text: "This was the first time Dan watched Nala for an extended period of time. It was also a full circle moment from our first date when Steph had been shopping for a coat for New York. Nala was overjoyed to see her mama come home.",
  },
  {
    date: "04/07/23",
    title: "Estes Park",
    text: "This was the first time Steph met Dan's mom and brothers. We went up to Estes park for a day and hiked, did a puzzle, and watched one of the Rocky movies.",
    images: [
      {
        src: "/our-story/estes-park-1.JPG",
        alt: "Dan and Steph in Estes Park",
        text: "Catch me if I fall?",
      },
      {
        src: "/our-story/estes-park-2.jpeg",
        alt: "Dan and Steph and Robboe in Estes Park",
        text: "Say cheese",
      },
    ],
  },
  {
    date: "04/28/23",
    title: "Steph's New York Trip - possibly",
    text: "This was the first time Dan watched Nala for an extended period of time. It was also a full circle moment from our first date when Steph had been shopping for a coat for New York. Nala was overjoyed to see her mama come home.",
  },
  {
    date: "05/14/23",
    title: "Royal Gorge Train Ride",
    text: "Steph's cousin Brandom came to visit and we went on a train ride through the Royal Gorge. We almost didn't make it in time. We stopped for gas on the way at the slowest flowing gas station in the world.",
  },
  {
    date: "06/02/23",
    title: "Wisdom Teeth Removal",
    text: "Steph had her wisdom teeth out and was a chipmunk for a week. Dan stayed over at her apartment the whole time. It was the longest we'd ever spent together at that point.",
    images: [
      {
        src: "/our-story/after-wisdom-teeth.jpeg",
        alt: "Steph after wisdom teeth removal",
        text: "CHIPMUNK",
      },
      {
        src: "/our-story/resting-after-wisdom-teeth.jpeg",
        alt: "Steph and Nala on the couch after wisdom teeth removal",
        text: "Nurse Nala",
      },
    ],
  },
  {
    date: "06/02/23",
    title: "Great Sand Dunes National Park",
    text: "We went out to the sand dunes with Hunter, Ster, and Anna. Nala torched her little pads on the hot sand so Dan carried her the whole time.",
  },
  {
    date: "09/12/23",
    title: "Spain",
    text: "We went to Spain to visit Steph's mom. This is the first time Dan had ever met Esther or been to Europe.",
    images: [
      {
        src: "/our-story/us-in-spain.jpg",
        alt: "Dan and Steph in Spain",
        text: "Date night",
      },
    ],
  },
  {
    date: "unsure - find exact",
    title: "Moved in Together",
    text: "After Spain Dan left Hunter and Sterling and moved in with Steph at her apartment on the south side of Denver.",
  },
  {
    date: "12/11/23",
    title: "Moving Again",
    text: "Our first apartment where Dan is also legally on the lease.",
  },
  {
    date: "03/22/24",
    title: "Costa Rica",
    text: "We went to Costa Rica for a week. This was the trip the Riley proposed to Jesse on. We knew it was coming. We had highs and lows and a lot of fun at the beach.",
  },
  {
    date: "04/18/24",
    title: "San Francisco",
    text: "We did a little trip to San Fran with Alexis.",
  },
  {
    date: "06/01/24",
    title: "Trying on Rings",
    text: "We were at a little market on Tennyson street not too far from where our first date was and stopped into a jewelry store for Steph to try on some rings. Shortly after, Dan started working with a jeweler from the store to design a ring for Stpeh.",
  },
  {
    date: "07/06/24",
    title: "Boston",
    text: "Another small trip just the two of us. We walked so much and ate so much.",
  },
  {
    date: "09/29/24",
    title: "Boulderthon",
    text: "Our first ever 10k. We did it.",
  },
  {
    date: "09/30/24",
    title: "Moving Across the Hall",
    text: "We traded our west facing mountain view apartment for a larger unit with more windows across the hall. We will never have an easier move in our lives.",
  },
  {
    date: "10/31/24",
    title: "Halloween",
    text: "Our apartment had a door decoration contest and we won first place. Nala was also very festive.",
  },
  {
    date: "11/01/24",
    title: "Mountain Getaway for Steph's Birthday",
    text: "Dan took Steph to a tiny little Airnbn in the mountains for her birthday. We went on nice walks and binged the TV show Grimm on a projector.",
  },
  {
    date: "12/17/24",
    title: "The Ring is Ready",
    text: "Dan finally got to see the completed ring. He shipped it to Alexis in Miami with the most premium USPS tracking options possible.",
  },
  {
    date: "12/22/24",
    title: "Seattle",
    text: "The first stop on our holiday travels. We went to Seattle and saw it all.",
  },
  {
    date: "12/27/24",
    title: "Miami",
    text: "We stayed with her Aunt, I met her dad and then it was proposal time.",
  },
  {
    date: "12/30/24",
    title: "Proposal",
    text: "Dan proposed to Steph in a little park in Miami by the beach. The photographer was waiting in stealth and Steph was totally surprised.",
  },
  {
    date: "01/11/25",
    title: "We Find Our Venue",
    text: "Dan and Steph visited the Denver Botanic Gardens fell in love with the Woodland Mosaic.",
  },
  // Last entry
  {
    date: "05/29/26",
    title: "Wedding",
    text: "This is the big day. 1,238 days after we first met, we say 'I do' for all the rest of our days.",
  },
];
