import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'
import Pricing from './pages/pricing/Pricing'
import Schedule from './pages/schedule/Schedule'
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'

function App() {
 return(
  //
 <BrowserRouter>
    <NavBar />
    <Routes>
      <Route index element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/Pricing' element={<Pricing />}/>
      <Route path='/schedule' element={<Schedule />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/notFound' element={<NotFound />}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  
 )
  
    
}

export default App
