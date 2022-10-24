
import {createReducer, createAction} from "@reduxjs/toolkit";

export const addToFavorites = createAction('ADD_TO_FAVORITES');
export const removeToFavorites = createAction('REMOVE_TO_FAVORITES');
export const addToBasket = createAction('ADD_AND_REMOVE_TO_BASKET');
export const removeToBasket = createAction('REMOVE_TO_BASKET');
export const toggleCheckbox = createAction('TOGGLE_CHECKBOX');
export const clearCheckbox = createAction('CLEAR_CHECKBOX');
export const filterItems = createAction('FILTER_ITEMS');

const initialState = {
    items : [
        {
            id: 1,
            src: 'https://avatars.mds.yandex.net/get-mpic/5221441/img_id5252206666447556010.jpeg/orig',
            price: 2799,
            discount: 30,
            colors: ['Beige', 'Black', 'White'],
            sizes: ['XXS', 'XS', 'L',],
            isInFavorites: false,
            isItInTheBasket: false
        },
        {
            id: 2,
            src: 'https://imgcdn.zarina.ru/upload/images/22644/thumb/450_9999/2264402102_133_1.jpg?t=1648047868',
            price: 3500,
            discount: 0,
            colors: ['Beige', 'Black', 'Red'],
            sizes: ['XXS', 'M', 'L',],
            isInFavorites: false,
            isItInTheBasket: false
        },
        {
            id: 3,
            src: 'https://i.pinimg.com/736x/18/5f/99/185f99206229dc866511aa5333a218e0.jpg',
            price: 3400,
            discount: 50,
            colors: ['Black'],
            sizes: ['XXS', 'XS', 'M', 'L',],
            isInFavorites: false,
            isItInTheBasket: false
        },
        {
            id: 4,
            src: 'https://zolla.com/upload/iblock/416/a780edhrh8zt515liaa6codbwfw1j6v2.jpg',
            price: 3000,
            discount: 40,
            colors: ['White'],
            sizes: ['M', 'L',],
            isInFavorites: false,
            isItInTheBasket: false
        }
    ],
    options: {
        sizes: [
            {
                id: 1,
                value: 'XXS',
                isActive: false,
            },
            {
                id: 2,
                value: 'XS',
                isActive: false,
            },
            {
                id: 3,
                value: 'M',
                isActive: false,
            },
            {
                id: 4,
                value: 'L',
                isActive: false,
            }
        ],
        colors: [
            {
                id: 1,
                value: 'White',
                isActive: false,
            },
            {
                id: 2,
                value: 'Beige',
                isActive: false,
            },
            {
                id: 3,
                value: 'Black',
                isActive: false,
            },
            {
                id: 4,
                value: 'Red',
                isActive: false,
            },
        ]
    }
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
    },
    [toggleCheckbox]: function (state, action) {
        state.options[action.payload.nameOption] = state.options[action.payload.nameOption].map((item) => item.id === action.payload.itemId ? {...item, isActive: !item.isActive} : {...item});
    },
    [clearCheckbox]: function (state, action) {
        state.options[action.payload] = state.options[action.payload].map((item) => ({...item, isActive: false}));
        state.copyItems = state.items;
    },
    [filterItems]: function (state, action) {
        let isFilterTouch = false;
        state.copyItems = state.items.filter((item) => {
                for (let option in state.options) {
                    for (let i of state.options[option]) {
                        if (i.isActive) {
                            isFilterTouch = true;
                            return item[option].includes(i.value);
                        }

                    }
                }
            });
        if(!isFilterTouch) {
            state.copyItems = state.items;
        }
    },
})