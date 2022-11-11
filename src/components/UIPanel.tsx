import React from 'react';
import { Button  } from '@mui/material';
import { styled } from '@stitches/react';
import { User, Envelope, Lock, Eye, EyeSlash } from 'phosphor-react';
import { InputHTMLAttributes, useState } from "react"

interface IInput extends InputHTMLAttributes<HTMLDivElement> {
  title?: string;
  variant?: "error";
  children?: React.ReactNode | React.ReactNode []
}

export default function UIPanel(props: IInput) {
  
  return (
    <Parent>
        <CText>{props.title}</CText>
        <Div variant={props.variant} {...props}> {props.children}</Div>
    </Parent>
  )
}
  
const CText = styled('text', {
  fontSize: '16px',
  fontWeight: "bolder",
  width: "100%",
  color: "#686868",
  border: 0,
  '&:focus': {
    borderColor: "transparent",
    outline: "none",
  },
});

const Div = styled('div', {
  borderRadius: '5px',
  fontSize: '16px',
  width: "100%",
  height: "100%",
  color: "#BABFC7",
  border: " 1px solid #ccc",
  marginTop: ".5rem",
  overflow: "hidden",
  '&:hover': {
    border: " 1px solid #ACACAC",
    color: "#ACACAC",
  },
});


const Parent = styled('div', {
    width: "40%",
    height: "30vh",
    margin: 20,
    
  });
