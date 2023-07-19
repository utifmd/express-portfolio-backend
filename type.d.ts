interface ITokenProps {
    id: string,
    email: string,
    createdAt: any
}
type TMessageResponse = {
    message: string
}
type TParamsRequest = {
    id: string
    email: string
}
type TTokenResponse = {
    token: string
}
type TDataResponse = {
    data: any
}
type TLocalsResponse = {
    authId: string
    authEmail: string
    singleFileUrls: string[] | null
    multipleFileUrls: string[] | null
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