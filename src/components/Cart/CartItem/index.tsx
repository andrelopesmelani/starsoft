"use client";

import { useDispatch } from "react-redux";
import styles from "./CartItem.module.scss";
import { CartItemType } from "@/types/types";
import { remove, updateQuantity } from "@/store/Cartslice";

interface CartItemProps {
  data: CartItemType;
}

const CartItem = ({ data }: CartItemProps) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(remove(data.id));
  };

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: data.id, quantity: data.quantity + 1 }));
  };

  const handleDecrease = () => {
    if (data.quantity > 1) {
      dispatch(updateQuantity({ id: data.id, quantity: data.quantity - 1 }));
    }
  };

  return (
    <div className={styles.cartItem}>
      <img src={data.image} alt={data.name} className={styles.img} />
      <div className={styles.center}>
        <span className={styles.name}>{data.name}</span>
        <p className={styles.description}>{data.description}</p>
        <div className={styles.priceContainer}>
          <img src="/images/eth.png" alt="ETH" />
          <span className={styles.price}>{data.price} ETH</span>
        </div>
        <div className={styles.quantity}>
          <span style={{ cursor: "pointer" }} onClick={handleDecrease}>
            -
          </span>
          <span>{data.quantity}</span>
          <span style={{ cursor: "pointer" }} onClick={handleIncrease}>
            +
          </span>
        </div>
      </div>
      <div className={styles.left}>
        <div className={styles.delete} onClick={handleRemove}>
          <img src="/images/delete.png" alt="delete" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
