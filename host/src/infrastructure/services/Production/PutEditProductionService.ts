import { PutEditProductionDTO } from "../../../domain/dtos/production.dto";

export default async function PutEditProductionService({
  token,
  productionId,
  userId,
  status,
}: PutEditProductionDTO) {
  console.log("deu certo");
}
