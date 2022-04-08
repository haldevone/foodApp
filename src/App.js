import Cart from './components/cart/Cart';
import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import { useState } from 'react';
import CartProvider from './store/CartProvider';
import Checkout from './components/checkout/Checkout';
import Footer from './components/layout/Footer';

function App() {

  const[cartIsShown, setCartIsShown] = useState();
  const[checkout, setCheckout] = useState(false);

  const showcartHandler = () =>{
    setCartIsShown(true);
  }

  const hidecartHandler = () =>{
    setCartIsShown(false);
  }

  const showCheckout = () => {
    setCheckout(true);
    setCartIsShown(false);
  }

  const hideCheckout = () => {
    setCheckout(false);
  }

  return (
    <CartProvider>
      
      {cartIsShown && <Cart onClose={hidecartHandler} onOrder={showCheckout}/>}
      <Header onShowCart={showcartHandler}/>
      {!checkout ? 
      <Meals /> :
      <Checkout onHideCheckout={hideCheckout}/>}
      <Footer />
    </CartProvider>
  );
}

export default App;
