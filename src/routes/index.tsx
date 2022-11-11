import React from 'react'
import { useAuth } from '../context';
import Private from './components/Private';
import Public from './components/Public';

export default function Routes() {
    const { isLoggingIn } = useAuth()
   
    return isLoggingIn ? <Private/> : <Public/>
}
