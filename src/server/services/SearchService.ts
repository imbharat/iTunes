import axios from 'axios';
import { resultCache } from '../cache/Cache'

const URL = `https://itunes.apple.com/search`;

class SearchService {
    fetchData = async (filter: any) => {
        try
        {
            const filterObj = { ...filter };
            delete filterObj.page;
            const cacheKey = JSON.stringify(filterObj);
            if(!resultCache.has(cacheKey)){
                const data = await axios.get(URL, {
                    params: {
                        ...filter,
                        term: filter.term || (Math.random() + 1).toString(36).substring(10),
                        limit: filter.limit || 10
                    }
                });
                if(data?.data?.results){
                    resultCache.set(cacheKey, data.data.results)
                }
            }
            const storedCache = resultCache.get(cacheKey) as [];
            const result = storedCache.slice(
                ((filter.page || 1) * 10) - 10,
                (filter.page || 1) * 10
            );
            const isLast = result.length < 10;
            return {
                data: result,
                isLast
            };
        } catch (ex) {
            console.log(ex);
            throw ex;
        }
    }
}

export default SearchService;