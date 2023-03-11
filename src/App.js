import React from 'react'
import { Container } from 'react-bootstrap'
import { Routes , Route } from 'react-router-dom'
import About from './componants/About'
import Home from './componants/Home'
import Navbar from './componants/Navbar'
import Store from './componants/Store'
import ShopingCartProvider  from './context/ShopingCartContext'


const App = () => {
  return (
  
    <ShopingCartProvider>
    <Navbar />
   <Container className='mb-4'>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/stor' element={<Store />}/>
    </Routes>

   </Container>
   </ShopingCartProvider>
   
  
   

  )
}

export default App;