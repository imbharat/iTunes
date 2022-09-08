import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../../../src/react/components/Search';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

describe("Search Component Tests", () => {
    let store: any;
    let component: any;
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

      store.dispatch = jest.fn();

      component = renderer.create(
        <Provider store={store}>
            <Search />
        </Provider>
      );
    });

    it('search component rendering', () => {
      //act
      const tree = component.toJSON();
      //assert
      expect(tree).toMatchSnapshot();
    });

    it('keywords change dispatch action', async () => {
        //act
        renderer.act(() => {
            render(
                <Provider store={store}>
                    <Search />
                </Provider>
            );
        });
        const searchElement = screen.getByTestId('search').querySelector('input')!;
        renderer.act(() => {
            fireEvent.change(searchElement, {target: {value: 'Jackson'}});
        });
        await sleep(2000);
        //assert
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });

    it('advanced search button exists in search bar', () => {
        //act
        renderer.act(() => {
          render(
              <Provider store={store}>
                  <Search />
              </Provider>
          );
        });
        const searchButton = screen.getByTestId('advanced-search').parentElement?.querySelector('button')!;
        expect(searchButton).not.toBeNull();
    });

    it('advanced search button click opens dialog', () => {
        //act
        renderer.act(() => {
          render(
              <Provider store={store}>
                  <Search />
              </Provider>
          );
        });
        const searchButton = screen.getByTestId('advanced-search').parentElement?.querySelector('button')!;
        renderer.act(() => {
            fireEvent.click(searchButton);
        });
        const dialog = screen.getByTestId('advanced-dialog');
        expect(dialog).not.toBeNull();
    });
});

const sleep = function (timeout: number) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('time passed');
        }, timeout);
    });
};