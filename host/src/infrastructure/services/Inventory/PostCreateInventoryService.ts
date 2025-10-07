import { PostCreateInventoryDTO } from "../../../domain/dtos/inventory..dto";

export default async function PostCreateInventorysService({
  token,
  userId,
  inventoryId,
  product,
  amount,
  prodQuota,
  saleQuota,
}: PostCreateInventoryDTO) {
  const url = "http://localhost:3333/inventory/" + userId + "/create";

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      id: inventoryId,
      product,
      amount,
      saleQuota,
      prodQuota,
    }),
  });
}
