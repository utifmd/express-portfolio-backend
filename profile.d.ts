interface IProfileLinks {
    id?: string,
    profileId: string,
    linkedin: string,
    github: string,
    twitter: string,
    stackOverflow: string,
    instagram: string,
    medium: string,
    resume: string,
    email: string,
    createdAt?: any,
    updatedAt?: any
}
interface IProfileData {
    id?: string,
    title: string,
    description: string,
    profileId: string,
    type: string
}
interface IProfile {
    id?: string,
    fullName: string,
    email: string,
    imageUrl: string,
    bio: string,
    role: string,
    jobTitle: string,
    links?: any,
    data?: any,
    createdAt?: string,
    updatedAt?: string
}