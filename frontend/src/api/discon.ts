import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const discon = async (): Promise<void> => {
    try {
        const response = await api.post('/bouquet/disconnect');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};