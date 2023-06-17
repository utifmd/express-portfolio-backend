import {
    DataType, Column, IsUrl, Model, NotEmpty, NotNull, PrimaryKey, Table, IsArray
} from "sequelize-typescript";
import {randomUUID} from "crypto";

@Table({tableName: "experiences"})
export class Experience extends Model<Experience> implements IExperience {
    @PrimaryKey
    @Column({type: DataType.UUID})
    id?: string

    @IsUrl
    @Column
    demoUrl?: string;

    @NotNull
    @Column({allowNull: false})
    description!: string;

    // @IsUrl
    @NotNull
    @Column({allowNull: false})
    iconUrl!: string;

    @NotEmpty
    @NotNull
    @Column({
        allowNull: false, type: DataType.ARRAY(DataType.STRING)
    })
    imageUrls!: string[];

    @NotNull
    @Column({
        allowNull: false,
        type: DataType.ENUM("ANDROID", "IOS", "WEB"),
        defaultValue: "WEB"
    })
    platform!: string;

    @IsUrl
    @NotNull
    @Column({allowNull: false})
    releasedUrl!: string;

    @NotEmpty
    @NotNull
    @Column({
        allowNull: false, type: DataType.ARRAY(DataType.STRING)
    })
    stack!: string[];

    @NotNull
    @Column({allowNull: false})
    title!: string;

    @NotNull
    @Column({
        allowNull: false,
        type: DataType.ENUM("FRONT-END", "BACK-END", "MOBILE"),
        defaultValue: "BACK-END"
    })
    type!: string;

    static asModel(exp: IExperience){
        const model = new Experience()
        model.id = exp.id || randomUUID()
        model.type = exp.type
        model.title = exp.title
        model.description = exp.description
        model.platform = exp.platform
        model.stack = exp.stack
        model.imageUrls = exp.imageUrls
        model.iconUrl = exp.iconUrl
        model.releasedUrl = exp.releasedUrl
        model.demoUrl = exp.demoUrl
        model.createdAt = exp.createdAt
        model.updatedAt = exp.updatedAt
        return model
    }
}