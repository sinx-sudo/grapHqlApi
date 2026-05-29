import { 
    getDepartment,
    createDepartment,
    updateDepartment,
    deleteDepartment 
} from "../services/department.service";

export const departmentResolvers ={
    Query:{
        departments: async()=>{
            return await getDepartment();
        }
    },
    Mutation:{
        createDepartment: async(_:any,args:{
            name: string, note: string
        })=>{
            return await createDepartment(args)
        },

        updateDepartment: async(_:any, args:{
            id: string,
            data:{
                name: string,
                note: string
                // updateDepartmentInput
            }
        })=>{
             if(!args.id){throw new Error("ID is required!")};
            return await updateDepartment(args.id,args.data);
        },

        deleteDepartment: async(_:any, args:{id:string})=>{
            if(!args.id){throw new Error("ID is required!")};
            return await deleteDepartment(args.id);
        }
    }
}