import React, { useContext, useState, useEffect, createContext } from "react";

import date from "../assets/data.json";

const APIContext = createContext();

export const APIContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);    

    useEffect(() => {
        setUsers(date);
    }, []);

    return (
        <APIContext.Provider value={{ users }}>
            {children}
        </APIContext.Provider>
    );
    }

export const useAPI = () => useContext(APIContext);