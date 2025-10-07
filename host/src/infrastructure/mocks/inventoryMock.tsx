import { inventoryItem } from "../../domain/Types";

export const inventoryMock: inventoryItem[] = [
  {
    amount: 1,
    id: "1233",
    prodQuota: 23,
    saleQuota: 233,
    product: {
      id: "1233",
      desc: "descricao do meu produto",
      name: "produto 233",
      prodPrice: 23,
      salePrice: 34,
    },
  },
  {
    amount: 1,
    id: "1233",
    prodQuota: 23,
    saleQuota: 233,
    product: {
      id: "1237",
      desc: "descricao do meu produto",
      name: "produto 2344",
      prodPrice: 23,
      salePrice: 34,
    },
  },
];
