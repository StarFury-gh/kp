import { useState, useEffect } from "react";
import type { Component } from "@/shared/types";

interface useCartResult {
  items: Component[];
}

function useCart(): useCartResult {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const load = () => {
      const cart = localStorage.getItem("cart");

      if (cart) {
        const parsed = JSON.parse(cart);

        setItems(parsed);
      } else {
        setItems([]);
      }
    };
    load();
  }, []);

  return { items };
}

export default useCart;
