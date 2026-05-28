import { prisma } from "../../lib/prisma";

export const getUsers = async () => {
  return prisma.user.findMany();
//    return prisma.$queryRaw`
//     SELECT * FROM "User"
//     ORDER BY id DESC
//   `;
};

export const createUser = async (data: {
  name: string;
  phone: string;
  address?: string;
}) => {
    const existing = await prisma.user.findFirst({where:{name:data.name}});
    if(existing) {
    throw new Error("User already exists");
  };
  return prisma.user.create({
    data,
  });
};
export const updateUser = async(data:{
    name: string;
    phone: string;
    address?: string
},    id: string
)=>{
     const existing = await prisma.user.findFirst({where:{name:data.name,NOT:{id:id}}});
    if(existing) {
    throw new Error("User already exists");
  };
  return prisma.user.update({
    data,
    where:{id:id}
  });
}

export const deleteUser = async (id:string)=>{
    const user = await prisma.user.findUnique({where:{id}});
    if(!user){ throw new Error("user is not found")}
    return prisma.user.delete({where:{id:id}});
}