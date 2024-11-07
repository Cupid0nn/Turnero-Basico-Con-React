import ICredential from "../INTERFACES/CREDENTIAL";
import contId from "../UTILS/getId";
import { CredentialEntity } from "../ENTITIES/CredentialEntity";
import { AppDataSource } from "../CONFIG/data_source"; 
import { IUserResponse } from "../INTERFACES/WORKS";

const arrayCredentials:ICredential[] = [];
const asignId = contId(0);


const createCREDENTIALService = (username: string, password: string): number => {

  const newUser:ICredential = {
    id: asignId(),
    username: username,
    password: password
  }

  arrayCredentials.push(newUser);

  return newUser.id;
}

const accessCREDENTIALsService = async (username: string, password: string): Promise<IUserResponse | null> => { // IUserResponse
  const userCredential = AppDataSource.getRepository(CredentialEntity);
  const user = await userCredential.find({ where: { username, password }, relations: ["user"],});
  if (!user.length) { // 0 =false // ! a la inversa
    // throw new Error("Credenciales incorrectas");
  return null;
  }
  const responseCredential: IUserResponse = {
    login: true,
    user: user[0].user
  }
  return responseCredential;
}



export { createCREDENTIALService, accessCREDENTIALsService };