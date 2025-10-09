import { DeleteInventoryDTO } from "../../../domain/dtos/inventory..dto";

export default async function DeleteInventoryService({
  token,
  inventoryId,
  userId,
}: DeleteInventoryDTO) {
  console.log("deu certo");
}
