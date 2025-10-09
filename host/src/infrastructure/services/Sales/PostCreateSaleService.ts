import { PostCreateSalesDTO } from "../../../domain/dtos/sales.dto";

export default async function PostCreateSaleService({
  token,
  userId,
  salesId,
  buyer,
  products,
  seller,
  status,
}: PostCreateSalesDTO) {
  console.log("deu certo");
}
