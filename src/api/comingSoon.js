import axios from 'axios';
import { apiUrl } from './url';

const comingSoonUrl = apiUrl.comingSoon;

const crud = {
    read: async(url) => {
        const response = await axios.get(url);

        return response.data;
    },
};

export default {
    loadPageData: async() => crud.read(`${comingSoonUrl}/content`),
};
