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
  console.log("deu certo");
}
