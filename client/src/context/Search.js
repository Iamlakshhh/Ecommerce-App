import { useState, useContext, createContext } from "react";

const SearchContext = createContext()



const SearchProvider = ({children}) => {
    const [auth,setAuth] = useState({
        keyword:"",
        reults:[],
    });
    
    return (
        <SearchContext.Provider value={[auth,setAuth]}>
            {children}
        </SearchContext.Provider>
    )
}

//custpm hook
 const useSearch = ()=> useContext(SearchContext)

 export {useSearch, SearchProvider};