import { useNavigate } from "react-router-dom";

import { Button } from "@/shared/ui";

interface FeaturedProduct {
  name: string;
  specs: string;
  price: string;
  photo: string;
}

const products: FeaturedProduct[] = [
  {
    name: "AMD Ryzen 5 7600",
    specs: "6 ядер · 12 потоков · AM5",
    price: "17 990 ₽",
    photo: "/photos/cpu-amd-ryzen.jpg",
  },
  {
    name: "MSI GeForce RTX 4060 VENTUS 2X 8G OC",
    specs: "8 ГБ GDDR6",
    price: "34 990 ₽",
    photo: "/photos/gpu-msi-rtx.jpg",
  },
  {
    name: "Kingston FURY Beast 32 ГБ DDR5-6000",
    specs: "2×16 ГБ",
    price: "11 990 ₽",
    photo: "/photos/ram-kingston.jpg",
  },
];

function ProductCard({ product }: { product: FeaturedProduct }) {
  return (
    <article className="flex flex-col gap-4 rounded-xl border border-border bg-bg-sec p-4">
      <img
        src={product.photo}
        alt={product.name}
        className="h-40 w-full rounded-lg object-cover"
      />
      <div className="flex flex-col gap-2">
        <p className="min-h-12 text-base text-tprimary">{product.name}</p>
        <p className="text-sm text-tsecondary">{product.specs}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-mono text-xl text-tprimary">{product.price}</p>
        <Button>В корзину</Button>
      </div>
    </article>
  );
}

function FeaturedSection() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col gap-8">
      <div className="flex items-center justify-between gap-6">
        <h2 className="heading-lg flex-1">Популярные комплектующие</h2>
        <Button variant="ghost" onClick={() => navigate("/catalog")}>
          Смотреть все
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedSection;
