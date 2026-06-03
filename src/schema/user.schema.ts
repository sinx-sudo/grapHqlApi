export const userTypeDefs = `#graphql
  type User {
    id: String
    name: String
    phone: String
    address: String

    depId: String
    department: Department
  }
    
   type Department {
    id: String
    name: String
    note: String

    users: [User]
  }

  type Query {
    users: [User]
    userByid(id:String!): User
    department: [Department]
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