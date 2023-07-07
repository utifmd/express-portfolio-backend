interface IExperience {
    id?: string,
    type: string, // "FRONT-END" | "BACK-END" | "MOBILE",
    title: string,
    description: string,
    platform: string, // "ANDROID" | "IOS" | "WEB",
    stack: any, // string[],
    imageUrls?: any, // string[],
    iconUrl: string,
    releasedUrl: string,
    demoUrl?: string,
    createdAt?: any,
    updatedAt?: any
}