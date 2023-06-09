import {Column, DataType, IsEmail, Length, Model, PrimaryKey, Table} from "sequelize-typescript";
import {hashSync, compareSync, genSalt} from "bcrypt"
import {sign, verify} from "jsonwebtoken"
import {randomUUID} from "crypto";

@Table({tableName: "authentications"})
export class Authentication extends Model<Authentication> implements IAuthentication {
    @PrimaryKey
    @Column({type: DataType.UUID, defaultValue: randomUUID()})
    id?: string

    @IsEmail
    @Column
    email!: string

    @Column
    password!: string

    static asResponse(auth: IAuthentication){
        const authentication = new Authentication()
        authentication.email = auth.email
        authentication.password = auth.password
        return authentication
    }

    async hashPassword() {
        const roundsOrNull = process.env.SALT_ROUND
        const rounds = typeof roundsOrNull !== "undefined" ? parseInt(roundsOrNull) : 10
        const salt= await genSalt(rounds)
        return hashSync(this.password, salt)
    }

    comparePassword(plain: string) {
        return compareSync(plain, this.password)
    }

    signToken(): string {
        const secretKey = process.env.SECRET_KEY || "utifmd@gmail.com"
        const payload = <ITokenProps>{
            id: this.id, createdAt: this.createdAt
        }
        if (typeof payload.id === "undefined" || typeof payload.createdAt === "undefined")
            throw Error("authentication properties incompatible")

        return sign(payload, secretKey, {expiresIn: "10h"})
    }

    static verifyToken(token: string) {
        const secretKey = process.env.SECRET_KEY || "utifmd@gmail.com"

        return verify(token, secretKey)
    }
}