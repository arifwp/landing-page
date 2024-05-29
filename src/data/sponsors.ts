interface Sponsor {
  id: string;
  imgUrl: string;
  name: string;
  isBig: boolean;
}

export const sponsors: Array<Sponsor> = [
  {
    id: "sponsor-1",
    imgUrl: "/images/sponsors/spotify.png",
    name: "Spotify",
    isBig: true,
  },
  {
    id: "sponsor-2",
    imgUrl: "/images/sponsors/tokped.png",
    name: "Tokopedia",
    isBig: true,
  },
  {
    id: "sponsor-3",
    imgUrl: "/images/sponsors/audi.png",
    name: "Audi",
    isBig: false,
  },
  {
    id: "sponsor-4",
    imgUrl: "/images/sponsors/citibank.png",
    name: "Citibank",
    isBig: false,
  },
  {
    id: "sponsor-5",
    imgUrl: "/images/sponsors/cocacola.png",
    name: "Coca Cola",
    isBig: true,
  },
  {
    id: "sponsor-6",
    imgUrl: "/images/sponsors/coffe.png",
    name: "Coffe Weekdays",
    isBig: false,
  },
  {
    id: "sponsor-7",
    imgUrl: "/images/sponsors/dairyqueen.png",
    name: "Dairy Queen",
    isBig: false,
  },
];
