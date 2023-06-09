import {Column, Model, Table} from "sequelize-typescript";

@Table
export class Education extends Model<Education> implements IEducation {
    @Column
    title!: string;

    @Column
    desc!: string;

    @Column
    content!: string;

    @Column
    fileUrl!: string;

    @Column
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