import { prisma } from "../../lib/prisma";

export const getDepartment = async () => {
    try {
        return await prisma.department.findMany({ orderBy: { id: "desc" } });
    } catch (error) {
        throw Error;
    }
}

export const createDepartment = async (data: {
    name: string;
    note: string;
}) => {
    try {
        const existing = await prisma.department.findFirst({ where: { name: data.name } });
        if (existing) {
            throw new Error("Department already exists");
        }
        return await prisma.department.create({ data });
    } catch (error) {
        throw error;
    }
}

export const updateDepartment = async (id: string, data: {
    name: string,
    note: string
}) => {
    try {
        const existing = await prisma.department.findFirst({ where: { name: data.name, NOT: { id: id } } });
        if (existing) {
            throw new Error("User already exists");
        };
        return await prisma.department.update({
            where: { id },
            data
        })
    } catch (error) {
        throw error
    }
}
export const deleteDepartment = async (id:string)=>{
    try {
        const dep = await prisma.department.findUnique({where:{id}});
        if(!dep) throw new Error("Department is not found");
        return await prisma.department.delete({where:{id}})
    } catch (error) {
        throw error
    }
}
//  async function examp (){

//  }
