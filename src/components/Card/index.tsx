'use client'

import {  useSelector } from "react-redux";
import Button from "@/components/Button";
import styles from "./Card.module.scss";
import { RootState } from "@/types/types";


export type ProductType = {
  id: number;
  description: string;
  image: string;
  name: string;
  price: number;
};

interface CardProps {
  data: ProductType;
  onClick: () => void;

}

const Card = ({ data, onClick }: CardProps) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const isInCart = cartItems.some(
    (item: { id: number }) => item.id === data.id
  );

  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <img src={data.image} alt={data.name} className={styles.productImage} />
        <h4 className={styles.productName}>{data.name}</h4>
        <p className={styles.description}>{data.description}</p>
      </div>
      <div className={styles.bottom}>
        <div className={styles.price}>
          <img src="/images/eth.png" alt="ETH" />
          {data.price} ETH
        </div>
        <Button onClick={onClick} text="COMPRAR" disabled={isInCart} />
      </div>
    </div>
  );
};

export default Card;
