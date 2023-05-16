import {Routes,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import './index.css'
import {About }from './pages/About'
import { Navbar } from './componets/Navbar'
import { ShoppingCartProvider } from './context/ShoopingCartContext'
import Home from './pages/Home'
import Order from './pages/Order'
import Footer from './componets/Footer'
import Orders from './componets/Orders'


function App() {
   return(
   <ShoppingCartProvider>
    <>
    <Navbar />
    <Container className='mb-4'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Order' element={<Order/>}/>
      <Route path='/Orders/:id' element={<Orders/>}/>
    </Routes>
  </Container>
  <Footer/>
  </>
</ShoppingCartProvider>
   )
}

export default App
