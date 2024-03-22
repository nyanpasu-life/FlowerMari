import axios from 'axios';

interface TextInputs {
    whom: string;
    situation: string;
    message: string;
}
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});
export const postTextInputs = async (inputs: TextInputs): Promise<void> => {
    try {
        const response = await api.post('/bouquet/text-input', inputs);
        console.log(response.data);

    } catch (error) {
        console.error(error);
    }
};