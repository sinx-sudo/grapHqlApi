export const departmentTypeDefs = `#graphql
type Department{
id: String
name: String
note: String
}

input updateDepartmentInput{
    name:String!
    note: String
}

extend type Query{
    departments: [Department]
}

extend type Mutation {
    createDepartment(
    name: String!
    note: String
    ):Department

    updateDepartment(
    id:String!
    data:updateDepartmentInput!): Department

    deleteDepartment(
    id: String!): Department
}
`