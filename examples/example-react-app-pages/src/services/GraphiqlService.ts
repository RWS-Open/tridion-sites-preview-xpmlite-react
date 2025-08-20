import { AxiosClient } from "../api/axiosClient";

export class GraphiqlService{
    private axiosClient:AxiosClient

    constructor(){
        this.axiosClient = new AxiosClient(import.meta.env.VITE_TRIDION_SITES_GRAPHQL_URL)
    }

    async getGraphqlData(data:any){
        try{    
            const response = await this.axiosClient.post<any>("", data)
            return response.data
        }catch(error:any){
            console.log(error)
            throw new Error("Failed to fetch the data", error)
        }
    }
}