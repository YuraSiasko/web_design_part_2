import axios from 'axios';

const API_URL = 'http://localhost:3000'; 

export const fetchClips = async (filters = {}) => {
    try {
        const response = await axios.get(`${API_URL}/clips`, {
            params: filters
        });

        return response.data; 
    } catch (error) {
        console.error("Помилка завантаження кліпів:", error);
        return []; 
    }
};
