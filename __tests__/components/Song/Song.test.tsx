import React from 'react';
import renderer from 'react-test-renderer';
import Song from '../../../src/react/components/Song';
import { Song as SongObject } from '../../../src/redux/Songs/Types';

describe("Song Component Tests", () => {
    it('song component rendering', () => {
      //arrange
      const song: SongObject = {
        artistName: "Paul Gilbert",
        artworkUrl100: "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/88/aa/ed/88aaed59-2c30-27d4-7468-4b95ef5ee7bf/mzm.iwrtpfbi.jpg/100x100bb.jpg",
        collectionName: "Space Ship One",
        trackId: 1049049337,
        trackName: "G9",
        kind: "song"
      }
      //act
      const tree = renderer.create(<Song song={song}/>).toJSON();
      //assert
      expect(tree).toMatchSnapshot();
    });
});