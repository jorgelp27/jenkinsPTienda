import useSWR, { SWRConfiguration } from 'swr';
import { IProducto } from "@/interfaces/productos";




export const useProductos = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IProducto[]>(`http://38.242.135.30:80/api${url}`, config);
    console.log("data = ", data, error);
    return {
        productos: data || [],
        isLoading: !error && data,
        isError: error
    }
}