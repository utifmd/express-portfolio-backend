interface IAuthentication {
    id?: string,
    email: string,
    password: string,
    createdAt?: any,
    updatedAt?: any
}
interface IEducation {
    id?: string,
    title: string,
    desc: string,
    content: string,
    fileUrl: string,
    imageUrl: string,
    createdAt?: any,
    updatedAt?: any
}
interface IExperience {
    id?: string,
    type: string, // "front-end" | "back-end" | "mobile",
    title: string,
    description: string,
    platform: string, // "android" | "ios" | "web",
    stack: string[],
    imageUrls: string[],
    iconUrl: string,
    releasedUrl: string,
    demoUrl?: string,
    createdAt?: any,
    updatedAt?: any
}
interface IFile {
    id?: string
    mimeType: string
    size: number
    buffer: any
}
interface ITokenProps {
    id: string,
    createdAt: any
}
type TMessageResponse = {
    message: string
}
type TParamsRequest = {
    id: string
}
type TTokenResponse = {
    token: string
}
type TDataResponse = {
    data: any
}
type TLocalsResponse = {
    authId: string
    singleFileUrls: string[]
    multipleFileUrls: string[]
    files: any[]
}
interface IEnvVariable {
    PORT: number,
    CLIENT_ORIGIN: string,
    DB_HOST: string,
    DB_NAME: string,
    DB_PASS: string,
    DB_USER: string,
    DB_PORT: number,
    DB_DIALECT: any,
    SALT_ROUND: number,
    SECRET_KEY: string
}
interface IReqQuery {
    id?: number,
    page?: number,
    size?: number
}