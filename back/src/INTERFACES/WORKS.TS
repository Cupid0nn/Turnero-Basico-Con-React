export default interface IUsers {
  id?: number;
  name: string;
  email: string;
  birthdate: string;
  nDni: number;
}

export interface IUserResponse {
  login: boolean;
  user: IUsers
}
 




  
