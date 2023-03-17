import useSWR, { SWRConfiguration } from 'swr';
import { ICliente } from '../interfaces/clientes/IClientes';


export const useClientes = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<ICliente[]>(`http://38.242.135.30:80/api${url}`, config);
    console.log("data = ", data, error);
    return {
        clientes: data || [],
        isLoading: !error && data,
        isError: error
    }
}