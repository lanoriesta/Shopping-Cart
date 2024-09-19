import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardItem from "../../components/cardItem/CardItem";
import { Link } from "react-router-dom";

const CartPage = ({ cartActive }) => {
  const [totalCart, setTotalCart] = useState(0);
  const Cart = useSelector((state) => state.cart);

  useEffect(() => {
    setTotalCart(Cart.reduce((acc, curr) => acc + curr.price, 0));
    cartActive(false);
  }, [Cart]);

  return (
    <div className="container">
      {Cart && Cart.length ? (
        <div className="cart-container">
          <div className="container cart-item-con">
            {Cart.map((product) => (
              <CardItem item={product} key={product.id} />
            ))}
          </div>
          <div className="price-computation-con">
            <ul>
              {Cart.map((product) => (
                <li key={product.id} className="item-name-cart">
                  <span className="col-span-3">{product.title}</span>
                  <span className=" text-left w-1/4 text-green-500 font-bold">
                    ${product.price}
                  </span>
                </li>
              ))}
            </ul>
            <hr className="mt-4" />
            <div className="total-amount-con  p-4">
              <p className="col-span-3 text-xl font-bold">Total:</p>
              <p className="text-green-500 font-bold"> ${totalCart}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart-con">
          <h1>Empty</h1>
          <button className="shop-now-btn">
            <Link to={"/"}>Shop Now</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
