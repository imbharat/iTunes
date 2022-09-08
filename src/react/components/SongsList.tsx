import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/ReduxHooks';
import { updateFilterAndLoadSongs } from '../../redux/Songs/SongsActions';
import { Song as SongObject, Songs } from '../../redux/Songs/Types'
import Song from './Song'

function SongsList({ initialData } : { initialData: unknown }) {
  const songsState = useAppSelector((state: Songs) => state);
  
  const dispatch = useAppDispatch();
  
  const fetchNext = () => {
    dispatch(updateFilterAndLoadSongs({
      ...filter,
      page: filter.page + 1
    }, false))
  }
  
  let songs: SongObject[] = [];
  if(songsState.songs?.length){
    songs = songsState.songs; 
  }
  else {
    songs = JSON.parse(initialData as string).data;
  }

  const {
    isLast,
    filter
  } = songsState
  
  return (
    <div>
      <h2 style={{textAlign: 'center', marginBottom: 0}}><b>TOP RESULTS</b></h2>
      <InfiniteScroll
        style={{
          display: 'flex',
          flexWrap: 'wrap'
        }}
        dataLength={songs.length}
        next={fetchNext}
        hasMore={!isLast}
        loader={<CircularProgress />}
        endMessage={
          isLast && <h2 style={{ textAlign: 'center', width: '100%'}}>
            That's all we have!
          </h2>
        }
      >
        {
          songs.map((song, index) => <Song key={`${ index }_${song.trackId}`} song={song}/>)
        }
      </InfiniteScroll>
    </div>
  )
}

export default SongsList