import React from 'react';
import style from './productItem.module.css';

const ProductItem = ({item}) => {

    let styleImage = {
        background: `url(${item.src}) center/cover no-repeat`
    };

    return (
        <div className={style.product}>
            <div style={styleImage} className={style.image}>

            </div>
            <div>
                <div>
                    <div className={style.price}>{item.price}</div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;