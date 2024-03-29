
import { ICategoria } from '@/interfaces/categorias';
import useSWR, { SWRConfiguration } from 'swr';



export const useCategorias = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<ICategoria[]>(`http://38.242.135.30:80/api${url}`, config);
    console.log("data = ", data, error);
    return {
        categorias: data || [],
        isLoading: !error && data,
        isError: error
    }
}