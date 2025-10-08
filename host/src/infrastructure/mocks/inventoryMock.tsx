import { inventoryItem } from "../../domain/Types";

export const inventoryMock: inventoryItem[] = [
  {
    amount: 500,
    id: "3412",
    prodQuota: 230,
    saleQuota: 230,
    product: {
      id: "13173",
      desc: "Leite integral pastelrizado em caixa, 1L.",
      name: "Leite integral",
      prodPrice: 2,
      salePrice: 6,
    },
  },
  {
    amount: 112,
    id: "8962",
    prodQuota: 200,
    saleQuota: 50,
    product: {
      id: "041731",
      desc: "Manteiga de leite, 500g.",
      name: "Manteiga de leite",
      prodPrice: 11,
      salePrice: 21,
    },
  },
  {
    amount: 230,
    id: "4567",
    prodQuota: 203,
    saleQuota: 150,
    product: {
      id: "93131",
      desc: "Requeijão sem amido, 250g.",
      name: "Requeijão",
      prodPrice: 23,
      salePrice: 34,
    },
  },
];
