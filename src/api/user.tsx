
import { httpAuth, httpCloud, Key } from './http';
import { IRegister, IRegisterResponse, ISingIn, ISingInResponse, ISingUp } from './type';

export async function signInWithPassword (data: ISingIn): Promise<ISingInResponse>{
    const response:ISingInResponse = await httpAuth.post(`accounts:signInWithPassword?key=${Key}`, data);
    return response
  }

export async function singUp(data: ISingUp){
  const response:ISingInResponse = await httpAuth.post(`accounts:signUp?key=${Key}`, data);
  return response.data
}

export async function RegisterUser(data: IRegister): Promise<IRegisterResponse | null>{
  const response = await httpCloud.post("user", data);
  return response.data
}
  