interface Event {
    eventName: string,
    eventNameWithYear: string,
    eventLogo: string,
    eventTag: string,
    eventDescription: string, 
    eventDate: string,
    videoUrl: string,
}

export const event : Event = {
    eventName: 'LaLaLa Fest',
    eventNameWithYear: "LaLaLa Fest 2024",
    eventLogo: '/images/sponsors/coffe.png',
    eventTag: 'Music, Festival',
    eventDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    eventDate: 'Coming Soon',
    videoUrl: 'https://www.youtube.com/embed/QhBnZ6NPOY0',
};