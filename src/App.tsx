import UserInfo from "./Pages/UserInfo"
import Login from "./Pages/Login"
import UserOutput from "./Pages/UserOutput"
import Home from "./Pages/Home"
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import "./App.css"



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UserInfo" element={<UserInfo />} />
        <Route path="/UserOutput" element={<UserOutput />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App