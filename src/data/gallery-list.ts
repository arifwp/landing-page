export interface ImgGalleryItemProps {
  gallery: ImgGalleryItem;
}

export interface ListGalleryPhotos {
  id: string;
  src: string;
  width: number;
  height: number;
  tags?: [];
  alt?: string;
}

export interface ImgGalleryItem {
  id: string;
  year: string;
  imgUrl: Array<ListGalleryPhotos>;
}

export const imgGallery: Array<ImgGalleryItem> = [
  {
    id: "KF-2019",
    year: "2019",
    imgUrl: [
      {
        id: "photos-1",
        src: "/images/event/karnaval.jpg",
        width: 1,
        height: 1,
        tags: undefined,
        alt: "Karnaval",
      },
      {
        id: "photos-2",
        src: "/images/event/dangdut.jpg",
        width: 1,
        height: 1,
        tags: undefined,
        alt: "Dangdut",
      },
      {
        id: "photos-3",
        src: "/images/event/anak.jpg",
        width: 1,
        height: 1,
        tags: undefined,
        alt: "Anak",
      },
      {
        id: "photos-5",
        src: "/images/event/karnaval.jpg",
        width: 1,
        height: 1,
        tags: undefined,
        alt: "Karnaval",
      },
      {
        id: "photos-6",
        src: "/images/event/anak.jpg",
        width: 1,
        height: 1,
        tags: undefined,
        alt: "Anak",
      },

      {
        id: "photos-7",
        src: "/images/event/dangdut.jpg",
        width: 1,
        height: 1,
        tags: undefined,
        alt: "Dangdut",
      },
      {
        id: "photos-8",
        src: "/images/event/dangdut.jpg",
        width: 1,
        height: 1,
        tags: undefined,
        alt: "Dangdut",
      },
    ],
  },
  {
    id: "KF-2022",
    year: "2022",
    imgUrl: [
      {
        id: "photos-9",
        src: "/images/event/ketoprak.jpg",
        width: 1,
        height: 1,
        tags: undefined,
        alt: "Ketoprak",
      },
      {
        id: "photos-10",
        src: "/images/event/karnaval.jpg",
        width: 1,
        height: 1,
        tags: undefined,
        alt: "Topeng Ireng",
      },
      {
        id: "photos-11",
        src: "/images/event/topengireng.jpg",
        width: 1,
        height: 1,
        tags: undefined,
        alt: "Topeng Ireng",
      },
    ],
  },
];
