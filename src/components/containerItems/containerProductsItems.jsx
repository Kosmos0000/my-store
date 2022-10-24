import React from 'react';
import {useSelector} from "react-redux";
import ProductItem from "./productItem/productItem";
import style from './containerProductsItems.module.css';
import {getGoods, getOptions} from "../../selectors/selectors";

function ContainerProductsItems(props) {

    let items = useSelector((state) => getGoods(state));
    let sizes = useSelector((state) => getOptions(state).sizes);

    let itemsComponents = items.map((item) => <ProductItem key={item.id} item={item} sizes={sizes}/>);

    return (
        <div className='container'>
            <div className={style.body}>
                {itemsComponents}
            </div>
        </div>
    );
}

export default ContainerProductsItems;