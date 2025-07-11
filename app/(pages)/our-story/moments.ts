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
    text: "Our first date was in a coffee shop / bookstore on Tennyson street. We ate really messy croissants and then walked up and down the street popping into little shops to find a coat for Steph's New York trip. After we found the coat, we went to a pet store to get a toy for Nala's birthday which was coming up in a few days. We both knew there would have to be a second date.",
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
    date: "02/25/23",
    title: "Steph's New York Trip",
    text: "This was the first time Dan watched Nala for an extended period of time. It was also a full circle moment from our first date when Steph had been shopping for a coat for New York. Nala was overjoyed to see her mama come home.",
    images: [
      {
        src: "/our-story/nala-high-res.jpeg",
        alt: "Nala yearning",
        text: "Nala waiting for her mama",
      },
      {
        src: "/our-story/nala-on-stephs-lap.jpeg",
        alt: "Nala yearning",
        text: "Reunited",
      },
    ],
  },
  {
    date: "04/07/23",
    title: "Estes Park",
    text: "This was the first time Steph met Dan's mom and brothers. We went up to Estes park for a day and hiked, did a puzzle, and watched one of the Rocky movies.",
    images: [
      {
        src: "/our-story/estes-park-1.JPG",
        alt: "Dan and Steph in Estes Park",
        text: "Catch me",
      },
      {
        src: "/our-story/estes-park-2.jpeg",
        alt: "Dan and Steph and Robboe in Estes Park",
        text: "Say cheese",
      },
    ],
  },
  {
    date: "05/14/23",
    title: "Royal Gorge Train Ride",
    text: "Steph's cousin Brandon came to visit and we went on a train ride through the Royal Gorge. We almost didn't make it in time. We stopped for gas on the way at the slowest flowing gas station in the world.",
    images: [
      {
        src: "/our-story/us-at-royal-gorge.jpeg",
        alt: "Dan and Steph on the train",
        text: "Train ride",
      },
    ],
  },
  {
    date: "06/02/23",
    title: "Wisdom Teeth Removal",
    text: "Steph had her wisdom teeth out and was a chipmunk for a week. Dan stayed over at her apartment and fed her mashed potatoes and other non-solid foods. It was the longest we'd ever spent together at that point.",
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
    text: "We went out to the sand dunes with Hunter, Sterling, and Anna. Nala torched her little paws on the hot sand so Dan carried her across the sand.",
    images: [
      {
        src: "/our-story/selfie-sanddunes.jpeg",
        alt: "Friends at the dunes",
        text: "Dunes",
      },
      {
        src: "/our-story/dan-and-nala-sanddunes.jpeg",
        alt: "Dan and Nala at the dunes",
        text: "Hot paw break",
      },
    ],
  },
  {
    date: "09/12/23",
    title: "Spain",
    text: "In September we went to Spain to visit Steph's mom. This is the first time Dan had ever met Esther or been to Europe. We made our way down to Portugal and Cadiz and had such a good time.",
    images: [
      {
        src: "/our-story/us-in-spain.jpg",
        alt: "Dan and Steph in Spain",
        text: "Date night",
      },
      {
        src: "/our-story/dan-and-steph-in-spain-2.jpeg",
        alt: "Dan and Steph in Spain",
        text: "Cheesing in Sevilla",
      },
    ],
  },
  {
    date: "10/10/2023",
    title: "Moving in Together",
    text: "After Spain, Dan moved in with Steph at her apartment on the south side of Denver. It was a big step for the both of us. Never again would Nala have to brave the nightshift all alone.",
    images: [
      {
        src: "/our-story/naptime.jpeg",
        alt: "Steph and Nala napping",
        text: "Snoozing",
      },
    ],
  },
  {
    date: "12/11/23",
    title: "Moving Again",
    text: "Our first apartment where Dan is also legally on the lease.",
    images: [
      {
        src: "/our-story/nala-on-the-bed.jpeg",
        alt: "Nala on the bed",
        text: "Nala getting comfy",
      },
    ],
  },
  {
    date: "03/22/24",
    title: "Costa Rica",
    text: "We went to Costa Rica for a week and got to see our friends Jesse and Riley get engaged! We saw sloths and spiders and crabs and ate really good fruit.",
    images: [
      {
        src: "/our-story/costa-rica.jpeg",
        alt: "Dan and Steph in Costa Rica",
        text: "Costa Rica",
      },
    ],
  },
  {
    date: "04/18/24",
    title: "San Francisco",
    text: "We did a little trip to San Francisco with Alexis. We saw the sea lions, the red woods, the Presidio, and some baseball.",
    images: [
      {
        src: "/our-story/three-of-us-in-sf.PNG",
        alt: "Dan and Steph and Alexis in San Francisco",
        text: "SF woot woot",
      },
      {
        src: "/our-story/beautiful-lady.JPG",
        alt: "Stephanie stunning",
        text: "Wow",
      },
    ],
  },
  {
    date: "06/01/24",
    title: "Trying on Rings",
    text: "We were at a little market on Tennyson street not too far from where our first date was and stopped into a jewelry store for Steph to try on some rings. Shortly after, Dan started working with a jeweler from the store to design a ring for Steph.",
  },
  {
    date: "07/06/24",
    title: "Boston",
    text: "Another small trip just the two of us. Seafood can be questionable in Colorado so we made the most of our time near the coast.",
  },
  {
    date: "09/29/24",
    title: "Boulderthon",
    text: "Our first ever 10k. We stopped training for it a month or so before the race and we regretted it but we had a good time nonetheless.",
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
    images: [
      {
        src: "/our-story/halloween-door.jpeg",
        alt: "Halloween door",
        text: "Our contest winning door",
      },
      {
        src: "/our-story/pumpkin-nala.jpeg",
        alt: "Nala in a pumpkin costume",
        text: "The cutest pumpkin",
      },
    ],
  },
  {
    date: "11/01/24",
    title: "Mountain Getaway for Steph's Birthday",
    text: "We went to this tiny Airbnb in the mountains for Steph's birthday. There was just a little bit of snow on the ground and we saw mule deer on our walks. The cabin had a projector so we snuggled up with our popcorn and burned through the show we were watching at the time.",
    images: [
      {
        src: "/our-story/steph-birthday.jpeg",
        alt: "The Airbnb we went to for Steph's birthday",
        text: "Cozy cabin",
      },
    ],
  },
  {
    date: "12/17/24",
    title: "The Ring is Ready",
    text: "Just days before we were set to leave on our holiday travels, Dan finally got to see the completed ring. He shipped it to Alexis in Miami with the most premium USPS tracking options possible.",
    images: [
      {
        src: "/our-story/ring-is-ready.jpeg",
        alt: "The engagement ring",
        text: "surprise : )",
      },
    ],
  },
  {
    date: "12/22/24",
    title: "Seattle",
    text: "We had been wanting to do a trip over the holidays just the two of us and we finally made it happen. We spent a couple days over Christmas in Seattle exploring the city. Our hotel was a block away from the Pike Place Market and nearly every morning we got breakfast at this place with the most amazing breakfast biscuits. We saw the Space Needle, the Leavenworth Christmas Market, and the Chihuly Gardens.",
    images: [
      {
        src: "/our-story/stunner.jpeg",
        alt: "Steph looking gooood",
        text: "Breakfast with a view",
      },
      {
        src: "/our-story/seattle-waterfront.jpeg",
        alt: "Us in Seattle",
        text: "Waterfront walk",
      },
    ],
  },
  {
    date: "12/27/24",
    title: "Miami",
    text: "After Seattle, we flew to Miami to visit with Steph's family and friends down there.",
  },
  {
    date: "12/30/24",
    title: "Proposal",
    text: "Dan proposed to Steph in a little park in Miami by the beach. We went to this park with Steph's mom and Alexis under the pretense of going to a nice dinner at a restaurant nearby. On the drive over, Steph was holding Dan's hand and noticed on his watch that his heart rate was going way up - she was a little suspicious at this moment but hadn't put it together yet. The restaurant was closed when we got there (oh no how weird) so we went for a little walk around the park while Esther and Alexis pretended to find an alternative restaurant. We had arranged for a photographer to be stealthily waiting for us to come by to capture the moment and when Dan spotted her Alexis suggested we take a picture by the water. While Steph was getting herself in position for the picture, Dan got down on one knee, ring in hand, and asked Steph to marry him. She said yes : )",
    images: [
      {
        src: "/our-story/proposal.JPG",
        alt: "The proposal",
        text: "The proposal",
      },
      {
        src: "/our-story/ring.JPG",
        alt: "The ring",
        text: "The ring",
      },
    ],
  },
  {
    date: "01/11/25",
    title: "We Find Our Venue",
    text: "Dan and Steph visited the Denver Botanic Gardens fell in love with the Woodland Mosaic. It perfectly fit our vision for a small, intimate wedding in the most beautiful setting.",
    images: [
      {
        src: "/our-story/greenhouse.jpeg",
        alt: "The greenhouse",
        text: "The greenhouse",
      },
    ],
  },
  {
    date: "05/29/26",
    title: "Wedding",
    text: "This is the big day. 1,238 days after we first met, we say 'I do' for all the rest of our days.",
  },
];
