import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage/Homepage'
import Login from './Login/Login'
import Register from './Register/Register'

function App() {

  return (
    <>
    <h2>I have changed </h2>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </>
  )
}

export default App
