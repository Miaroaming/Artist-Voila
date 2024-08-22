import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"

const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        {/* <Route exact path='/biography' element={<Biography/>}/>
        <Route exact path='/gallery' element={<Gallery/>}/> */}
    </Routes>
  )
}

export default Links
