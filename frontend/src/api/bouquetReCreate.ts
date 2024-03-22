import axios from 'axios';

interface RegenerateInputs {
    texts: string[];
}

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const postRegenerateInputs = async (inputs: RegenerateInputs): Promise<void> => {
    try {
        const response = await api.post('/bouquet/re-generate', inputs);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};
