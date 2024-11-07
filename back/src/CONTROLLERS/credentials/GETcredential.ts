import { Request, Response } from "express";
import { credentials } from "../../UTILS/CREDENTIALS";

const GETcredentials = (req: Request, res: Response): void => {
  const { username, password } = req.query;

  if (username && password) {
    const work = credentials.find(work => work.username === username && work.password === password);
    if (work) {
      res.send({ id: work.id });
    } else {
      res.status(404).json({ message: "No tienes acceso 🤓" });
    }
  } else {
    res.status(400).json({ message: "Faltan parámetros" });
  }
};

export default GETcredentials;