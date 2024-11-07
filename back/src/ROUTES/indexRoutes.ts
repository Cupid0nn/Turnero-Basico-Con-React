import { Router } from "express";
import usersRouter from "./usersRoutes";
import AppointmentsRouter from "./AppointmentsRouter";
import CredentialsRouter from "./credentialRouter";

const indexRouter = Router();

indexRouter.use("/users", usersRouter);
indexRouter.use("/appointment", AppointmentsRouter);
indexRouter.use("/credentials", CredentialsRouter)

export default indexRouter;
