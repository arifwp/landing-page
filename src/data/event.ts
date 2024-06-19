interface Event {
    eventName: string,
    eventNameWithYear: string,
    eventLocation: string,
    eventBaseCampLocation: string,
    eventLogo: string,
    eventTag: string,
    eventDescription: string, 
    eventDate: string,
    videoUrl: string,
    generalAdminWhatsapp: string,
    generalAdminName: string,
    bazarAdminWhatsapp: string,
    bazarAdminName: string,
    instagramLink: string,
    youtubeLink: string,
    tiktokLink: string,
    totalMediaPartner: string,
    totalVisitor: string,
    totalSponsor: string,
}

export const event : Event = {
    eventName: 'Ketaon Fair',
    eventNameWithYear: "Ketaon Fair 2024",
    eventLocation: 'Ketaon, Banyudono, Boyolali',
    eventBaseCampLocation: 'Depan Tugu KB Desa Ketaon',
    eventLogo: '/images/sponsors/coffe.png',
    eventTag: 'Music, Festival',
    eventDescription: 'Ketaon Fair meruapakan event tahunan yang diselenggarakan oleh Karang Taruna Manggala Wijaya. Event ini adalah event yang paling ditunggu-tunggu oleh warga sekitar. Dalam event ini sering kali terdapat beberapa acara seperti karnaval yang diikuti oleh semua warga Ketaon serta beberapa hiburan lainnya seperti wayang, dangdut, band pop punk, serta pentas seni anak.',
    // eventDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    eventDate: 'comingsoon',
    videoUrl: 'https://www.youtube.com/embed/QhBnZ6NPOY0',
    generalAdminWhatsapp: '+6281111111111', // phone number must be start with +(country code)
    generalAdminName: 'Risa',
    bazarAdminWhatsapp: '+6281111111111',
    bazarAdminName: 'Yuda',
    instagramLink: 'https://www.instagram.com/ketaon_fair/',
    youtubeLink: 'https://www.youtube.com/@manggalawijayaketaon2320',
    tiktokLink: 'https://www.tiktok.com/@ketaonfair',
    totalSponsor: '15',
    totalVisitor: '1500++',
    totalMediaPartner: '3'
};