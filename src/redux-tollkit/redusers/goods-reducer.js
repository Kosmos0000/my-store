
import {createReducer, createAction} from "@reduxjs/toolkit";

export const addToFavorites = createAction('ADD_TO_FAVORITES');
export const removeToFavorites = createAction('REMOVE_TO_FAVORITES');

const initialState = {
    items : [
        {
            id: 1,
            src: 'https://fashionactualtrends.com/userfiles/196/3077_11.webp',
            price: 2799,
            discount: 70,
            colors: ['Beige', 'Black', 'White'],
            sizes: ['XXS/30', 'XS/32', 'M/30', 'L/42',],
            isInFavorites: false,
            isItInTheBasket: false
        },
        {
            id: 2,
            src: 'http://i1.adis.ws/i/boohooamplience/fzz94269_chartreuse_xl.jpg',
            price: 3500,
            discount: 0,
            colors: ['Beige', 'Black'],
            sizes: ['XXS/30', 'XS/32', 'M/30', 'L/42',],
            isInFavorites: false,
            isItInTheBasket: false
        },
        {
            id: 3,
            src: 'https://imgaz1.chiccdn.com/thumb/large/oaupload/newchic/images/AE/AE/2901c90f-ace2-4d86-aa87-65307483cb41.jpg?s=702x936',
            price: 3400,
            discount: 50,
            colors: ['Black', 'White'],
            sizes: ['XXS/30', 'XS/32', 'M/30', 'L/42',],
            isInFavorites: false,
            isItInTheBasket: false
        },
        {
            id: 4,
            src: 'https://static.rasprodaga.ru/pictures/goods/mainPage/514487875/3053606/5160/7992dzz26983_candy_20floss_xl.maybe.jpg',
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
    }
})