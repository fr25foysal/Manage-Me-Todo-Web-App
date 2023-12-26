import axios from "axios";

const usePublicAxios = () => {
    const data = axios.create({
        baseURL: 'http://localhost:5001',
      });
    return data
};

export default usePublicAxios;