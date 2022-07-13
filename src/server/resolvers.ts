// Apollo server  resolvers
import { Resolvers } from "../generated/resolvers-types"
import * as mail from "./nodemailer"

export const resolvers: Resolvers = {
  Query: {
    getHello() {
      return 'hello'
    },

    sendMail() {
      mail.main()
      return 'qwe'
    }
  },
}
