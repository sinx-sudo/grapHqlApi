export const userTypeDefs = `#graphql
  type User {
    id: String
    name: String
    phone: String
    address: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(
      name: String!
      phone: String!
      address: String
    ): User
  }
`;