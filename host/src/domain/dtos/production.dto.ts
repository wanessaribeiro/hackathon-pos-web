import { Status } from "../Enums";
import { inventoryItem } from "../Types";

export interface PostCreateProductionDTO {
  token: string;
  userId: string;
  productionId: string;
  products: inventoryItem[];
  status: Status | string;
  supplier: string;
}

export interface PutEditProductionDTO {
  token: string;
  userId: string;
  productionId: string;
  status: Status | string;
}

export interface DeleteProductionDTO {
  token: string;
  userId: string;
  productionId: string;
}
