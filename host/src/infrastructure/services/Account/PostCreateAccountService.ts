import { PostCreateAccountDTO } from "../../../domain/dtos/account.dto";

export default async function PostCreateAccountService({
  name,
  email,
  password,
}: PostCreateAccountDTO) {
  console.log("deu certo");
}
