import { Request, Response } from "express";
import {
  createUserService,
  getAllUsersService,
  getUserByIdService,
} from "../../SERVICES/UserServices";
import { accessCREDENTIALsService } from "../../SERVICES/CredentialServices";

// obtener todos los usuarios

const getAllUsers = async (req: Request, res: Response) => {
  const users = await getAllUsersService();
  res.status(200).json(users);
};

// obtenerlos por id
const getUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await getUserByIdService(Number(id));
  if (user === null) {
    res.status(404).send("User not found");
  } else {
    res.status(200).json(user);
  }
};

// registrar usuario
const registerUser = async (req: Request, res: Response) => {
  const { id, name, email, birthdate, nDni, username, password } = req.body;
  createUserService({ id, name, email, birthdate, nDni }, username, password);

  res.status(201).send("El usuario se creado exitosamente");
};
// logearse
const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const resCredential = await accessCREDENTIALsService(username, password);
  if (resCredential) {
    res.status(200).json(resCredential);
  } else {
    res.status(400).json({ login: false });
  }
};

export { getAllUsers, getUserById, registerUser, loginUser };
