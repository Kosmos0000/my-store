import React from 'react';
import style from './filter.module.css';
import {useSelector} from "react-redux";
import FilterItem from "./filterItem/filterItem";
import {getOptions} from "../../selectors/selectors";
import {store} from "../../redux-tollkit/redux";

function Filter(props) {


    let options = useSelector(state => getOptions(state));



    return (
        <div className={style.filter}>
            <div className='container'>
                <div className={style.filterContainer}>
                    <FilterItem name='Размер' option={options.sizes} nameOption='sizes'/>
                    <FilterItem name='Цвет' option={options.colors} nameOption='colors' />
                </div>
            </div>
        </div>
    );
}

export default Filter;