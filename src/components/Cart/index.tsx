"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import styles from "./Cart.module.scss";
import CartItem from "@/components/Cart/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, selectCartTotal, clearCart } from "@/store/Cartslice";
import { useState } from "react";
import Notification from "@/components/Notification";

interface CartProps {
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const Cart = ({ isCartOpen, setIsCartOpen }: CartProps) => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const [showNotification, setShowNotification] = useState(false);

  const handleCheckout = () => {
    dispatch(clearCart());
    setShowNotification(true);
    setIsCartOpen(false);
  };

  return (
    <>
      {showNotification && (
        <Notification
          message="Parabéns, sua compra foi realizada com sucesso!"
          onClose={() => setShowNotification(false)}
        />
      )}
      <motion.div
        className={styles.cart}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: isCartOpen ? "0%" : "100%" }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.header}>
          <div className={styles.back} onClick={() => setIsCartOpen(false)}>
            <img src="/images/arrow.png" alt="arrow" />
          </div>
          <span className={styles.title}>Mochila de compras</span>
          <div></div>
        </div>

        <motion.div
          className={styles.list}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {cartItems.length === 0 ? (
            <div className={styles.emptyContainer}>
              <p className={styles.emptyMessage}>Seu carrinho está vazio</p>
            </div>
          ) : (
            cartItems.map((item) => <CartItem key={item.id} data={item} />)
          )}
        </motion.div>
        <div>
          <div className={styles.totalContainer}>
            <span className={styles.total}>TOTAL</span>
            <div className={styles.amounted}>
              <img src="/images/eth.png" alt="ETH" />
              <span className={styles.price}>{cartTotal} ETH</span>
            </div>
          </div>
          <Button
            text="FINALIZAR COMPRA"
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Cart;
