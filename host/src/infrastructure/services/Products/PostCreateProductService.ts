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
  const url = "http://localhost:3333/products/" + userId + "/create";

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ id: productId, desc, name, prodPrice, salePrice }),
  });
}
