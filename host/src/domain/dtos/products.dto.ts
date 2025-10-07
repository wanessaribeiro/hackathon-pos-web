export interface PostCreateProductDTO {
  token: string;
  userId: string;
  productId: string;
  desc: string;
  name: string;
  prodPrice: number;
  salePrice: number;
}

export interface PutEditProductDTO {
  token: string;
  userId: string;
  productId: string;
  desc: string;
  name: string;
  prodPrice: number;
  salePrice: number;
}

export interface DeleteProductDTO {
  token: string;
  userId: string;
  productId: string;
}
