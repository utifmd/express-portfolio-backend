import {Column, DataType, Model, NotNull, PrimaryKey, Table} from "sequelize-typescript";

@Table({tableName: "files"})
export class File extends Model<File> implements IFile{
    @PrimaryKey
    @Column({type: DataType.UUID})
    id?: string

    @NotNull
    @Column({
        type: DataType.BLOB("medium"), allowNull: false
    })
    value!: any
}