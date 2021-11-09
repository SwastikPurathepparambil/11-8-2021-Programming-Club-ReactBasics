import React, {useState} from 'react';
import Navbar from './Navbar.jsx'
import Product from './Product'
import './App.css';

function App() {
  const [productName, setProductName] = useState("");
  const [productImg, setProductImg] = useState("");

  const setImg = (animal) => {
    if (animal === "cat") {
      setProductName("This is a cat thats biting")
      setProductImg("https://i.pinimg.com/originals/1b/ef/b5/1befb5723f54627768e1d77642ca4d45.jpg");
    } else {
      setProductName("This boi a dog")
      setProductImg("https://i.pinimg.com/originals/0a/d6/68/0ad66803bf8914c5c653edcaa652f28f.jpg");
    }
  }

  return (
    <div className="main">
      <Navbar name={productName} />
      <Product img={productImg} />
      <button onClick={() => setImg("cat")}>Cat</button>
      <button onClick={() => setImg("dog")}>Dog</button> 
    </div>
  );
}

export default App;