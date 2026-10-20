import { PcComponentsList } from "@/shared/ui";
import type { Component } from "@/shared/types";
import useComponents from "@/shared/hooks/useComponents";

function ComponentsCatalog() {
  const { components } = useComponents();

  const addToCart = (c: Component) => {
    const currentCart = localStorage.getItem("cart");

    if (!currentCart) {
      const newCart = [c];
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      const cart: Array<Component> = JSON.parse(currentCart);
      cart.push(c);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return (
    <PcComponentsList components={components} onComponentAdd={addToCart} />
  );
}

export default ComponentsCatalog;
