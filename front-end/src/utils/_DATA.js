const products = [
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59347c",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "onn. Bluetooth On-Ear Headphones",
    price: 500,
    promoCode: "JAN10",
    promoActive: true,
    discount: .1,
    image: "https://source.unsplash.com/200x200/daily/?product,headphones",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59348a",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Lenovo Smart Tab M8 with Google Assistant",
    price: 99,
    promoCode: "JAN10",
    promoActive: false,
    discount: .1,
    image: "https://source.unsplash.com/200x200/daily/?product,tablet",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59349a",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Straight Talk Apple iPhone 7 w/32GB Prepaid Phone, Black",
    price: 199,
    promoCode: "JAN10",
    promoActive: false,
    discount: .1,
    image: "https://source.unsplash.com/200x200/daily/?product,phone",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59347d",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Texas Instruments TI-84 Plus Graphing Calculator, 10-Digit LCD",
    price: 88,
    promoCode: "JAN10",
    promoActive: true,
    discount: .1,
    image: "https://source.unsplash.com/200x200/daily/?product,calculator",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c593477",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Apple 10.2-inch iPad (Latest Model) Wi-Fi 32GB",
    price: 363,
    promoCode: "JAN10",
    promoActive: false,
    discount: .1,
    image: "https://source.unsplash.com/200x200/daily/?product,phone,apple",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59344f",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Lenovo 3 11' Celeron 4GB/32GB Chromebook",
    price: 375.99,
    promoCode: "cyberm",
    promoActive: true,
    discount: .13,
    image: "https://source.unsplash.com/200x200/daily/?product,chromebook",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59347e",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Lenovo IdeaPad 3 15' Laptop",
    price: 469.99,
    promoCode: "cyberm",
    promoActive: true,
    discount: .15,
    image: "https://source.unsplash.com/200x200/daily/?product,laptop1",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59349b",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Scooby Doo Backpack",
    price: 500,
    promoCode: "JAN10",
    promoActive: false,
    discount: .1,
    image: "https://source.unsplash.com/200x200/daily/?product,backpack1",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59313d",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Minecraft 5 Piece Backpack Set",
    price: 500,
    promoCode: "JAN10",
    promoActive: true,
    discount: .1,
    image: "https://source.unsplash.com/200x200/daily/?product,backpack2",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59317f",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Acer Swift 3 Laptop",
    price: 500,
    promoCode: "JAN10",
    promoActive: true,
    discount: .1,
    image: "https://source.unsplash.com/200x200/daily/?product,laptop2",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59324d",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Polo T-shirt (black)",
    price: 500,
    promoCode: "JAN10",
    promoActive: true,
    discount: .1,
    image: "https://source.unsplash.com/200x200/daily/?product,shirt",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59318a",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Casio digital watch",
    price: 500,
    promoCode: "JAN10",
    promoActive: true,
    discount: .1,
    image: "https://source.unsplash.com/200x200/daily/?product,watch",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59316b",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "UHD curved TV",
    price: 700,
    promoCode: "JAN10",
    promoActive: false,
    discount: .1,
    image: "https://source.unsplash.com/200x200/daily/?product,tv",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6b59316c",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "D-Link Router NA350C",
    price: 89,
    promoCode: "cyberm",
    promoActive: true,
    discount: .1,
    image: "https://source.unsplash.com/200x200/daily/?product,router",
  },
  {
    id: "f5acd4b8-0557-42c0-942e-a85a6b59314D",
    department_id: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "External WD Hard disk",
    price: 120,
    promoCode: "cyberm",
    promoActive: true,
    discount: .1,
    image: "https://source.unsplash.com/200x200/daily/?product,hdd",
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

export function _getProducts (pageNum) {
  return new Promise((res, rej) => {
    const startIndex = 12 * pageNum,
      endIndex = startIndex + 12;
    const slicedProducts = products.slice(startIndex, endIndex);
    setTimeout(() => res(slicedProducts), 1000)
  })
}
export function _getDepartments () {
  return new Promise((res, rej) => {
    setTimeout(() => res([...departments]), 1000)
  })
}
