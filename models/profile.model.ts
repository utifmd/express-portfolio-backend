import {DataType, Column, Model, Table, PrimaryKey, HasOne, NotNull, HasMany} from "sequelize-typescript";
import {randomUUID} from "crypto";
import {ProfileLink} from "./profileLink.model";
import {ProfileData} from "./profileData.model";
@Table({tableName: "profiles"})
export class Profile extends Model<Profile> implements IProfile {
    @PrimaryKey
    @Column({type: DataType.UUID})
    id?: string

    @NotNull
    @Column({type: DataType.STRING, allowNull: false})
    bio!: string

    @NotNull
    @Column({type: DataType.STRING, allowNull: false})
    fullName!: string

    @NotNull
    @Column({type: DataType.STRING, allowNull: false})
    email!: string

    @NotNull
    @Column({type: DataType.STRING, allowNull: false})
    imageUrl!: string

    @NotNull
    @Column({type: DataType.STRING, allowNull: false})
    jobTitle!: string

    @HasOne(() => ProfileLink, "profileId")
    links?: ProfileLink

    @HasMany(() => ProfileData, "profileId")
    data?: ProfileData[]

    @NotNull
    @Column({
        allowNull: false,
        type: DataType.ENUM("OWNER", "GUEST"),
        defaultValue: "GUEST"
    })
    role!: string

    static asModel(request: IProfile) {
        const model = new Profile()
        model.id = randomUUID()
        model.bio = request.bio
        model.email = request.email
        model.fullName = request.fullName
        model.role = request.role
        model.jobTitle = request.jobTitle
        model.imageUrl = request.imageUrl
        model.links = request.links
        return model
    }
}