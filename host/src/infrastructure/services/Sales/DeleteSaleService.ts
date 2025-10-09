import { DeleteSalesDTO } from "../../../domain/dtos/sales.dto";

export default async function DeleteSaleService({
  token,
  salesId,
  userId,
}: DeleteSalesDTO) {
  console.log("deu certo");
}
