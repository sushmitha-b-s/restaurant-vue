import categories from './queries/categories.gql'
import products from './queries/products.gql'
import createCategory from './mutations/createCategory.gql'

export const graphqlQueries = {
  categories,
  products
}

export const graphqlMutations = {
  createCategory
}
