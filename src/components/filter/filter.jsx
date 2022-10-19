import React from 'react';
import style from './filter.module.css';
import {useSelector} from "react-redux";

function Filter(props) {

    let options = useSelector(state => state.goods.options);
    let jsx = [];
    for(let key in options) {
        jsx.push(<ul> {key}
            {options[key].map((item) => <li><input type="checkbox"/> {item}</li>)}
        </ul>);
    }

    return (
        <div className={style.filter}>
            <div className='container'>
                <div>{jsx}</div>
            </div>
        </div>
    );
}

export default Filter;