

import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Gallery from "../components/Gallery"


const Links = () => {
  return (
    <Routes>

        <Route exact path='/' element={<Gallery/>}/>
        <Route exact path='/' element={<Home/>}/>
        {/* <Route exact path='/biography' element={<Biography/>}/>
        <Route exact path='/gallery' element={<Gallery/>}/> */}

    </Routes>
  )
}

export default Links
