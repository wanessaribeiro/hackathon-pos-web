import { DeleteProductionDTO } from "../../../domain/dtos/production.dto";

export default async function DeleteProductionService({
  token,
  productionId,
  userId,
}: DeleteProductionDTO) {
  const url =
    "http://localhost:3333/production/" + userId + "/delete/" + productionId;

  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
}
