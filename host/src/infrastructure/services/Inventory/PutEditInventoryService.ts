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
  console.log("deu certo");
}
