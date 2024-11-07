import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name: "CHARACTERS",
})

export class character {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({unique: true})
    name!: string;

  //* CHARACTERS 1:1 VIDEOGAMES
}