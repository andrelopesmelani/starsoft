"use client";

import Cart from "@/components/Cart";
import styles from "./Navbar.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/types/types";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="starsoft" />
      </div>
      <div className={styles.cart} onClick={() => setIsCartOpen(!isCartOpen)}>
        <img src="/images/bag.png" alt="bag" />
        <span className={styles.cartCount}>{cartItems.length}</span>
      </div>
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </nav>
  );
};

export default Navbar;
