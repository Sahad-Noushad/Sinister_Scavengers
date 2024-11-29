import {Route, BrowserRouter, Routes} from 'react-router-dom'
import '../src/assets/style/main.css'
import Home from './pages/Home'
import Index from './pages/Index'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/enter' element={<Login/>}/>
        <Route path='/join' element={<Signup/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
