import { prisma } from "../../lib/prisma";

export const getUsers = async () => {
  return await prisma.user.findMany();
  //    return prisma.$queryRaw`
  //     SELECT * FROM "User"
  //     ORDER BY id DESC
  //   `;
};

export const createUser = async (data: {
  name: string;
  phone: string;
  address?: string;
  depId: string
}) => {
  try {
    const existing = await prisma.user.findFirst({ where: { name: data.name } });
    if (existing) {
      throw new Error("User already exists");
    };
    return await prisma.user.create({
      data,
    });
  } catch (error) {
    throw error
  }

};
export const updateUser = async (data: {
  name: string;
  phone: string;
  address?: string
  depId: string
}, id: string
) => {
  try {
    const existing = await prisma.user.findFirst({ where: { name: data.name, NOT: { id: id } } });
  if (existing) {
    throw new Error("User already exists");
  };
  return await prisma.user.update({
    data,
    where: { id: id }
  });
  } catch (error) {
    throw error
  }
}

export const deleteUser = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
  if (!user) { throw new Error("user is not found") }
  return await prisma.user.delete({ where: { id: id } }); 
  } catch (error) {
    throw error
  }
}