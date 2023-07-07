import {DataType, Column, Model, NotNull, PrimaryKey, Table} from "sequelize-typescript";
import {randomUUID} from "crypto";

@Table({tableName: "files"})
export class File extends Model<File> implements IFile {
    @PrimaryKey
    @Column({type: DataType.UUID})
    id?: string

    @NotNull
    @Column({allowNull: false})
    mimeType!: string

    @NotNull
    @Column({allowNull: false})
    size!: number

    @NotNull
    @Column({
        type: DataType.BLOB("medium"), allowNull: false
    })
    buffer!: any

    static asModel(multer: Express.Multer.File) {
        const file = new File()
        file.id = randomUUID()
        file.mimeType = multer.mimetype
        file.size = multer.size
        file.buffer = multer.buffer
        return file
    }
}