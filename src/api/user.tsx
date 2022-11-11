
import { httpAuth, Key } from './http';
import { IRegister, IRegisterResponse, ISingIn, ISingInResponse, ISingUp } from './type';

export async function signInWithPassword (data: ISingIn): Promise<ISingInResponse>{
    const response:ISingInResponse = await httpAuth.post(`accounts:signInWithPassword?key=${Key}`, data);
    return response
  }

export async function singUp(data: ISingUp){
  const response:ISingInResponse = await httpAuth.post(`accounts:signUp?key=${Key}`, data);
  return response.data
}
