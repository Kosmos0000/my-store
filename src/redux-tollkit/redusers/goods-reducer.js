
import {createReducer, createAction} from "@reduxjs/toolkit";

export const addToFavorites = createAction('ADD_TO_FAVORITES');
export const removeToFavorites = createAction('REMOVE_TO_FAVORITES');
export const addToBasket = createAction('ADD_AND_REMOVE_TO_BASKET');
export const removeToBasket = createAction('REMOVE_TO_BASKET');

const initialState = {
    items : [
        {
            id: 1,
            src: 'https://avatars.mds.yandex.net/get-mpic/5221441/img_id5252206666447556010.jpeg/orig',
            price: 2799,
            discount: 70,
            colors: ['Beige', 'Black', 'White'],
            sizes: ['XXS/30', 'XS/32', 'M/30', 'L/42',],
            isInFavorites: false,
            isItInTheBasket: false
        },
        {
            id: 2,
            src: 'https://imgcdn.zarina.ru/upload/images/22644/thumb/450_9999/2264402102_133_1.jpg?t=1648047868',
            price: 3500,
            discount: 0,
            colors: ['Beige', 'Black'],
            sizes: ['XXS/30', 'M/30', 'L/42',],
            isInFavorites: false,
            isItInTheBasket: false
        },
        {
            id: 3,
            src: 'https://i.pinimg.com/736x/18/5f/99/185f99206229dc866511aa5333a218e0.jpg',
            price: 3400,
            discount: 50,
            colors: ['Black'],
            sizes: ['XXS/30', 'XS/32', 'M/30', 'L/42',],
            isInFavorites: false,
            isItInTheBasket: false
        },
        {
            id: 4,
            src: 'https://zolla.com/upload/iblock/416/a780edhrh8zt515liaa6codbwfw1j6v2.jpg',
            price: 3000,
            discount: 40,
            colors: ['White'],
            sizes: ['M/30', 'L/42',],
            isInFavorites: false,
            isItInTheBasket: false
        }
    ]
};

export default createReducer(initialState, {
    [addToFavorites]: function (state, action) {
        state.items = state.items.map((item) => item.id === action.payload ? {...item, isInFavorites: true} : {...item} );
    },
    [removeToFavorites]: function (state, action) {
        state.items = state.items.map((item) => item.id === action.payload ? {...item, isInFavorites: false} : {...item} );
    },
    [addToBasket]: function (state, action) {
        state.items = state.items.map((item) => item.id === action.payload ? {...item, isItInTheBasket: true} : {...item} );
    },
    [removeToBasket]: function (state, action) {
        state.items = state.items.map((item) => item.id === action.payload ? {...item, isItInTheBasket: false} : {...item} );
    }
})