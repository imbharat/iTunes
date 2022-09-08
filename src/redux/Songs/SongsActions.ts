import { fetchData } from "../../client/services/Search";
import { Filter, Songs } from "./Types";

export const ADD_SONGS = 'ADD_SONGS';
export const UPDATE_SONGS = 'UPDATE_SONGS';
export const LOAD_SONGS = 'LOAD_SONGS';
export const LOAD_FAILURE = 'LOAD_FAILURE';
export const UPDATE_FILTER = 'UPDATE_FILTER';

export const addSongs = (songs: Songs) => {
    return {
        type: ADD_SONGS,
        message: 'adding songs',
        payload: songs
    }
}

export const updateSongs = (songs: Songs) => {
    return {
        type: UPDATE_SONGS,
        message: 'updating songs',
        payload: songs
    }
}

export const loadSongs = () => {
    return {
        type: LOAD_SONGS,
        message: 'loading songs'
    }
}

export const loadFailure = (error: string) => {
    return {
        type: LOAD_FAILURE,
        message: 'error in loading',
        msg: error
    }
}

export const updateFilter = (filter: Filter) => {
    return {
        type: UPDATE_FILTER,
        message: 'updating filter',
        payload: filter
    }
}

export const updateFilterAndLoadSongs = (filter: Filter, refresh: boolean) => {
    return async function(dispatch: any){
        dispatch(updateFilter(filter));
        dispatch(getSongs(filter, refresh));
    }
}

export const getSongs = (filter: Filter, refresh: boolean) => {
    return async function(dispatch: any){
        dispatch(loadSongs());
        const response = await fetchData(filter);
        if(response?.data){
            const data = JSON.parse(response.data);
			refresh ? dispatch(updateSongs(data)) : dispatch(addSongs(data));
        }
		else
			dispatch(loadFailure('error in loading songs'));
    }
}