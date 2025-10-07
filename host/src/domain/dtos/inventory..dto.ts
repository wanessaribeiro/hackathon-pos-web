import { product } from "../Types";

export interface PostCreateInventoryDTO {
  token: string;
  userId: string;
  inventoryId: string;
  product: product;
  amount: number;
  prodQuota: number;
  saleQuota: number;
}

export interface PutEditInventoryDTO {
  token: string;
  userId: string;
  inventoryId: string;
  product: product;
  amount: number;
  prodQuota: number;
  saleQuota: number;
}

export interface DeleteInventoryDTO {
  token: string;
  userId: string;
  inventoryId: string;
}
