import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useImageUploader = () => {
    const data = useMutation({
        mutationFn: ()=>{
        return axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`)
    }
    })
    return data
};

export default useImageUploader;