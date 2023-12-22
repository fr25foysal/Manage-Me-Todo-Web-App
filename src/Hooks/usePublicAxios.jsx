import axios from "axios";

const usePublicAxios = () => {
    const data = axios.create({
        baseURL: 'https://manageme-server.vercel.app',
      });
    return data
};

export default usePublicAxios;