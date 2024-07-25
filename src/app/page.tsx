"use client";

import { useState } from "react";
import styles from "@/styles/page.module.scss";
import Card, { ProductType } from "@/components/Card";
import Button from "@/components/Button";
import Skeleton from "@/components/Skeleton";
import { useDispatch } from "react-redux";
import { add } from "@/store/Cartslice";
import { CartItemType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const res = await fetch(
    "https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products"
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data.data;
};

export default function Home() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [visibleProducts, setVisibleProducts] = useState(8);

  const dispatch = useDispatch();

  const handleAdd = (product: ProductType) => {
    const cartItem: CartItemType = { ...product, quantity: 1 };
    dispatch(add(cartItem));
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
  };

  const calculateProgress = () => {
    return products.length > 0 ? (visibleProducts / products.length) * 100 : 0;
  };

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} />
            ))
          : products
              .slice(0, visibleProducts)
              .map((product: ProductType) => (
                <Card
                  key={product.id}
                  data={product}
                  onClick={() => handleAdd(product)}
                />
              ))}
      </div>
      <div className={styles.loadMore}>
        <div className={styles.progressBarContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
        <Button
          onClick={loadMoreProducts}
          text={
            visibleProducts < products.length
              ? "Carregar mais"
              : "Você já viu tudo"
          }
          color="secondary"
        />
      </div>
    </div>
  );
}
