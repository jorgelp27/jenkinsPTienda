


import { IAuth } from '@/interfaces/auth';
import useSWR, { SWRConfiguration } from 'swr';



export const useAuth = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IAuth[]>(`http://38.242.135.30:80/api${url}`, config);
    console.log("data = ", data, error);
    return {
        auth: data || [],
        isLoading: !error && data,
        isError: error
    }
}