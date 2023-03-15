import {Routes,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import {Store} from './pages/Store'
import {About }from './pages/About'
import { Home } from './pages/Home'
import { Navbar } from './componets/Navbar'
import { ShoppingCartProvider } from './context/ShoopingCartContext'


function App() {
   return(
   <ShoppingCartProvider>
    <Navbar />
    <Container className='mb-4'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Store' element={<Store/>}/>
      <Route path='/About' element={<About/>}/>
    </Routes>
  </Container>
</ShoppingCartProvider>
   )
}

export default App
