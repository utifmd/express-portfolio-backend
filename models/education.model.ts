import {Column, DataType, IsUrl, Model, NotNull, PrimaryKey, Table} from "sequelize-typescript";
import {randomUUID} from "crypto";

@Table({tableName: "educations"})
export class Education extends Model<Education> implements IEducation {
    @PrimaryKey
    @Column({type: DataType.UUID})
    id?: string

    @NotNull
    @Column({allowNull: false})
    title!: string;

    @NotNull
    @Column({allowNull: false, type: DataType.TEXT})
    desc!: string;

    @NotNull
    @Column({allowNull: false, type: DataType.TEXT})
    content!: string;

    @IsUrl
    @NotNull
    @Column({allowNull: false})
    fileUrl!: string;

    // @IsUrl
    @NotNull
    @Column({allowNull: false})
    imageUrl!: string;

    static asModel(body: IEducation): Education {
        const education = new Education()
        education.id = body.id || randomUUID()
        education.title = body.title
        education.desc = body.desc
        education.content = body.content
        education.imageUrl = body.imageUrl
        education.fileUrl = body.fileUrl
        education.createdAt = body.createdAt
        education.updatedAt = body.updatedAt
        return education
    }
}