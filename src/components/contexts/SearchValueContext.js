import React, { createContext, useContext, useState } from "react";


const SearchContext = createContext("");


const SearchValueProvider =({children})=>{

    const [searchValue, setSearchValue] = useState("");

return(
    <SearchContext.Provider value= {{searchValue, setSearchValue}}>
        {children}
    </SearchContext.Provider>
)

}

const useSearchValue = ()=>{

    return useContext(SearchContext);
}

export {
    SearchContext,
    SearchValueProvider,
    useSearchValue,

}