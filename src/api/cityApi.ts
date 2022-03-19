import { ListResponse, city } from 'models'
import axiosClient from './axiosClient'
const cityApi ={
    getAll() : Promise<ListResponse<city>>{
        const url = '/cities'
        return axiosClient.get(url, {
            params: {
                _page: 1,
                _limit: 10
            }
        })
    }
}
export default cityApi