import { Status } from "./Enums";

export type user = {
  id: string;
  name: string;
  email: string;
};

export type dataDropdown = {
  label: string;
  value: string;
};

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

export type prodRequest = {
  id: string;
  products: inventoryItem[];
  supplier: string;
  status: Status;
};

export type saleItem = {
  id: string;
  products: inventoryItem[];
  seller: string;
  buyer: string;
  status: Status;
};
