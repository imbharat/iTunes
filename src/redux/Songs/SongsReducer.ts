import { ADD_SONGS, LOAD_SONGS, LOAD_FAILURE, UPDATE_SONGS, UPDATE_FILTER } from "./SongsActions";
import { Songs, Action } from "./Types";

const initialSongs: Songs = {
    loading: false,
    songs: [],
    filter: {
        term: '',
        country: '',
        media: '',
        entity: '',
        attribute: '',
        limit: 50,
        lang: '',
        page: 0
    },
    isLast: true,
    error: ''
}

export const songsReducer = (state = initialSongs, action: Action) => {
    switch(action.type){
        case ADD_SONGS:
            return {
                ...state,
                songs: [
                    ...state.songs,
                    ...action.payload.data
                ],
                isLast: action.payload.isLast,
                error: ''
            }
        case UPDATE_SONGS:
            return {
                ...state,
                songs: action.payload.data,
                isLast: action.payload.isLast,
                error: ''
            }
        case LOAD_SONGS:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case LOAD_FAILURE:
            const words = state.filter.term;
            return {
                ...initialSongs,
                filter: {
                    ...initialSongs.filter,
                    term: words
                },
                error: action.msg
            }
        case UPDATE_FILTER:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    ...action.payload
                },
                error: ''
            }
        default:
            return {
                ...state
            }
    }
}