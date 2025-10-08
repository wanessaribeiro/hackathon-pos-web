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
  const url = "http://localhost:3333/sales/" + userId + "/create";

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      id: salesId,
      products,
      status,
      buyer,
      seller,
    }),
  });
}
