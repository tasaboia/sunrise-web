import React, { createContext, ReactNode, useContext, useState } from 'react'
import { RegisterUser, signInWithPassword } from '../api/user'
import { IRegister, IRegisterResponse, ISingIn, ISingInResponse, IStatus } from './type'
import { useNavigate } from "react-router-dom";
import { useMutation } from '@tanstack/react-query';

interface AuthContextData {
  user?: ISingInResponse
  login: (userInfo :ISingIn) => Promise <void>
  logout: () => Promise <void>
  register: (newUSer: IRegister) => Promise <void>
  status: IStatus
}

export const AuthContext = createContext<AuthContextData>(
  {} as  AuthContextData,
)

type AuthProviderProps = {
  children?: ReactNode | undefined;
}

export function AuthProvider (props: AuthProviderProps ) {
  const [user, setUser] = useState<ISingInResponse>()
  const [status, setstatus] = useState<IStatus>({label: "", state: "sucess", open: false})
  let navigate = useNavigate();

  const singIn = useMutation(signInWithPassword, { 
    retry: 0 ,
    onSuccess: (data) => {
      setUser(data)      
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

  const singUp = useMutation(RegisterUser, { 
    retry: 0,
    onSuccess: (data) => {
      navigate("Login")
      setstatus({label: "Link de ativação da sua conta foi enviado para seu email." , state: "sucess", open: true})
      const timeId = setTimeout(() => {
        setstatus({ open: false, ...status });
      }, 6000)
      return () => {
        clearTimeout(timeId)
      }
    },
    
    onError: (err: string) => {
      setstatus({label: "Email já está sendo usado" , state: "error", open: true})
      const timeId = setTimeout(() => {
        setstatus({ open: false, ...status });
      }, 6000)
      return () => {
        clearTimeout(timeId)
      }
    }
  })

  async function login(userInfo: ISingIn ) {
    singIn.mutate(userInfo)
  }
  
  async function logout() {
    setUser(undefined)
    return
  }
  
  async function register ({name, email, password}: IRegister){
    singUp.mutate({name, email, password})
  }

  return <AuthContext.Provider value={{user, login, logout, register, status}}>
    <>
      {props.children}
    </>
    </AuthContext.Provider>
}

export function useAuth(){
  const context = useContext(AuthContext)
  return context
}