import React from 'react';

import { styled } from '@stitches/react';
import { CaretRight } from 'phosphor-react';
import { InputHTMLAttributes, useState } from "react"

interface IInput extends InputHTMLAttributes<HTMLDivElement> {
  title?: string,
  data?: string,
  pray?: string,
}

export default function PrayerCard({title, data, pray}: IInput) {
  return (
    <Button >
        <Div>
            <Header>
                <Text size="large" color="black">{title}</Text>
                <Text  color="silver">{data}</Text>
            </Header>
            <Text>{pray} </Text>
        </Div>
        <CaretRight size={60} />
    </Button>
  )
}
  

const Button = styled('button', {
  backgroundColor: "white",
  width:"100%", 
  textTransform: "none",
  color: "black",
  padding: 6,
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
  margin: 0,
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
  margin: 4,
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

