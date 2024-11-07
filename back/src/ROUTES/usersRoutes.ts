import { Router } from "express";
import { getAllUsers, getUserById, loginUser, registerUser } from "../CONTROLLERS/USERCONTROLLERS/GETUsers";


const userRouter = Router();

 userRouter.get("/", getAllUsers);

 userRouter.get("/:id", getUserById);

 userRouter.post("/register", registerUser);

 userRouter.post("/login", loginUser); 

export default userRouter;
