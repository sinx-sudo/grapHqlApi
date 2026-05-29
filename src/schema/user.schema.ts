export const userTypeDefs = `#graphql
  type User {
    id: String
    name: String
    phone: String
    address: String
    depId: String
  }

  type Query {
    users: [User]
    
  }


  input UpdateUserInput {
    name: String!
    phone: String!
    address: String
    depId: String
    }

    
  type Mutation {
    createUser(
      name: String!
      phone: String!
      address: String
      depId: String
    ): User

    updateUser(
        id: String!
        data: UpdateUserInput!
    ): User

    deleteUser(
    id: String
    ):User
    }
`;