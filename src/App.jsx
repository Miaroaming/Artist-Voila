import { HashRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Links from './routes/Links'
import Footer from './components/Footer'
import Home from './pages/Home'

const App = () => {

  return (
    <>
      <HashRouter>
        <Navbar/>
        <Links/>
        <Footer/>
      </HashRouter>
    </>
  )
}

export default App
