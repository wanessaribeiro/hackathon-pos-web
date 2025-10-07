import { DeleteInventoryDTO } from "../../../domain/dtos/inventory..dto";

export default async function DeleteInventoryService({
  token,
  inventoryId,
  userId,
}: DeleteInventoryDTO) {
  const url =
    "http://localhost:3333/inventory/" + userId + "/delete/" + inventoryId;

  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
}
