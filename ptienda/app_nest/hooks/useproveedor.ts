
import { IProveedor } from '@/interfaces/proveedor';
import useSWR, { SWRConfiguration } from 'swr';





export const useProveedor = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IProveedor[]>(`http://38.242.135.30:80/api${url}`, config);
    console.log("data = ", data, error);
    return {
        proveedor: data || [],
        isLoading: !error && data,
        isError: error
    }
}