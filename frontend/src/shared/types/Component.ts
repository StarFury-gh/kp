export type ComponentType =
  | "процессор"
  | "видеокарта"
  | "оперативная память"
  | "жёсткий диск"
  | "блок питания";

export type Manufacturer =
  | "Intel"
  | "AMD"
  | "Nvidia"
  | "Kingston"
  | "G.Skill"
  | "Corsair"
  | "Samsung"
  | "WD"
  | "Seasonic"
  | "be quiet!";

export interface Component {
  id: string | number;
  name: string;
  type: ComponentType;
  manufacturer?: Manufacturer;
  price: number;
  image: string | undefined;
}
