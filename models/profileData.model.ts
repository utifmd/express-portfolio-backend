import {Column, DataType, ForeignKey, Model, NotNull, PrimaryKey, Table} from "sequelize-typescript";
import {Profile} from "./profile.model";
import {randomUUID} from "crypto";

@Table({tableName: "profile_data"})
export class ProfileData extends Model<ProfileData> implements IProfileData {
    @PrimaryKey
    @Column({type: DataType.UUID})
    id?: string

    @NotNull
    @Column({
        allowNull: false, type: DataType.TEXT})
    description!: string

    @NotNull
    @Column({
        allowNull: false, type: DataType.TEXT})
    title!: string

    @NotNull
    @Column({
        allowNull: false,
        type: DataType.ENUM("HABIT", "INTRO"),
        defaultValue: "INTRO"
    })
    type!: string

    @ForeignKey(() => Profile)
    @Column({type: DataType.UUID, allowNull: false})
    profileId!: string;

    static asModel(request: IProfileData){
        const model = new ProfileData()
        model.id = request.id || randomUUID()
        model.type = request.type
        model.title = request.title
        model.description = request.description
        model.profileId = request.profileId
        return model
    }
}