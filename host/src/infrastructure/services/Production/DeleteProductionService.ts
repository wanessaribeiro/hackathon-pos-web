import { DeleteProductionDTO } from "../../../domain/dtos/production.dto";

export default async function DeleteProductionService({
  token,
  productionId,
  userId,
}: DeleteProductionDTO) {
  console.log("deu certo");
}
