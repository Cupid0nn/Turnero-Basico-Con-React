import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { VideoGame } from "./VideoGamesEntity";
import { join } from "path";

@Entity({
    name: "PLATFORMS",
})

export class platform {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({unique: true})
    name!: string;

   //* PLATFORMS 1:N VIDEOGAMES
   @OneToMany(type => VideoGame, VideoGame => VideoGame.platform)
   @JoinColumn({name: "game_id"})
   videogames!: VideoGame[]

}