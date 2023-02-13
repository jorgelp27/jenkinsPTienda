import { ICesta } from "@/interfaces/cesta";
import useSWR, { SWRConfiguration } from 'swr';



export const useCesta = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<ICesta[]>(`http://localhost:3000/api${url}`, config);
    console.log("data = ", data, error);
    return {
        cestas: data || [],
        isLoading: !error && data,
        isError: error
    }
}