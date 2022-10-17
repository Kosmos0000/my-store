import React from 'react';
import {useSelector} from "react-redux";
import ProductItem from "../productItem/productItem";
import style from './containerItems.module.css';

function ContainerItems(props) {

    let items = useSelector((state) => state.goods.items);

    let itemsComponents = items.map((item) => <ProductItem item={item}/>);

    return (
        <div className={style.body}>
            {itemsComponents}
        </div>
    );
}

export default ContainerItems;