import { Request, Response } from "express";
import {
  getAllappointments,
  getAppointmentByIdService,
  createAppointmentService,
  cancelAppointmentService,
} from "../../SERVICES/appointmentsServices";

const getAllReservations = async (req: Request, res: Response) => {
  const { userID }  = req.query
  const reservations = await getAllappointments(Number(userID));
  res.status(200).json(reservations);
};

// por Id
const getOneReservation = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
  const reservation = await getAppointmentByIdService(Number(id));
  res.status(200).json(reservation);
  } catch (error) {
    res.status(404).json({ error: "Reservation not found" });
  }
};
const createReservation = async (req: Request, res: Response) => {
  const { userId, date, time } = req.body;
  try {
    await createAppointmentService({ userId, date, time });
    res.status(201).send("La reservación se ha realizado con éxito");
  } catch (error) {
    res.status(400).json({ error: "Failed to create reservation" });
  }
};
const cancelReservation = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {

  
  await cancelAppointmentService(Number(id));
  res.status(200).send("La reservación se ha cancelado con éxito");
  }
  catch (error) {
    res.status(404).json({ error: "Reservation not found" });
  }

};

export {
  getAllReservations,
  getOneReservation,
  createReservation,
  cancelReservation,
};
