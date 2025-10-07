import { PutEditProductionDTO } from "../../../domain/dtos/production.dto";

export default async function PutEditProductionService({
  token,
  productionId,
  userId,
  status,
}: PutEditProductionDTO) {
  const url =
    "http://localhost:3333/production/" + userId + "/edit/" + productionId;

  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ status }),
  });
}
