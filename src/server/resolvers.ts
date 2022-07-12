import { Resolvers } from "../generated/resolvers-types"

export const resolvers: Resolvers = {
  Query: {
    getHello() {
      return 'hello'
    }
  },
}
