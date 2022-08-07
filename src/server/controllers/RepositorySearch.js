import axios from 'axios';
const URL = `https://api.github.com/search/repositories`;

class RepositorySearch {
    constructor(language = 'all', sort = 'stars', order = 'desc', 
        type = 'Repositories', page = 0, per_page = 9){
            this.language = language;
            this.sort = sort;
            this.order = order;
            this.type = type;
            this.page = page;
            this.per_page = per_page;
    }
    fetchRepositories = async () => {
        debugger;
        try
        {
            const data = await axios.get(URL, {
                params: {
                    q: `language:${this.language}`,
                    sort: this.sort,
                    order: this.order,
                    type: this.type,
                    page: this.page,
                    per_page: this.per_page
                }
            });
            return data.data.items;
        } catch (ex) {
            console.log(ex);
        }
    }
}

export default RepositorySearch;