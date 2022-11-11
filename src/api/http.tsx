import axios from "axios"

export const httpAuth = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/"
})

export const Key = "AIzaSyAtjLxCLkwMT3WFgKXV6WPkknkn1GRffFA"