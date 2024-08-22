import { Routes, Route } from 'react-router-dom'
import Biography from '../components/Biography'

const Links = () => {
  return (
        <Routes>
            <Route exact path='/' element={<Biography/>}/>
        </Routes>
  )
}

export default Links
