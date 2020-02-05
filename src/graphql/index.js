import categories from './queries/categories.gql'
import products from './queries/products.gql'
import createCategory from './mutations/createCategory.gql'

export const categoryLists = {
  categories: categories,
  products: products
}

export const graphqlMutations = {
  createCategory: createCategory
}
