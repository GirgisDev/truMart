import {
  _getProducts,
  _getDepartments
} from './_DATA.js'

export function getInitialData() {
  return Promise.all([
    _getProducts(),
    _getDepartments()
  ]).then(([ products, departments ]) => ({
    products: {...products},
    departments: [...departments]
  }))
}

export function getProductsAPI(data) {
  return _getProducts(data).then(products => ({...products}))
}