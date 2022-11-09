import { keyframes, styled } from '@stitches/react';

export const UIButton = styled('button', {
  backgroundColor: '#000',
  borderRadius: '10px',
  fontSize: '16px',
  width: "100%",
  height: "40px",
  marginTop: "1rem",
  color: "white",
  border: 0,
  boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  '&:hover': {
    backgroundColor: 'rgb(37, 37, 37)',
    
  },
  '&:focus': {
    backgroundColor: 'rgb(37, 37, 37)',
  },

  variants: {
    variant:{
        error: {
            border: '1px solid red',
        },
    }    
  }
});