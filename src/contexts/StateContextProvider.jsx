import React, { createContext , useContext , useState } from 'react'
const StateContext = createContext()

const baseUrl = import.meta.env.VITE_API_SITE;

export default function StateContextProvider({ children }) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Elon Musk');

    const getResults = async(type) => {
        setLoading(true);
        const res = await fetch(`${baseUrl}${type}`,{
            method : 'GET',
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_API_KEY,
                'x-rapidapi-host': import.meta.env.VITE_API_HOST
            }
        });

        const data = await res.json();
        setResults(data);
        // console.log(data);
        setLoading(false);
    };
    return (
        <StateContext.Provider value={{getResults, results, searchTerm, setSearchTerm, loading}}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);
