import React,{createContext, useState} from 'react';
import data from '../data';

export const Context = createContext();

export const ContextProvider =props=>{
    const [contextData, setContextData] = useState(data);
    
    return(
        <Context.Provider
        value={{
            contextData,
            setContextData
        }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider