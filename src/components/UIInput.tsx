import React from 'react';
import { Button  } from '@mui/material';
import { styled } from '@stitches/react';
import { User, Envelope, Lock, Eye, EyeSlash } from 'phosphor-react';
import { InputHTMLAttributes, useState } from "react"

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  icon?: "email" | "password" | "user"; 
  variant?: "error"
}

export default function UIInput(props: IInput) {
  const [password, setPassword] = useState(props.icon === "password" ? true : false);
  return (
    <Div variant={props.variant}>
      <Notification icon={props.icon}/>
      <Input type={password ? "password" : "text" } {...props}/>
      {props.icon === "password" ? 
        <Button style={{color:"#000"}} endIcon={ password ? <EyeSlash size={32}/> : <Eye size={32} />  } 
        onClick={() => setPassword(!password)}/> 
        : null }
    </Div>
  )
}

function Notification({icon = "email"}: IInput) {
    switch(icon) {
      case 'email':
        return <Envelope style={{margin: 4}} size={32}/>
      case 'password':
        return <Lock style={{margin: 4}} size={40}/>
      case 'user':
        return <User style={{margin: 4}} size={32} />
      default:
        return null
    }
  }

  
const Input = styled('input', {
  backgroundColor: '#fff',
  fontSize: '16px',
  width: "100%",
  padding: 5,
  color: "#686868",
  border: 0,
  '&:focus': {
    borderColor: "transparent",
    outline: "none",
  },
});

const Div = styled('div', {
  backgroundColor: '#fff',
  borderRadius: '5px',
  fontSize: '16px',
  width: "100%",
  maxHeight: "3rem",
  padding: 5,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  color: "#BABFC7",
  border: " 1px solid #ccc",
  marginTop: "1rem",
  '&:hover': {
    border: " 1px solid #ACACAC",
    color: "#ACACAC",
  },

  variants: {
    variant: {
      error: {
        border: " 1px solid red",
      }
    }
  }
});
