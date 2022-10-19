import React from 'react';
import {useSelector} from "react-redux";
import ProductItem from "./productItem/productItem";
import style from './containerItems.module.css';

function ContainerItems(props) {

    let items = useSelector((state) => state.goods.items);
    let sizes = useSelector((state) => state.goods.options.sizes);

    let itemsComponents = items.map((item) => <ProductItem key={item.id} item={item} sizes={sizes}/>);

    return (
        <div className='container'>
            <div className={style.body}>
                {itemsComponents}
            </div>
        </div>
    );
}

export default ContainerItems;