import React from 'react'
import Login from '../../pages/login';
import { Routes, Route, Link } from "react-router-dom";

export default function Public() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}
