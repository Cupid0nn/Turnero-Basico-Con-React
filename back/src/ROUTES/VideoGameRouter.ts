import { Router } from "express";
import { VideoGame } from "../ENTITIES/DEMO ENTITYES/VideoGamesEntity";
import { AppDataSource } from "../CONFIG/data_source";

const VideoGamesRouter = Router();

VideoGamesRouter.post("/", async (req, res) => {
    try {
      const { title, description, release_date, rating, price } = req.body;
  
      const newVideoGame = new VideoGame();
      newVideoGame.name = title;
      newVideoGame.description = description;
      newVideoGame.release_date = release_date;
      newVideoGame.rating = rating;
      newVideoGame.price = price;
      // agregar platform_id
  
      const savedVideoGame = await AppDataSource.manager.save(newVideoGame);
  
      res.status(201).json(savedVideoGame);
    } catch (error) {
      res.status(500).json({ error: "Failed to create video game" });
    }
  });
  

  VideoGamesRouter.get("/", async (req, res) => {
    try {
      const allvideoGames = await AppDataSource.manager.find(VideoGame);
      res.json(allvideoGames);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve video games" });
    }
  });

export default VideoGamesRouter;
