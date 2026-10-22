export type ComponentType =
  | "процессор"
  | "видеокарта"
  | "оперативная память"
  | "жёсткий диск"
  | "блок питания";

export interface Component {
  id: string | number;
  name: string;
  type: ComponentType;
  price: number;
  image: string | undefined;
}
