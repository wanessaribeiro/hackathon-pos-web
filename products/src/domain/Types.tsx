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
