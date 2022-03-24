import "./App.css";
import { useState } from "react";
import data from "./Components/Data";
import Cart from "./Components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout1";
import Show from "./Components/Show";

function SubApp() {
  const { product } = data;
  const [cartItem, setCartItem] = useState([0]);

  const onAddCart = (val) => {
    const exist = cartItem.find((i) => i.id === val.id);
    if (exist) {
      setCartItem(
        cartItem.map((i) =>
          i.id === val.id ? { ...val, qty: exist.qty + 1 } : i
        )
      );
    } else {
      setCartItem([...cartItem, { ...val, qty: 1 }]);
    }
  };
  const onRemoveCart = (val) => {
    const exist = cartItem.find((i) => i.id === val.id);
    if (exist.qty === 1) {
      setCartItem(cartItem.filter((x) => x.id !== val.id));
    } else {
      setCartItem(
        cartItem.map((i) =>
          i.id === val.id ? { ...val, qty: exist.qty - 1 } : i
        )
      );
    }
  };
  const onRemoveWholeCart = (val) => {
    setCartItem(cartItem.filter((x) => x.id !== val.id));
  };
  const value = cartItem.reduce((a, b) => b.qty + a);
  console.log(cartItem);
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route
            path="/userhome"
            element={
              <App
                cartVal={value}
                product={product}
                cartItem={cartItem}
                onAddCart={onAddCart}
                onRemoveCart={onRemoveCart}
                onRemoveWholeCart={onRemoveWholeCart}
              />
            }
          />
          <Route path='/login' element={<Login/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route
            path="/cart"
            element={
              <Cart
                cartVal={2}
                cartItem={cartItem}
                onAddCart={onAddCart}
                onRemoveCart={onRemoveCart}
              />
            }
          />
          <Route path='/show' element={<Show/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default SubApp;
