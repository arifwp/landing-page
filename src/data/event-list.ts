interface ArtistItem {
    id: string,
    artistName: string,
    artistFrom: string
}

export interface EventItem {
    id: string,
    name: string,
    location: string,
    description: string,
    time: string,
    thumbnail: string,
    artist: Array<ArtistItem>
  }

export const eventList : Array<EventItem> = [
    {
        id: 'EV-001',
        name: 'Karnaval',
        location: 'Lapangan Desa Ketaon',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        time: '13.00 - 17.00',
        thumbnail: '/images/event/2018/karnaval-topeng-ireng.jpg',
        artist: [
            {
                id: 'AR-001',
                artistName: 'Eva Blezynsky',
                artistFrom: 'Surakarta'
            },
            {
                id: 'AR-002',
                artistName: 'Rondo Parwito',
                artistFrom: 'Purwokerto'
            },
        ],
    },
    {
        id: 'EV-002',
        name: 'Kesenian Anak',
        location: 'Bundaran HI',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        time: '19.00 - 22.00',
        thumbnail: '/images/event/2022/tari-boyolali.jpg',
        artist: [
            {
                id: 'AR-001',
                artistName: 'Eva Blezynsky',
                artistFrom: 'Surakarta'
            },
            {
                id: 'AR-002',
                artistName: 'Rondo Parwito',
                artistFrom: 'Purwokerto'
            },
            {
                id: 'AR-003',
                artistName: 'Sigit Purnomo',
                artistFrom: 'Boyolali'
            },
        ],
    },
    {
        id: 'EV-003',
        name: 'Dangdut & Pop Festival',
        location: 'Lapangan Desa Ketaon',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        time: '20.00 - 24.00',
        thumbnail: '/images/event/2023/biduan-boyolali.jpg',
        artist: [
            {
                id: 'AR-001',
                artistName: 'Eva Blezynsky',
                artistFrom: 'Surakarta'
            },
        ],
    },
    {
        id: 'EV-004',
        name: 'Wayang Orang',
        location: 'Depan Toko Darman',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        time: '20.00 - 24.00',
        thumbnail: '/images/event/2023/ketoprak-ketaon-fair.jpg',
        artist: [
            {
                id: 'AR-001',
                artistName: 'Eva Blezynsky',
                artistFrom: 'Surakarta'
            },
        ],
    },
];