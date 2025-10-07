import { DeleteProductDTO } from "../../../domain/dtos/products.dto";

export default async function DeleteProductService({
  token,
  productId,
  userId,
}: DeleteProductDTO) {
  const url =
    "http://localhost:3333/products/" + userId + "/delete/" + productId;

  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
}
