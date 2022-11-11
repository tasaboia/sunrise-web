
const storage = {

  
  //sessionStorage

    setSesseionLoggidIn : (login: string) => window.sessionStorage.setItem("login",JSON.stringify(login)),
    getSesseionLoggidIn : () => { return window.sessionStorage.getItem('login') },
    clearSesseionLoggidIn : () => window.sessionStorage.removeItem('login') ,

    setSessionEmail: (sessionEmail: any) => window.sessionStorage.setItem("sessionEmail", sessionEmail),
    setSessionPassword: (sessionPassword: any) => window.sessionStorage.setItem("sessionPassword", sessionPassword),
    getSessionEmail: () =>{ return window.sessionStorage.getItem('sessionEmail')  },
    getSessionPassword: () => { return window.sessionStorage.getItem('sessionPassword')  },
    clearSessionEmail: () => { window.sessionStorage.removeItem('sessionEmail')},
    clearSessionPassword: () => { window.sessionStorage.removeItem('sessionPassword')},
  
    setSessionToken: (token: string | undefined) => window.sessionStorage.setItem("token", JSON.stringify(token)),
    setSessionName: (user: any) => window.sessionStorage.setItem("name", JSON.stringify(user)),
    getSessionToken: () =>{ return sessionStorage.getItem("token")  },
    getSessionName: () =>{ return sessionStorage.getItem("name")  },
    clearSessionToken: () => window.sessionStorage.removeItem("user"),
    clearSessionName: () => window.sessionStorage.removeItem("name"),

  //localStorage

    setEmail: (email: any) => window.localStorage.setItem("email", JSON.stringify(email)),
    setPassword: (password: any) => window.localStorage.setItem("password", JSON.stringify(password)),
    getEmail: () =>{ return localStorage.getItem("email")  },
    getPassword: () =>{ return localStorage.getItem("password")  },
    clearEmail: () => window.localStorage.removeItem("email"),
    clearPassword: () => window.localStorage.removeItem("password"),


    getToken: () =>{ return localStorage.getItem("token")  },
    setToken: (token: any) => window.localStorage.setItem("token", JSON.stringify(token)),
    clearToken: () => window.localStorage.removeItem("token"),
    getUser: () => { return localStorage.getItem("user")  },
    setUser: (user: any) => window.localStorage.setItem("user", JSON.stringify(user)),
    clearUser: () => window.localStorage.removeItem("user")

  } 

export { storage } 

 