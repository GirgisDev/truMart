const products = [
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59347c",
    departmentId: "66da7d1d-38e3-4689-8662-25250eb55bea",
    name: "onn. Bluetooth On-Ear Headphones",
    price: 500,
    promoCode: "JAN10",
    promoActive: true,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/7f85aeab-e88a-4587-81ce-1ef4b4f46970_1.24ab63d3adf65f29e955a8ff59dae46c.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59348a",
    departmentId: "d381243d-0d63-4753-9e68-179ae4d40b5d",
    name: "Lenovo Smart Tab M8 with Google Assistant",
    price: 99,
    promoCode: "JAN10",
    promoActive: false,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/4b57beb2-57e3-4cef-b1fe-066d8b1a549a_1.fd4143f89483ff4103ec9cb8c3bd892c.jpeg?odnWidth=200&odnHeight=200",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59349a",
    departmentId: "d381243d-0d63-4753-9e68-179ae4d40b5d",
    name: "Straight Talk Apple iPhone 7 w/32GB Prepaid Phone, Black",
    price: 199,
    promoCode: "JAN10",
    promoActive: false,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/b9ed106c-6470-4ec7-8b3b-56d078b534cd_1.b849d22f859b047c2ca655817d953248.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59347d",
    departmentId: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Texas Instruments TI-84 Plus Graphing Calculator, 10-Digit LCD",
    price: 88,
    promoCode: "JAN10",
    promoActive: true,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/9d0eb54b-9a47-436b-9092-d17b204964fb.6a5e181469e04cf8c426039ce55c6703.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c593477",
    departmentId: "d381243d-0d63-4753-9e68-179ae4d40b5d",
    name: "Apple 10.2-inch iPad (Latest Model) Wi-Fi 32GB",
    price: 363,
    promoCode: "JAN10",
    promoActive: false,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/5a2eb3bf-1451-4e9c-b1f4-d88749b3dc70_1.d991f3e907c2a2fd1ec909f78e856360.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59344f",
    departmentId: "66da7d1d-38e3-4689-8662-25250eb55bea",
    name: "Lenovo 3 11' Celeron 4GB/32GB Chromebook",
    price: 375.99,
    promoCode: "cyberm",
    promoActive: true,
    discount: .13,
    image: "https://i5.walmartimages.com/asr/7f0b0359-ffa3-4527-ba85-7d661fd834d9_4.463e5a62d27bfbe9a012092288c7f5d0.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59347e",
    departmentId: "66da7d1d-38e3-4689-8662-25250eb55bea",
    name: "Lenovo IdeaPad 3 15' Laptop",
    price: 469.99,
    promoCode: "cyberm",
    promoActive: true,
    discount: .15,
    image: "https://i5.walmartimages.com/asr/9f1fa491-066d-4422-b797-8e012096a3bc_2.75154aa7f4cb50b76268ea8b998853ab.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59349b",
    departmentId: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Scooby Doo Backpack",
    price: 500,
    promoCode: "JAN10",
    promoActive: false,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/22ded68d-0034-4da9-b3cc-dcee64b8f98d_1.b2ff5ba865274094c6e4db66b946cd04.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59313d",
    departmentId: "14f7f80d-c9dd-4e57-a76b-b1cc3c704495",
    name: "Minecraft 5 Piece Backpack Set",
    price: 500,
    promoCode: "JAN10",
    promoActive: true,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/6f13cc06-c57b-4c8b-bf31-bb02fb8eb5c8_1.26c61fe12dd9ad63fda45e7d965418dd.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59317f",
    departmentId: "66da7d1d-38e3-4689-8662-25250eb55bea",
    name: "Acer Swift 3 Laptop",
    price: 500,
    promoCode: "JAN10",
    promoActive: true,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/06ec3b2a-14dc-49e0-8ed4-2fa05788c6b2_1.ff05f3fc6a9afb1fd822201e9faa562b.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59324d",
    departmentId: "a673177c-617f-4ff3-8932-4e3fdc0f771e",
    name: "Polo T-shirt (black)",
    price: 500,
    promoCode: "JAN10",
    promoActive: true,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/f4d7abe6-e697-4fb7-b8b2-ef98ba2da038_1.d33859f77540291244bcfe575466a127.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59318a",
    departmentId: "088857bb-1bab-4772-b687-068467ae8ff5",
    name: "Casio digital watch",
    price: 19.97,
    promoCode: "JAN10",
    promoActive: true,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/21683758-a293-4629-b808-10543ecedbb1_1.147f8d5a3850fe8caa7c9e6a5a745edd.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6c59316b",
    departmentId: "66da7d1d-38e3-4689-8662-25250eb55bea",
    name: "UHD curved TV",
    price: 700,
    promoCode: "JAN10",
    promoActive: false,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/e78410d9-d427-4770-87c1-29c121ecd7ca_1.acf225a0662e9d356f3dc7819c191207.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
  },
  {
    id: "f5ecd4b9-0557-42c0-942e-a85a6b59316c",
    departmentId: "66da7d1d-38e3-4689-8662-25250eb55bea",
    name: "D-Link Router NA350C",
    price: 62.64,
    promoCode: "cyberm",
    promoActive: true,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/ec282d41-e532-4261-b85d-183fcab51d5f_1.86603dd24513bb3cdb5b9c6c82e2e795.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
  },
  {
    id: "f5acd4b8-0557-42c0-942e-a85a6b59314D",
    departmentId: "66da7d1d-38e3-4689-8662-25250eb55bea",
    name: "External WD Hard disk",
    price: 252.99,
    promoCode: "cyberm",
    promoActive: true,
    discount: .1,
    image: "https://i5.walmartimages.com/asr/1489db1a-d68c-4de7-aab8-dd0b018122f2.e3cb5c6ce5f013f5443ffb299b7b86e2.jpeg?odnHeight=200&odnWidth=200&odnBg=ffffff",
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
    name: "Wathces"
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

export function _getProducts (data) {
  const defaultData = {
    pageNum: 0,
    departmentId: null,
    searchKeyword: ""
  }
  data = Object.assign({}, defaultData, data);
  const items = filterProducts(data);
  const count = data.departmentId || data.searchKeyword ? filterProducts(data).length : products.length;
  return new Promise((res, rej) => {
    setTimeout(() => res({items, productsCount: count}), 1000)
  })
}

function filterProducts({ pageNum, searchKeyword, departmentId }) {
  let productsCopy = [...products];
  if (departmentId) productsCopy = filterByDepartment({ products: productsCopy, departmentId });
  if (searchKeyword) productsCopy = filterByKeyword({ products: productsCopy, searchKeyword });

  return getProductsPage({ products: productsCopy, pageNum })
}

function filterByDepartment({ departmentId, products }) {
  let filteredProducts = products.filter(product =>  product.departmentId === departmentId);
  return filteredProducts;
}

function filterByKeyword({ searchKeyword, products }) {
  searchKeyword = searchKeyword.toLowerCase();
  let filteredProducts = products.filter(product =>  product.name.toLowerCase().includes(searchKeyword));
  return filteredProducts;
}

function getProductsPage({ pageNum, products }) {
  const startIndex = 12 * pageNum,
    endIndex = startIndex + 12;
  return products.slice(startIndex, endIndex);
}

export function _getDepartments () {
  return new Promise((res, rej) => {
    setTimeout(() => res([...departments]), 1000)
  })
}
