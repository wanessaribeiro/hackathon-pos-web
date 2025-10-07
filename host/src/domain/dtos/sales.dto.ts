import { Status } from "../Enums";
import { inventoryItem } from "../Types";

export interface PostCreateSalesDTO {
  token: string;
  userId: string;
  salesId: string;
  products: inventoryItem[];
  status: Status | string;
  buyer: string;
  seller: string;
}

export interface PutEditSalesDTO {
  token: string;
  userId: string;
  salesId: string;
  status: Status | string;
}

export interface DeleteSalesDTO {
  token: string;
  userId: string;
  salesId: string;
}
