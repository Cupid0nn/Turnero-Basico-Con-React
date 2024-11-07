import { Column, Entity, JoinColumn, OneToMany, OneToOne, Relation, PrimaryGeneratedColumn } from "typeorm";
import { AppointmentsEntity } from "./appointmentsEntity";
import { CredentialEntity } from "./CredentialEntity";

@Entity()

export class UserEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({unique: true})
    name!: string;

    @Column({unique: true})
    email!: string;

    @Column()
    birthdate!: string;

    @Column()
    nDni!: number;

    //relacion 1:N con ApointmentsEntity

    @OneToMany(() => AppointmentsEntity, (appointments) => appointments.user)
    appointments!: AppointmentsEntity[];

   // relacion 1:1 con CredentialEntity
   @OneToOne(() => CredentialEntity)
   @JoinColumn()
   credential!: Relation<CredentialEntity>;
  
}