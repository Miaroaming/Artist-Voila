import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Biography from '../components/Biography'
import Gallery from "../components/Gallery"


const Links = () => {
  return (
    <Routes>

        <Route exact path='/' element={<Gallery/>}/>
        <Route exact path='/' element={<Home/>}/>
         <Route exact path='/' element={<Biography/>}/>
    </Routes>
  )
}

export default Links
