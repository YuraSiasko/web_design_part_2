import React, { 
    createContext, 
    useState, 
    useContext, 
    useEffect, 
    useMemo 
} from 'react';

import { fetchClips } from '../api/api'; 
import Loader from '../components/Loader'; 

export const ClipContext = createContext();

export const ClipProvider = ({ children }) => {
    const [allClips, setAllClips] = useState([]); 
    
    const [isLoading, setIsLoading] = useState(true); 
    
    const [filters, setFilters] = useState({ 
        searchText: '', 
        type: 'all' 
    });

    useEffect(() => {
        const loadClips = async () => {
            setIsLoading(true); 

            const data = await fetchClips(filters); 
            
            setAllClips(data);
            
            setIsLoading(false); 
        };

        loadClips();
    }, [filters]); 

    
    const filteredClips = useMemo(() => {
        return allClips; 
    }, [allClips]);


    const value = {
        allClips,      
        filteredClips,  
        filters,
        setFilters,
        isLoading 
    };

    if (isLoading) {
        return <Loader />;
    }

    return <ClipContext.Provider value={value}>{children}</ClipContext.Provider>;
};

export const useClips = () => useContext(ClipContext);