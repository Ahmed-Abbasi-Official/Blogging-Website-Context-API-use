import { createContext, useContext } from "react";

const NavItemContext = createContext()


export const NavItemProvider = NavItemContext.Provider;

export default function useNavitem()
{
    return useContext(NavItemContext)
}

