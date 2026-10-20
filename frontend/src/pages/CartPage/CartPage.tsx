import { useCart } from "@/shared/hooks";
import { PcComponentsList } from "@/shared/ui";

function CartPage() {
  const { items } = useCart();
  return <PcComponentsList components={items} />;
}

export default CartPage;
