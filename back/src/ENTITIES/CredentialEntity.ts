import { Column, Entity, OneToOne, PrimaryGeneratedColumn, Relation } from "typeorm";
import { UserEntity } from "./UserEntity";

@Entity()

export class CredentialEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({unique: true})
    username!: string;

    @Column()
    password!: string;

    // 1:1 con USERENTITY
    @OneToOne(() => UserEntity, (usr) => usr.credential)
    user!: Relation<UserEntity>
}