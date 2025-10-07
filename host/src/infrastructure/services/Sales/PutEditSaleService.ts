import { PutEditSalesDTO } from "../../../domain/dtos/sales.dto";

export default async function PutEditSaleService({
  token,
  salesId,
  userId,
  status,
}: PutEditSalesDTO) {
  const url = "http://localhost:3333/sales/" + userId + "/edit/" + salesId;

  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ status }),
  });
}
