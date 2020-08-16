const products = [
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59347c",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "onn. Bluetooth On-Ear Headphones",
    price: 500,
    promoCode: "JAN10",
    promoActive: true,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/07de2d93-505b-4902-8366-388a3f30e3b4.9375c5690645733ec080eef3f4895f7b.jpeg?odnWidth=408&odnHeight=408&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59348a",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Lenovo Smart Tab M8 with Google Assistant",
    price: 99,
    promoCode: "JAN10",
    promoActive: false,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/07de2d93-505b-4902-8366-388a3f30e3b4.9375c5690645733ec080eef3f4895f7b.jpeg?odnWidth=408&odnHeight=408&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59349a",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Straight Talk Apple iPhone 7 w/32GB Prepaid Phone, Black",
    price: 199,
    promoCode: "JAN10",
    promoActive: false,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/07de2d93-505b-4902-8366-388a3f30e3b4.9375c5690645733ec080eef3f4895f7b.jpeg?odnWidth=408&odnHeight=408&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59347d",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Texas Instruments TI-84 Plus Graphing Calculator, 10-Digit LCD",
    price: 88,
    promoCode: "JAN10",
    promoActive: true,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/07de2d93-505b-4902-8366-388a3f30e3b4.9375c5690645733ec080eef3f4895f7b.jpeg?odnWidth=408&odnHeight=408&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c593477",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Apple 10.2-inch iPad (Latest Model) Wi-Fi 32GB",
    price: 363,
    promoCode: "JAN10",
    promoActive: false,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/07de2d93-505b-4902-8366-388a3f30e3b4.9375c5690645733ec080eef3f4895f7b.jpeg?odnWidth=408&odnHeight=408&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59344f",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Lenovo 3 11' Celeron 4GB/32GB Chromebook",
    price: 375.99,
    promoCode: "cyberm",
    promoActive: true,
    discount: .13,
    image: "https://i5.walmartimages.com/asr/07de2d93-505b-4902-8366-388a3f30e3b4.9375c5690645733ec080eef3f4895f7b.jpeg?odnWidth=408&odnHeight=408&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59347e",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Lenovo IdeaPad 3 15' Laptop",
    price: 469.99,
    promoCode: "cyberm",
    promoActive: true,
    discount: .15,
    image: "https://i5.walmartimages.com/asr/07de2d93-505b-4902-8366-388a3f30e3b4.9375c5690645733ec080eef3f4895f7b.jpeg?odnWidth=408&odnHeight=408&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59349b",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Scooby Doo Backpack",
    price: 500,
    promoCode: "JAN10",
    promoActive: false,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/07de2d93-505b-4902-8366-388a3f30e3b4.9375c5690645733ec080eef3f4895f7b.jpeg?odnWidth=408&odnHeight=408&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59313d",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Minecraft 5 Piece Backpack Set",
    price: 500,
    promoCode: "JAN10",
    promoActive: true,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/07de2d93-505b-4902-8366-388a3f30e3b4.9375c5690645733ec080eef3f4895f7b.jpeg?odnWidth=408&odnHeight=408&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59317f",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Acer Swift 3 Laptop",
    price: 500,
    promoCode: "JAN10",
    promoActive: true,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/07de2d93-505b-4902-8366-388a3f30e3b4.9375c5690645733ec080eef3f4895f7b.jpeg?odnWidth=408&odnHeight=408&odnBg=ffffff",
  },
];

const departments = [
  {
    id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Office supplies"
  },
  {
    id: "66da7d1d-38e3-4689-8662-25250eb55bea",
    name: "Electronics"
  },
  {
    id: "d381243d-0d63-4753-9e68-179ae4d40b5d",
    name: "Cell phones"
  },
  {
    id: "088857bb-1bab-4772-b687-068467ae8ff5",
    name: "Gifts"
  },
  {
    id: "a673177c-617f-4ff3-8932-4e3fdc0f771e",
    name: "Clothing"
  },
  {
    id: "2abcc65a-3ea4-40ba-a8a1-0b053b77c4b8",
    name: "Baby"
  },
  {
    id: "1b1d7451-8f95-4620-abce-fdbcc65e431d",
    name: "Toys"
  },
]

export function _getProducts () {
  return new Promise((res, rej) => {
    setTimeout(() => res([...products]), 1000)
  })
}
export function _getDepartments () {
  return new Promise((res, rej) => {
    setTimeout(() => res([...departments]), 1000)
  })
}
