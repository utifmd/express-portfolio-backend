import {Column, Model, Table} from "sequelize-typescript";

@Table({timestamps: true})
export class Education extends Model<Education> {
    @Column
    title?: string;

    @Column
    desc?: string;

    @Column
    content?: string;

    @Column
    fileUrl?: string;

    @Column
    imageUrl?: string;
}