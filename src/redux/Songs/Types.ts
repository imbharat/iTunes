export type Song = {
    trackId: number,
    kind: string,
    artistName: string,
    collectionName: string,
    trackName: string,
    artworkUrl100: string
}

export type Filter = {
    term: string,
    page: number,
    country?: string,
    media?: string,
    entity?: string,
    attribute?: string,
    limit?: number,
    lang?: string
}

export type Songs = {
    loading: boolean,
    songs: Song[],
    isLast: boolean,
    filter: Filter,
    error: string
}

export type Action = {
    type: string,
    msg: string,
    payload: any
}