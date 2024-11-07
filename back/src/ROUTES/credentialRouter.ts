import { Router } from "express";
import autentication from "../MIDDLEWARES/autentication";

import GETcredentials from "../CONTROLLERS/credentials/GETcredential";
import POSTcredentials from "../CONTROLLERS/credentials/POSTcredential";

const CredentialsRouter = Router();

CredentialsRouter.post("/", POSTcredentials);

CredentialsRouter.get("/", autentication, GETcredentials);

CredentialsRouter.get("/:id", autentication, GETcredentials);

export default CredentialsRouter;
