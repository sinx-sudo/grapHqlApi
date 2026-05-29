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
      return await userService.getUsers();
    },
  },

  Mutation: {
    createUser: async (
      _: any,
      args: {
        name: string;
        phone: string;
        address?: string;
        depId: string
      }
    ) => {
      return await userService.createUser(args);
    },
    updateUser: async (_: any, args: {
      id: string;
      data: {
        name: string;
        phone: string;
        address?: string;
        depId: string
      };
    }) => {
      return userService.updateUser(args.data, args.id);
    },
    deleteUser: async (_: any, args: { id: string }) => {
      return await userService.deleteUser(args.id);
    }
  },
};