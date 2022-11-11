import { initReactQueryAuth } from 'react-query-auth';
import { ISingIn, ISingUp } from '../api/type';
import { signInWithPassword } from '../api/user';
import { storage } from '../storage/storage';

interface User {
    email?: string | null,
    displayName?: string | null,
    idToken?: string | null
}

interface Error {
  message: string;
}

async function loadUser (){
    let user: User = {
        displayName: null,
        idToken: null,
        email: null
    }
    if(storage.getSesseionLoggidIn()){
        const name = storage.getSessionName()
        const token = storage.getSessionToken()
        const email = storage.getSessionEmail()
        user = {
            displayName: name,
            idToken: token,
            email: email
        }
    }
    return user
}

async function loginFn (data: ISingIn){
    const res = await signInWithPassword(data)

    if(res){
        storage.setSesseionLoggidIn("true")
        storage.setSessionEmail(res.data.email)
        storage.setSessionName(res.data.displayName)
        storage.setSessionToken(res.data.idToken)
    }
    return res.data
}

async function registerFn (data: ISingIn){
    let user: User = {
        displayName: null,
        idToken: null,
        email: null
    }

    return user
}


async function logoutFn (){
    storage.clearEmail
    storage.clearToken
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
};

export const { AuthProvider, useAuth } = initReactQueryAuth<
  User,
  Error,
  ISingIn,
  ISingUp
>(authConfig);