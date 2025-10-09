import { DeleteProductDTO } from "../../../domain/dtos/products.dto";

export default async function DeleteProductService({
  token,
  productId,
  userId,
}: DeleteProductDTO) {
  console.log("deu certo");
}
