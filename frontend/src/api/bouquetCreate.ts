import axios from 'axios';

interface TextInputs {
    whom: string;
    situation: string;
    message: string;
}

export const postTextInputs = async (inputs: TextInputs): Promise<void> => {
    try {
        const response = await axios.post('/bouquet/text-input', inputs);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};