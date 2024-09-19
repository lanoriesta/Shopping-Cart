import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slice/cartSlices";

const CardItem = ({ item }) => {
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.cart);
  const handleAddCartItem = () => {
    dispatch(addToCart(item));
  };
  const hanldeRemoveItem = () => {
    console.log("item removed");
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="card-item-con">
      <div className="image-item-con">
        <img src={item.image} alt={item.title} />
      </div>
      <p>{item.title}</p>
      <button
        onClick={
          Cart.some((product) => product.id === item.id)
            ? hanldeRemoveItem
            : handleAddCartItem
        }
        className="add-cart-btn"
      >
        {Cart.some((product) => product.id === item.id)
          ? "Remove from the cart"
          : "Add to Cart"}
      </button>
    </div>
  );
};

export default CardItem;
