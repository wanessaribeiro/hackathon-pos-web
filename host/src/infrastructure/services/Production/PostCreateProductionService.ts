import { PostCreateProductionDTO } from "../../../domain/dtos/production.dto";

export default async function PostCreateProductionsService({
  token,
  userId,
  productionId,
  products,
  status,
  supplier,
}: PostCreateProductionDTO) {
  const url = "http://localhost:3333/production/" + userId + "/create";

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      id: productionId,
      products,
      status,
      supplier,
    }),
  });
}
