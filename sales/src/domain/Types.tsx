import { Status } from "./Enums";

export type product = {
  id: string;
  name: string;
  desc: string;
  prodPrice: number;
  salePrice: number;
};

export type inventoryItem = {
  id: string;
  product: product;
  amount: number;
  prodQuota: number;
  saleQuota: number;
};

export type saleItem = {
  id: string;
  products: inventoryItem[];
  seller: string;
  buyer: string;
  status: Status | string;
};
