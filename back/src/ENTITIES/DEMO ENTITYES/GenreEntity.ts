import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name: "GENRES",
})

export class genre {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({unique: true})
    name!: string;

   //* GENRES N:N VIDEOGAMES
  // * LA DECLARO EN LA PRINCIPAL OSEA VIDEOGAMES   
}