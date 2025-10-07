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
  const url = "http://localhost:3333/product/" + userId + "/edit/" + productId;

  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ desc, name, prodPrice, salePrice }),
  });
}
