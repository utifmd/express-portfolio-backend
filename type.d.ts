interface IAuthentication {
    email: string,
    password: string
}
interface IEducation {
    id?: string,
    title: string,
    desc: string,
    content: string,
    fileUrl: string,
    imageUrl: string,
    createdAt?: any
    updatedAt?: any
}
interface ITokenProps {
    id: string,
    createdAt: any
}
type TMessageResponse = {
    message: string
}
type TTokenResponse = {
    token: string
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