import { PostCreateProductionDTO } from "../../../domain/dtos/production.dto";

export default async function PostCreateProductionsService({
  token,
  userId,
  productionId,
  products,
  status,
  supplier,
}: PostCreateProductionDTO) {
  console.log("deu certo");
}
