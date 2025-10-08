import { GetAccountDTO } from "../../../domain/dtos/account.dto";
import { accountMock } from "../../mocks/accountMock";

export default async function GetAccountService({ token }: GetAccountDTO) {
  return accountMock;
}
