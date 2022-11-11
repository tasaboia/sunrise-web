import React from 'react';

import { styled } from '@stitches/react';
import { CaretRight } from 'phosphor-react';
import { InputHTMLAttributes, useState } from "react"
import { Divider } from '@mui/material';

interface IInput extends InputHTMLAttributes<HTMLDivElement> {
  name: string,
  resume?: string,
  date: string,
}

export default function CounselingCard({name, resume, date}: IInput) {
  return (
    <Button >
        <Header>
            <Text size="large" color="black">{name}</Text>
            <Text>{resume}</Text>
            <Text>{date}</Text>
        </Header>
        <CaretRight size={24} />

    </Button>
  )
}
  

const Button = styled('button', {
  backgroundColor: "white",
  alignItems: "center",
  gap: 10,
  width:"100%", 
  textTransform: "none",
  color: "black",
  paddingLeft: 24,
  paddingRight: 6,
  marging: 4,
  border: 0,
  display: "flex",
  flexDirection: "row",
  '&:hover': {
    backgroundColor: "#FAFAFA",
  },
  '&:focus': {
    backgroundColor: "#F6F6F6",
  }
});

const Header = styled('div', {
  width:"100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 8,
  padding: 2, 
  variants: {
      variant: {
      error: {
          border: " 1px solid red",
      }
      }
  }
});


const Div = styled('div', {
  margin: 4,
  padding: 0, 
});



const Text = styled('text', {
  variants: {
    size: {
      [`x-small`]: {
          fontSize: "12",
      },
      small: {
        fontSize: "14",
      },
      medium: {
        fontSize: "20",
      },
      large: {
        fontWeight: "bolder",
        fontSize: "24",
      }
    },
    color: {
        white: {
            color: "white",
        },
        black: {
            color: "black",
        },
        silver: {
            color: "#ccc",
        },
    }
  }
});

