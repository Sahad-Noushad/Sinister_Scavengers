import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Index from './pages'
import '../src/assets/style/main.css'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/home' element={<Home/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
