import { Router } from "express";
import { getAllReservations, getOneReservation, createReservation, cancelReservation } from "../CONTROLLERS/appointments/appointmentController";

const ApointmentsRouter = Router();

 ApointmentsRouter.post("/schedule",createReservation );
 
 ApointmentsRouter.get("/", getAllReservations);

 ApointmentsRouter.get("/:id", getOneReservation );

 ApointmentsRouter.put("/:id/cancel", cancelReservation);

export default ApointmentsRouter;
