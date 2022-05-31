import React, { useContext, useReducer, useEffect, useState} from 'react'

const url = 'https://api.unsplash.com/photos/?client_id=KXji445Ehw8wuQbtC-E-AXEM1g79gvtbohLoyMkj1mo&page=5';
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    
    
    return(
        <AppContext.Provider
        value={{
          
        }}
      >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}