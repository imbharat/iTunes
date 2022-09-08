import React from 'react';
import renderer from 'react-test-renderer';
import SongsList from '../../../src/react/components/SongsList';
import { initialData } from './SongsListTestData';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe("SongsList Component Tests", () => {
  let store: any;
  beforeEach(() => {
    store = mockStore({
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
    });
  });

  it('songs list component initial rendering', () => {
    //arrange
    const testData = initialData;
    //act
    const tree = renderer.create(
      <Provider store={store}>
        <SongsList initialData={testData}/>
      </Provider>).toJSON();
    //assert
    expect(tree).toMatchSnapshot();
  });
});