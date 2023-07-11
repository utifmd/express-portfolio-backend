import {Column, DataType, ForeignKey, Model, NotNull, PrimaryKey, Table} from "sequelize-typescript";
import {randomUUID} from "crypto";
import {Profile} from "./profile.model";

@Table({tableName: "profile_links"})
export class ProfileLink extends Model<ProfileLink> implements IProfileLinks {
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
        const model = new ProfileLink()
        model.id = request.id || randomUUID()
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