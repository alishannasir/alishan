import { floodArticle } from "./floodArticle";

export type WorkType = "article" | "photo" | "video";

export type Block = { h: string; level: 2 | 3 } | { p: string } | { table: string[][] };

export interface Work {
  slug: string;
  type: WorkType;
  title: string;
  date: string;
  summary: string;
  cover: string;
  // intro text shown above the content (photos / videos)
  description?: string[];
  // article: headings, paragraphs and tables
  body?: Block[];
  // photo: gallery images
  images?: string[];
  // video: YouTube/Vimeo embed URL, or a direct file URL
  video?: string;
  // optional external link or download
  link?: string;
  linkLabel?: string;
}

export const workTypes: { id: WorkType | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "article", label: "Articles" },
  { id: "photo", label: "Photos" },
  { id: "video", label: "Videos" },
];

export const works: Work[] = [
  {
    slug: "living-on-the-frontline-of-climate-change",
    type: "article",
    title: "Living on the Frontline of Climate Change",
    date: "29 Oct 2026",
    summary: "Flood disasters and their human impacts in Gilgit-Baltistan, Pakistan.",
    cover: "/work/flood-cover.jpg",
    description: [
      "A secondary-data research article and reproducible analysis proposal.",
      "Ali Shan · BS Data Science · Karakoram International University",
    ],
    body: floodArticle,
    link: "/work/gilgit-baltistan-floods-research.docx",
    linkLabel: "Download paper (.docx) ↓",
  },
  {
    slug: "the-unseen-meadow",
    type: "video",
    title: "The Unseen Meadow",
    date: "2026",
    summary: "A short film from the high meadows of northern Pakistan.",
    cover: "/work/video-cover.jpg",
    video: "https://www.youtube.com/embed/JmKbirRvlKk",
    link: "https://www.youtube.com/watch?v=JmKbirRvlKk",
    linkLabel: "Watch on YouTube ↗",
  },
  {
    slug: "hunza-heritage-and-legacy",
    type: "photo",
    title: "Hunza: Heritage & Legacy",
    date: "2026",
    summary: "Fortresses, culture and the roots of the Burusho people.",
    cover: "/work/hunza-01.jpg",
    description: [
      "Hunza does not announce its history. It builds it into the hillside. Altit Fort sits on its cliff above the valley, stone walls bound with timber, a small watchtower looking out over everything that has passed beneath it for centuries. In black and white it looks like it grew out of the mountain, and in a way it did.",
      "This is the home of the Burusho, a people whose language, Burushaski, has no known relatives anywhere else in the world. A language that stands alone says a lot about a place: for a very long time, this valley kept its own company, and kept its own ways.",
      "Those ways are still visible if you look past the fort. Terraced fields held up by hand-stacked stone, apricot orchards, water carried down from the glaciers through channels dug by people who are long gone and still looked after. Tradition here is not a performance. It is maintenance.",
      "These photos are my attempt to hold onto that: the fortress, the stone, the weight of old things standing in new weather. Heritage, legacy, roots, pride. Not as hashtags, but as the things that are quietly still standing.",
    ],
    images: ["/work/hunza-01.jpg", "/work/hunza-02.jpg", "/work/hunza-03.jpg", "/work/hunza-04.jpg", "/work/hunza-05.jpg", "/work/hunza-06.jpg", "/work/hunza-07.jpg", "/work/hunza-08.jpg", "/work/hunza-09.jpg", "/work/hunza-10.jpg", "/work/hunza-11.jpg", "/work/hunza-12.jpg", "/work/hunza-13.jpg"],
  },
  {
    slug: "made-of-love",
    type: "photo",
    title: "Made of Love",
    date: "2026",
    summary: "How people spend their winters in the mountains.",
    cover: "/work/made-of-love-01.jpg",
    description: [
      "Winter in the mountains is usually described by people who are only passing through. I wanted to see it from the inside: how a place keeps going when the roads fill with snow and the world gets quiet.",
      "The jeep in these photos says it all. Snow chains on the tyres, a rack loaded for the road, a driver who knows every bend by heart. Out here the vehicle is not a convenience, it is the lifeline. Everything moves slower, and everything is planned around the weather.",
      "But slow is not empty. There is wood smoke, warm rooms, tea, and neighbours who look out for each other. There is also play: skiing, sledding, kids who treat a snowed-in valley as the best playground there is. The same snow that closes the road opens a whole season of fun.",
      "I called it Made of Love because that is what I kept noticing. People do not just survive the winter here. They make it warm for each other.",
    ],
    images: ["/work/made-of-love-01.jpg", "/work/made-of-love-02.jpg", "/work/made-of-love-03.jpg", "/work/made-of-love-04.jpg", "/work/made-of-love-05.jpg", "/work/made-of-love-06.jpg", "/work/made-of-love-07.jpg", "/work/made-of-love-08.jpg", "/work/made-of-love-09.jpg", "/work/made-of-love-10.jpg", "/work/made-of-love-11.jpg", "/work/made-of-love-12.jpg", "/work/made-of-love-13.jpg", "/work/made-of-love-14.jpg"],
  },
  {
    slug: "on-my-way-to-find-that-damn-penguin",
    type: "photo",
    title: "On My Way to Find That Damn Penguin",
    date: "2026",
    summary: "Skis, snow and a cinematic holiday.",
    cover: "/work/winter-skis-01.jpg",
    description: [
      "There are no penguins in the Karakoram. I checked. That did not stop me from setting off to find one anyway, and it is as good an excuse as any to learn to ski.",
      "I started this trip as a complete beginner, which in skiing means spending a lot of time on the ground. Stiff boots, borrowed skis, a fall for every few metres gained. But somewhere between the tenth fall and the eleventh turn, something clicked, and for a few seconds the whole hillside was moving with me instead of against me.",
      "Those few seconds are what these frames are about. Motion blur, white snow, dark pines, a bit of red text from the edit: \"the dream chooses the dreamer.\" I like that line because it feels true. You do not pick the thing that obsesses you. You just notice one day that you are already on your way.",
      "I never found the penguin. I am still looking.",
    ],
    images: ["/work/winter-skis-01.jpg", "/work/winter-skis-02.jpg", "/work/winter-skis-03.jpg", "/work/winter-skis-04.jpg", "/work/winter-skis-05.jpg", "/work/winter-skis-06.jpg", "/work/winter-skis-07.jpg"],
  },
  {
    slug: "northern-pakistan-last-two-weeks",
    type: "photo",
    title: "Northern Pakistan: Last Two Weeks",
    date: "2026",
    summary: "A hike through meadows that used to hold glaciers.",
    cover: "/work/northern-pakistan-06.jpg",
    description: [
      "Two weeks in northern Pakistan, mostly on foot: long climbs, thin air, and a lot of lying flat on warm rock just to look at the sky. These pictures are from the quiet parts, when the valley is spread out far below and the peaks still hold their snow on the horizon.",
      "One of the places I walked through was a high meadow. A few decades ago, people tell me, there were glaciers and snow on this ground. Families would come up with their cows and goats for the summer, and the meltwater fed the grass, the animals and the villages below.",
      "Today the glacier is gone and so is the snow. Without them there is no meltwater, and without meltwater there is no water. The meadow is still beautiful, but it is a different kind of beautiful, the kind that makes you stop talking.",
      "I cannot attach a number or a single cause to what I saw, and in my research on flooding in Gilgit-Baltistan I try to be careful about that. But I can tell you what the people who live here say, and what the ground looks like now. The mountains are changing, and the people who depend on them are the first to feel it.",
    ],
    images: ["/work/northern-pakistan-01.jpg", "/work/northern-pakistan-02.jpg", "/work/northern-pakistan-03.jpg", "/work/northern-pakistan-04.jpg", "/work/northern-pakistan-05.jpg", "/work/northern-pakistan-06.jpg"],
  },
];
