import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { signInWithPassword } from '../api/user'
import { IRegister, IRegisterResponse, ISingIn, ISingInResponse, IStatus } from './type'
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from '@tanstack/react-query';
import { storage } from '../storage/storage';
import Loading from '../components/Loading';
import { isConstructorDeclaration } from 'typescript';


interface AuthContextData {
  user: ISingInResponse | null | undefined
  isLoggingIn: boolean | undefined
  login: (userInfo :ISingIn) => Promise <void>
  logout: () => Promise <void>
  loadUser: () => Promise <boolean>
}

export const AuthContext = createContext<AuthContextData>(
  {} as  AuthContextData,
)

type AuthProviderProps = {
  children?: ReactNode | undefined;
}

export function AuthProvider (props: AuthProviderProps ) {
  const [user, setUser] = useState<ISingInResponse | null | undefined>()
  const [isLoggingIn, setisLoggingIn] = useState<boolean>(false)
  const [status, setstatus] = useState<IStatus>({label: "", state: "sucess", open: false})
  let navigate = useNavigate();

  const singIn = useMutation(signInWithPassword, { 
    retry: 0 ,
    onSuccess: (data) => {
      setisLoggingIn(true)
      storage.setSesseionLoggidIn("true")
      storage.setSessionEmail(data.data.email)
      storage.setSessionToken(data.data.idToken)

      setUser({
        displayName: data.data.displayName,
        email: data.data.email,
        expiresIn: data.data.expiresIn,
        idToken: data.data.idToken,
        kind : data.data.kind,
        localId: data.data.localId,
        refreshToken: data.data.refreshToken,
        registered: data.data.registered,
      }) 
      
    },
    onError: (err: string) => {
      setstatus({label: "Usuário ou senha não correspondem" , state: "error", open: true})
      const timeId = setTimeout(() => {
        setstatus({ open: false, ...status });
      }, 6000)
      
      return () => {
        clearTimeout(timeId)
      }
    }
  })


  async function loadUser() {
    if(storage.getSesseionLoggidIn()){
      setisLoggingIn(true)
    } else{
      setisLoggingIn(false)
    }
    return isLoggingIn
  }

  async function login(userInfo: ISingIn ) {
    singIn.mutate(userInfo)

  }
  
  async function logout() {
    setUser(undefined)
    storage.clearSessionToken()
    storage.clearSessionEmail()
    storage.clearSesseionLoggidIn()
    console.log(storage.getSesseionLoggidIn())
    setisLoggingIn(false)   
    return
  }

  const result = useQuery({ queryKey: ['load-user'], queryFn: loadUser })

  
  const value = React.useMemo(
    () => ({
      user,
      login,
      isLoggingIn,
      logout,
      loadUser,
    }),
    [
      user,
      isLoggingIn,
      logout,
      login,
      loadUser,    
    ]
  );
  
  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}

export function useAuth(){
  const context = useContext(AuthContext)
  return context
}