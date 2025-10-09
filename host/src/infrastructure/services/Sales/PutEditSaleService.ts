import { PutEditSalesDTO } from "../../../domain/dtos/sales.dto";

export default async function PutEditSaleService({
  token,
  salesId,
  userId,
  status,
}: PutEditSalesDTO) {
  console.log("deu certo");
}
