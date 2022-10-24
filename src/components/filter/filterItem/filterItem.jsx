import React, {useState} from 'react';
import style from './filterItem.module.css';
import {useDispatch} from "react-redux";
import {
    clearCheckbox,
    filterItems,
    toggleCheckbox
} from "../../../redux-tollkit/redusers/goods-reducer";
import {store} from "../../../redux-tollkit/redux";

function FilterItem({name, option, nameOption}) {

    let dispatch = useDispatch();

    let optionJSX = option.map((item) => {

        return <div key={item.id} className={style.item}>
            <input onClick={() => dispatch(toggleCheckbox({itemId: item.id, nameOption, option}))}
                name={item.value} type="checkbox" value={item.isActive} id={item.value}/> <label htmlFor={item.value}>{item.value}</label>
        </div>
    });


    let [editMode, setEditMode] = useState(false);

    return (
        <div className={style.filterItem}>
            <form>
                <div onClick={() => setEditMode(!editMode)} className={style.name}>{name} <span
                    className={editMode ? style.arrow + ' ' + style.active : style.arrow}></span></div>
                <div className={editMode ? style.itemsContainer : style.itemsContainer + ' ' + style.active}>
                    <div>{optionJSX}</div>
                    <button className={style.button} onClick={(e) => {e.preventDefault();dispatch(filterItems())}}>Применить</button>
                    <button type={"reset"} onClick={() => dispatch(clearCheckbox(nameOption))}
                            className={style.button + ' ' + style.delete}>Удалить
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FilterItem;