import { PostCreateProductDTO } from "../../../domain/dtos/products.dto";

export default async function PostCreateProductsService({
  token,
  userId,
  productId,
  desc,
  name,
  prodPrice,
  salePrice,
}: PostCreateProductDTO) {
  console.log("deu certo");
}
