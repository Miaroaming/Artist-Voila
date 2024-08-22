import { Route, Routes } from "react-router-dom"
import Gallery from "../components/Gallery"

const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Gallery/>}/>
    </Routes>
  )
}

export default Links
