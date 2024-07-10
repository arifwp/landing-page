interface ArtistItem {
  id: string;
  artistName: string;
  artistFrom: string;
}

export interface EventItem {
  id: string;
  name: string;
  location: string;
  description: string;
  time: string;
  tag: string;
  thumbnail: string;
  artist: Array<ArtistItem>;
}

export const eventList: Array<EventItem> = [
  {
    id: "EV-001",
    name: "Karnaval",
    location: "Lapangan Desa Ketaon",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    time: "13.00 - 17.00",
    thumbnail: "/images/event/2022/karnaval-kostum-merah-boyolali.jpg",
    tag: "Festival",
    artist: [
      {
        id: "AR-001",
        artistName: "Eva Blezynsky",
        artistFrom: "Surakarta",
      },
      {
        id: "AR-002",
        artistName: "Rondo Parwito",
        artistFrom: "Purwokerto",
      },
    ],
  },
  {
    id: "EV-002",
    name: "Pentas Kesenian Anak",
    location: "Jln. Ketaon",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    time: "18.30 - 22.00",
    thumbnail: "/images/event/2022/tari-boyolali.jpg",
    tag: "Festival & Musik",
    artist: [
      {
        id: "AR-001",
        artistName: "Eva Blezynsky",
        artistFrom: "Surakarta",
      },
      {
        id: "AR-002",
        artistName: "Rondo Parwito",
        artistFrom: "Purwokerto",
      },
      {
        id: "AR-003",
        artistName: "Sigit Purnomo",
        artistFrom: "Boyolali",
      },
    ],
  },
  {
    id: "EV-003",
    name: "Panggung Dangdut",
    location: "Lapangan Desa Ketaon",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    time: "20.00 - 24.00",
    thumbnail: "/images/event/2023/biduan-boyolali.jpg",
    tag: "Musik",
    artist: [
      {
        id: "AR-001",
        artistName: "Eva Blezynsky",
        artistFrom: "Surakarta",
      },
    ],
  },
  {
    id: "EV-004",
    name: "Kesenian Ketoprak",
    location: "Jln. Ketaon, Depan Toko Darman",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    time: "20.00 - 24.00",
    thumbnail: "/images/event/2023/ketoprak-ketaon-fair.jpg",
    tag: "Festival & Musik",
    artist: [
      {
        id: "AR-001",
        artistName: "Eva Blezynsky",
        artistFrom: "Surakarta",
      },
    ],
  },
  {
    id: "EV-005",
    name: "Koes Plus",
    location: "Halaman Balai Desa Ketaon",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    time: "20.00 - 24.00",
    thumbnail: "/images/event/2023/ks-plus.jpg",
    tag: "Musik",
    artist: [
      {
        id: "AR-001",
        artistName: "Eva Blezynsky",
        artistFrom: "Surakarta",
      },
    ],
  },
  {
    id: "EV-006",
    name: "Bazar & Culinary",
    location: "Sepanjang Jalan Ketaon",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    time: "09.00 - 24.00",
    thumbnail: "/images/event/2022/bazar-culinary.jpg",
    tag: "Musik",
    artist: [
      {
        id: "AR-001",
        artistName: "Eva Blezynsky",
        artistFrom: "Surakarta",
      },
    ],
  },
];
