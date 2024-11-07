import { Request, Response } from "express";
import ICredentials from "../../INTERFACES/CREDENTIAL";
import { credentials } from "../../UTILS/CREDENTIALS";


let tareaId: number = 3;

const POSTcredential = (
  req: Request<{}, {}, ICredentials>,
  res: Response
): void => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ message: "Faltan datos" });
    return;
  }
  const nuevaTarea: ICredentials = {
    id: tareaId++,
    username,
    password,
  };
  credentials.push(nuevaTarea); // ACAA 

  res.status(201).json(nuevaTarea.id);
};

export default POSTcredential;