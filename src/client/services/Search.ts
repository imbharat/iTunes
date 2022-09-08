import axios from "axios"
import { Filter } from "../../redux/Songs/Types";
import CONFIG from "../Configuration";

export const fetchData = async (filter: Filter) => {
    const data = await axios.get(`${CONFIG['DEV'].URL}/api/search`, {
        params: { ...filter }
    });
    return data;
}