import React from 'react'
import { useAuth } from '../../context'

export default function Private() {
  const { logout }= useAuth()
  return (
    <button  onClick={()=> logout()}>Sair</button>
  )
}
