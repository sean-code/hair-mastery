import './App.css';
import React, { useState } from 'react';
import Footer from './components/footer/footer';
import NavBar from './components/navbar/navbar';
import Routing from './Routes';
import Services from './components/services/services';
import Cart from './components/services/cart';

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);


  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
      <React.Fragment>
      <NavBar setShow={setShow} size={cart.length} />
          <Routing />
        <Footer />
      </React.Fragment>
  );
}

export default App;
