import CartProvider from './contexts/CartContext/CartContext'
import './App.css'
import {Container, Wrapper} from "./App.styles"
import Navbar from './components/Navbar/Navbar'
import SneakerImage from './components/SneakerImage/SneakerImage'
import ProductDescription from './components/ProductDescription/ProductDescription'






function App() {



  return (
    <CartProvider>
    <Container>
<Navbar/>
<Wrapper>
  <SneakerImage/>
  <ProductDescription />
</Wrapper>
    </Container>
    </CartProvider>
  )
}

export default App
