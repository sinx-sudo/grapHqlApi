import { userTypeDefs } from "./schema/user.schema";
import { userResolvers } from "./resolvers/user.resolver";
import { departmentTypeDefs } from "./schema/department.schema";
import { departmentResolvers } from "./resolvers/department.resolver";
export const typeDefs = [,
    userTypeDefs,
    departmentTypeDefs
];

export const resolvers = [
    userResolvers,
    departmentResolvers
];