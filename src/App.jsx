import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Main, Login, Register} from "./components"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
