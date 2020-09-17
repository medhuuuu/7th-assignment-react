import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu/Menu';
import Carsoul from './components/Carsoul/Carsoul';
import Card from './components/Card/Card';
import Courses from './MOCK_DATA.json';
import Cart from './components/Cart/Cart';

function App() {
  const displayItems = Courses.slice(0,15);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(()=>{
    setItems(displayItems);
    // eslint-disable-next-line
  },[]);

  const handleCart = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  }
  return (
    <div>
      <Menu />
      <Carsoul />
      <ul>
        {
          items.map(card => <Card card={card} key={card.name}
            handleCart={handleCart}></Card>)
        }
      </ul>
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
}

export default App;
