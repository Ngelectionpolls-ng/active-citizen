import { useQuery } from "@tanstack/react-query";
import { api } from "./api";

export async function GetStatesAndLgas() {
    const response = await api.get('/states?limit=40&page=1&populateLgas=true');
    return response.data;
}
export const useGetStates = () =>{
    
    return useQuery({
         queryKey: ['states'],
         queryFn: GetStatesAndLgas,
     })
 }