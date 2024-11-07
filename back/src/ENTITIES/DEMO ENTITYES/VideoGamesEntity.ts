import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { platform } from "./plataformasEntity";
import {character} from "../DEMO ENTITYES/Characters";
import { genre } from "../DEMO ENTITYES/GenreEntity";
@Entity({
    name: "VIDEOGAMES",
})

export class VideoGame {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({unique: true})
    name!: string;

    @Column({type: "text"})
    description!: string;

    @Column({default: 250})
    price!: number;

    @Column({default: 4})
    rating!: number;

    @Column()
    release_date!: Date;

    //* VIDEOGAMES N:1 PLATFORMS
    @ManyToOne(type => platform , platform => platform.videogames)
    @JoinColumn({name: "platform_id"}) // FK
    platform!: platform

    //* VIDEOGAMES N:N GENRES	

    @ManyToMany(type => genre)
    @JoinTable({
        name: "VIDEOGAMES_GENRES",
        joinColumns: [{ name: "videogame_id"}],
        inverseJoinColumns: [{ name: "genre_id"}],

    })
    genres!: genre[]

    //* VIDEOGAMES 1:1 CHARACTERS
    @OneToOne(type => character)
    @JoinColumn({name: "character_id"}) // FK
    character!: character

    
}