import { Link } from "react-router-dom";

interface Category {
  index: string;
  title: string;
  description: string;
}

const categories: Category[] = [
  {
    index: "01",
    title: "Процессоры",
    description: "AMD Ryzen и Intel Core для игр, работы и творчества.",
  },
  {
    index: "02",
    title: "Видеокарты",
    description:
      "NVIDIA GeForce и AMD Radeon для высокого FPS и детализации.",
  },
  {
    index: "03",
    title: "Материнские платы",
    description: "Платы AM5, LGA 1700 и LGA 1851 для разных конфигураций.",
  },
  {
    index: "04",
    title: "Оперативная память",
    description:
      "DDR4 и DDR5 для быстрого запуска приложений и многозадачности.",
  },
  {
    index: "05",
    title: "Накопители",
    description: "SSD NVMe, HDD и гибридные накопители для быстрой загрузки.",
  },
  {
    index: "06",
    title: "Корпуса и охлаждение",
    description:
      "Корпуса, вентиляторы, радиаторы и системы жидкостного охлаждения.",
  },
];

function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to="/catalog"
      className="flex flex-col gap-6 rounded-xl border border-border bg-bg-sec p-4 transition-colors hover:border-primary/50"
    >
      <div className="flex items-center justify-between">
        <img src="/icons/CategoryCube.svg" alt="" />
        <span className="font-mono text-xs text-tsecondary">
          {category.index}
        </span>
      </div>
      <div className="flex flex-col gap-4 text-sm">
        <p className="whitespace-nowrap text-tprimary">{category.title}</p>
        <p className="text-tsecondary">{category.description}</p>
      </div>
    </Link>
  );
}

function CategoriesSection() {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="heading-lg">Категории комплектующих</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {categories.map((category) => (
          <CategoryCard key={category.index} category={category} />
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection;
