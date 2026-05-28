// import { prisma } from "../../lib/prisma";

// export const userResolvers = {
//   Query: {
//     users: async () => {
//       return prisma.user.findMany();
//     },
//   },

//   Mutation: {
//     createUser: async (
//       _: any,
//       args: {
//         name: string;
//         phone: string;
//         address?: string;
//       }
//     ) => {
//       return prisma.user.create({
//         data: {
//           name: args.name,
//           phone: args.phone,
//           address: args.address,
//         },
//       });
//     },
//   },
// };
import * as userService from "../services/user.service";

export const userResolvers = {
  Query: {
    users: async () => {
      return userService.getUsers();
    },
  },

  Mutation: {
    createUser: async (
      _: any,
      args: {
        name: string;
        phone: string;
        address?: string;
      }
    ) => {
      return userService.createUser(args);
    },
  },
};