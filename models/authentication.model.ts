import {Column, DataType, IsEmail, Length, Model, NotNull, PrimaryKey, Table} from "sequelize-typescript";
import {hashSync, compareSync, genSalt} from "bcrypt"
import {sign, verify} from "jsonwebtoken"
import {randomUUID} from "crypto";

@Table({tableName: "authentications"})
export class Authentication extends Model<Authentication> implements IAuthentication {
    @PrimaryKey
    @Column({type: DataType.UUID, defaultValue: randomUUID()})
    id?: string

    @IsEmail
    @NotNull
    @Column({allowNull: false})
    email!: string

    @NotNull
    @Column({allowNull: false})
    password!: string

    static async asModel(auth: IAuthentication){
        const model = new Authentication()
        model.id = auth.id || randomUUID()
        model.email = auth.email
        model.password = await model.hashPassword(auth.password)
        return model
    }

    async hashPassword(plain: string) {
        const roundsOrNull = process.env.SALT_ROUND
        const rounds = typeof roundsOrNull !== "undefined" ? parseInt(roundsOrNull) : 10
        const salt= await genSalt(rounds)
        return hashSync(plain, salt)
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

        return sign(payload, secretKey, {expiresIn: "3d"})
    }

    static verifyToken(token: string) {
        const secretKey = process.env.SECRET_KEY || "utifmd@gmail.com"

        return verify(token, secretKey)
    }
}