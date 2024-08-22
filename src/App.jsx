import { HashRouter } from 'react-router-dom'
import './App.css'
import Links from './routes/Links'

const App = () => {

  return (
    <HashRouter>
      <Links/>
    </HashRouter>
  )
}

export default App
