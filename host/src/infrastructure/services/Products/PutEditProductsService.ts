import { PutEditProductDTO } from "../../../domain/dtos/products.dto";

export default async function PutEditProductService({
  token,
  productId,
  userId,
  desc,
  name,
  prodPrice,
  salePrice,
}: PutEditProductDTO) {
  console.log("deu certo");
}
