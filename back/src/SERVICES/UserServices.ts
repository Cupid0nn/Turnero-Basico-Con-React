import { AppDataSource } from "../CONFIG/data_source";
import IUsers from "../INTERFACES/WORKS";
import { createCREDENTIALService } from "./CredentialServices";
import contId from "../UTILS/getId";
import { UserEntity } from "../ENTITIES/UserEntity";
import { CredentialEntity } from "../ENTITIES/CredentialEntity";
import { AppointmentsEntity } from "../ENTITIES/appointmentsEntity";

const arrayUsers: IUsers[] = [];

const getId = contId(0);

const getAllUsersService = async (): Promise<IUsers[]> => {
  const Repo = AppDataSource.getRepository(UserEntity);
  const result = await Repo.find();
  return result;
};

const getUserByIdService = async (id: number):  Promise<IUsers | null> => {
  const RepoUser = AppDataSource.getRepository(UserEntity);
  const resUser = await RepoUser.find({
    where: {
      id,
    },
    relations: ["appointments"],
  });

  if (!resUser.length) {
    console.log("User not found");
    return null;
  }

  return resUser[0];
};

const createUserService = async (
  newUser: IUsers,
  username: string,
  password: string
): Promise<void> => {
  const credential = new CredentialEntity()
  credential.username = username
  credential.password = password

  const user = new UserEntity()
  user.name = newUser.name;
  user.email = newUser.email;
  user.nDni = newUser.nDni;
  user.birthdate = newUser.birthdate;
  user.credential = credential
  const credentialcreada = AppDataSource.getRepository(CredentialEntity);
  await credentialcreada.save(credential);
  const Repo = AppDataSource.getRepository(UserEntity);
  await Repo.save(user);
};



export { getAllUsersService, getUserByIdService, createUserService };
