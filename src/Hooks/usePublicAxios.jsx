import axios from "axios";

const usePublicAxios = () => {
    const data = axios.create({
        baseURL: 'https://some-domain.com/api/',
      });
    return data
};

export default usePublicAxios;