import { type Component } from "@/shared/types";

export const MockComponents: Component[] = [
  // Процессоры
  {
    id: 1,
    name: "Intel Core i3",
    type: "процессор",
    price: 14000,
    image: "/photos/intelCorei3.jpeg",
  },
  {
    id: 2,
    name: "Intel Core i5 12400F",
    type: "процессор",
    price: 22000,
    image: "/photos/intelCorei5.jpeg",
  },
  {
    id: 3,
    name: "AMD Ryzen 7 5800X",
    type: "процессор",
    price: 32000,
    image: undefined,
  },
  // Видеокарты
  {
    id: 4,
    name: "AMD Radeon RX 5500 XT",
    type: "видеокарта",
    price: 25000,
    image: "/photos/rx5500.jpeg",
  },
  {
    id: 5,
    name: "Nvidia RTX 4060",
    type: "видеокарта",
    price: 38000,
    image: "/photos/rtx4060.jpeg",
  },
  {
    id: 6,
    name: "Nvidia RTX 4090",
    type: "видеокарта",
    price: 160000,
    image: undefined,
  },
  // Оперативная память
  {
    id: 7,
    name: "Kingston Fury Beast 8GB DDR4",
    type: "оперативная память",
    price: 3500,
    image: undefined,
  },
  {
    id: 8,
    name: "G.Skill Trident Z RGB 16GB DDR4",
    type: "оперативная память",
    price: 8200,
    image: undefined,
  },
  {
    id: 9,
    name: "Corsair Vengeance 32GB DDR5",
    type: "оперативная память",
    price: 14500,
    image: undefined,
  },
  // Жёсткие диски
  {
    id: 10,
    name: "Samsung 870 EVO 250GB SSD",
    type: "жёсткий диск",
    price: 4200,
    image: undefined,
  },
  {
    id: 11,
    name: "WD Blue 1TB HDD",
    type: "жёсткий диск",
    price: 5800,
    image: undefined,
  },
  {
    id: 12,
    name: "Samsung 980 PRO 1TB NVMe SSD",
    type: "жёсткий диск",
    price: 12000,
    image: undefined,
  },
  // Блоки питания
  {
    id: 13,
    name: "Corsair CV450 450W",
    type: "блок питания",
    price: 4500,
    image: undefined,
  },
  {
    id: 14,
    name: "Seasonic Core GM 650W",
    type: "блок питания",
    price: 9800,
    image: undefined,
  },
  {
    id: 15,
    name: "be quiet! Dark Power 13 1000W",
    type: "блок питания",
    price: 22000,
    image: undefined,
  },
];
