import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./UserEntity";
import { TStatus } from "../INTERFACES/APOINTMENTS"

@Entity()

export class AppointmentsEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    date!: Date;

    @Column()
    time!: string;

    @Column()
    status!: TStatus;

    
    
    // relacion de N:1 con USERENTITYS
    @ManyToOne(() => UserEntity, (user) => user.appointments)
    user!: UserEntity
  
}