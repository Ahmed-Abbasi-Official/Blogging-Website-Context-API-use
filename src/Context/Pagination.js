import { createContext, useContext } from "react";



const PaginationContext = createContext()

 export const PaginationProvider=PaginationContext.Provider;

 export default function usePagination(){
    return useContext(PaginationContext)
 }
