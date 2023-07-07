import {DataType, Column, Model, Table, PrimaryKey, HasOne, NotNull, ForeignKey} from "sequelize-typescript";
import {randomUUID} from "crypto";
@Table({tableName: "links"})
export class Link extends Model<Link> implements IProfileLinks {
    @PrimaryKey
    @Column({type: DataType.UUID})
    id?: string

    @NotNull
    @Column({type: DataType.STRING, allowNull: false})
    email!: string

    @NotNull
    @Column({type: DataType.STRING, allowNull: false})
    github!: string

    @NotNull
    @Column({type: DataType.STRING, allowNull: false})
    instagram!: string

    @NotNull
    @Column({type: DataType.STRING, allowNull: false})
    linkedin!: string

    @NotNull
    @Column({type: DataType.STRING, allowNull: false})
    medium!: string

    @NotNull
    @Column({type: DataType.STRING, allowNull: false})
    resume!: string

    @NotNull
    @Column({type: DataType.STRING, allowNull: false})
    stackOverflow!: string

    @NotNull
    @Column({type: DataType.STRING, allowNull: false})
    twitter!: string

    @ForeignKey(() => Profile)
    @Column({type: DataType.UUID, allowNull: false})
    profileId!: string;

    static asModel(request: IProfileLinks) {
        const model = new Link()
        model.id = randomUUID()
        model.email = request.email
        model.github = request.github
        model.medium = request.medium
        model.resume = request.resume
        model.instagram = request.instagram
        model.linkedin = request.linkedin
        model.stackOverflow = request.stackOverflow
        model.twitter = request.twitter
        model.profileId = request.profileId
        return model
    }
}
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

    @HasOne(() => Link, "profileId")
    links!: Link

    @NotNull
    @Column({type: DataType.STRING, allowNull: false})
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