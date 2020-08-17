import {
  _getProducts,
  _getDepartments
} from './_DATA.js'

export function getInitialData(pageNum) {
  return Promise.all([
    _getProducts(pageNum),
    _getDepartments()
  ]).then(([ products, departments ]) => ({
    products: [...products],
    departments: [...departments]
  }))
}

export function getProductsAPI(pageNum) {
  return _getProducts(pageNum).then(products => [...products])
}