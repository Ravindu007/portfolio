import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
