import {Column, DataType, IsUrl, Model, PrimaryKey, Table} from "sequelize-typescript";
import {randomUUID} from "crypto";

@Table({tableName: "educations"})
export class Education extends Model<Education> implements IEducation {
    @PrimaryKey
    @Column({type: DataType.UUID, defaultValue: randomUUID()})
    id?: string

    @Column
    title!: string;

    @Column
    desc!: string;

    @Column
    content!: string;

    @IsUrl
    @Column({defaultValue: "https://api.github.com/users/utifmd"})
    fileUrl!: string;

    @IsUrl
    @Column({defaultValue: "https://via.plaveholder.com/150"})
    imageUrl!: string;

    static asResponse(body: IEducation): Education {
        const education = new Education()
        education.id = body.id
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