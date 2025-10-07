import { PutEditInventoryDTO } from "../../../domain/dtos/inventory..dto";

export default async function PutEditInventoryService({
  token,
  inventoryId,
  userId,
  product,
  amount,
  prodQuota,
  saleQuota,
}: PutEditInventoryDTO) {
  const url =
    "http://localhost:3333/inventory/" + userId + "/edit/" + inventoryId;

  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ product, amount, saleQuota, prodQuota }),
  });
}
