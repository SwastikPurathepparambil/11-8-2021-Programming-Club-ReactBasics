import React from 'react';
import './product.css';

function Product(props) {
  return (
    <div className="product">
      <img className="imgSize" src={props.img} alt="" />
    </div>
  );
}

export default Product;