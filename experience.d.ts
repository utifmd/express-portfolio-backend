interface IExperience {
    id: string | null,
    type: string,
    title: string,
    description: string,
    platform: string,
    stack: any,
    imageUrls: any,
    iconUrl: string,
    releasedUrl: string,
    demoUrl: string | null,
    createdAt?: any,
    updatedAt?: any
}