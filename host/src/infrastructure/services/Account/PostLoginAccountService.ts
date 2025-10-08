import { PostLoginAccountDTO } from "../../../domain/dtos/account.dto";
import { loginMock } from "../../mocks/loginMock";

export default async function PostLoginAccountService({
  email,
  password,
}: PostLoginAccountDTO) {
  return await loginMock;
}
