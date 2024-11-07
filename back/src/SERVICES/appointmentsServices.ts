import contId from "../UTILS/getId";
import IApointments from "../INTERFACES/APOINTMENTS";
import IUsers from "../INTERFACES/WORKS";
import { AppointmentsEntity } from "../ENTITIES/appointmentsEntity";
import { AppDataSource } from "../CONFIG/data_source";
import { UserEntity } from "../ENTITIES/UserEntity";

const getId = contId(0);
const arrayReservations: IApointments[] = [];

const getAllappointments = async (userId: number): Promise<AppointmentsEntity[]> => {
  // const user = await userCredential.find({ where: { user: { id: ...} }, relations: ["user"],});
  
  const Repo = AppDataSource.getRepository(AppointmentsEntity);// const ent = {id, time, user} --> ent.user.id
  if (userId) {
  const result = await Repo.find({ where : {user: {id: userId}}, relations: ["user"]});
  return result;
  }
  const result = await Repo.find();
  if (!result.length) {
    console.log("Reservations not found");
  }
  return result;
};

const getAppointmentByIdService = async (id: number): Promise<AppointmentsEntity | null> => {
  const repo = AppDataSource.getRepository(AppointmentsEntity);
  const result = await repo.findOneBy({ id });

  if (result === null) {
    throw new Error("Reservation not found");
     return result;
  }

  return result;

};

const createAppointmentService = async ({
  userId,
  date,
  time,
}: {
  userId: number;
  date: Date;
  time: string;
}): Promise<void> => {
  const UserRepo = AppDataSource.getRepository(UserEntity);
  const userExist = await UserRepo.findOneBy({ id: userId });
  if (!userExist) {
    throw new Error("User not found");
  }
  const AppointmentRepo = AppDataSource.getRepository(AppointmentsEntity);

  const newReservation = new AppointmentsEntity();
  newReservation.time = time;
  newReservation.date = new Date(date);
  newReservation.user = userExist;
  newReservation.status = "active";
  await AppointmentRepo.save(newReservation)
};

const cancelAppointmentService = async  (id: number): Promise<void> => {
  const repo = AppDataSource.getRepository(AppointmentsEntity);
  const result = await repo.findOneBy({ id });
  if (!result) {
    throw new Error("Reservation not found");
  }
  result.status = "cancelled";
  await repo.save(result);
};

export {
  getAllappointments,
  getAppointmentByIdService,
  createAppointmentService,
  cancelAppointmentService,
};
