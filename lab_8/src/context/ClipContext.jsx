import React, { createContext, useState, useContext, useMemo } from 'react';

const INITIAL_CLIPS = [
    { id: 1, artist: "The Weeknd", title: "Blinding Lights", duration: 200, views: 7000000000, type: "Pop", image: "https://www.musicbusinessworldwide.com/files/2021/06/Weekend-1296x803.jpeg" },
    { id: 2, artist: "Adele", title: "Hello", duration: 295, views: 3200000000, type: "Pop", image: "https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg" },
    { id: 3, artist: "Ed Sheeran", title: "Shape of You", duration: 263, views: 6100000000, type: "Pop", image: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg" },
    { id: 4, artist: "Imagine Dragons", title: "Believer", duration: 204, views: 2500000000, type: "Rock", image: "https://i.ytimg.com/vi/7wtfhZwyrcc/hqdefault.jpg" },
    { id: 5, artist: "Coldplay", title: "Viva La Vida", duration: 241, views: 1800000000, type: "Rock", image: "https://m.media-amazon.com/images/I/91BgHwJwdOL._UF1000,1000_QL80_.jpg" },
    { id: 6, artist: "Linkin Park", title: "Numb", duration: 188, views: 2000000000, type: "Rock", image: "https://djs.od.ua/img/cover/54_1751476322.jpg" },
    { id: 7, artist: "Dua Lipa", title: "Levitating", duration: 203, views: 1000000000, type: "Pop", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROIv2voquOzcF22MCM-K4c5CI0GNWejE5ZMQ&s" },
    { id: 8, artist: "Queen", title: "Bohemian Rhapsody", duration: 354, views: 1500000000, type: "Rock", image: "https://upload.wikimedia.org/wikipedia/uk/9/9f/Bohemian_Rhapsody.png" },
    { id: 9, artist: "Billie Eilish", title: "Bad Guy", duration: 194, views: 1300000000, type: "Pop", image: "https://upload.wikimedia.org/wikipedia/uk/3/33/Billie_Eilish_-_Bad_Guy.png" },
];

export const ClipContext = createContext();

export const ClipProvider = ({ children }) => {
    const [allClips] = useState(INITIAL_CLIPS);
    
    const [filters, setFilters] = useState({ 
        searchText: '', 
        type: 'all' 
    });

    const filteredClips = useMemo(() => {
        return allClips.filter(clip => {
            const matchesText = filters.searchText === '' || 
                                clip.title.toLowerCase().includes(filters.searchText.toLowerCase()) || 
                                clip.artist.toLowerCase().includes(filters.searchText.toLowerCase());
            
            const matchesType = filters.type === 'all' || clip.type === filters.type;

            return matchesText && matchesType;
        });
    }, [allClips, filters]);


    const value = {
        allClips,       
        filteredClips,  
        filters,
        setFilters     
    };

    return <ClipContext.Provider value={value}>{children}</ClipContext.Provider>;
};

export const useClips = () => useContext(ClipContext);