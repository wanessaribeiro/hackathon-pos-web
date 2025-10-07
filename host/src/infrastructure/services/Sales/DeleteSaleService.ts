import { DeleteSalesDTO } from "../../../domain/dtos/sales.dto";

export default async function DeleteSaleService({
  token,
  salesId,
  userId,
}: DeleteSalesDTO) {
  const url = "http://localhost:3333/sales/" + userId + "/delete/" + salesId;

  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
}
