import React, {useState} from 'react';
import style from './productItem.module.css';
import {useDispatch} from "react-redux";
import {
    addToBasket,
    addToFavorites,
    removeToFavorites
} from "../../../redux-tollkit/redusers/goods-reducer";
import heart from './icons/Heart.svg';
import heartActive from './icons/HeartActive.svg';
import basket from './icons/Basket.svg';


const ProductItem = ({item, sizes}) => {

    let dispatch = useDispatch();
    let styleImage = {background: `url(${item.src}) center/cover no-repeat`};
    let [editMode, setEditMode] = useState(false);
    let sizesSpan = sizes.map((size) =>
        item.sizes.includes(size.value, 0) ?
            <span key={size.value} className={style.size + ' ' + style.active}> {size.value} </span> :
            <span key={size.value} className={style.size}> {size.value} </span>
    );
    let finalPrice = Math.round(item.price * (100 - item.discount) / 100);

    return (

        <div onMouseOver={() => setEditMode(true)} onMouseOut={() => setEditMode(false)} className={style.product}>
            <div style={styleImage} className={style.image}>
                {item.discount > 0 && <span className={style.percent}>-{item.discount} %</span>}
                {item.isInFavorites ? <img onClick={() => dispatch(removeToFavorites(item.id))} className={style.icon}
                                           src={heartActive} alt="heart"/> :
                    <img onClick={() => dispatch(addToFavorites(item.id))} className={style.icon}
                         src={heart} alt="heart"/>
                }
                <div className={editMode ? style.productInfo + ' ' + style.active : style.productInfo}>
                    {item.discount > 0 ?
                        <div className={style.priceContainer}>
                            <div className={style.price}>{item.price}</div>
                            <div className={style.discountPrice}>{finalPrice} грн</div>
                        </div> : <div className={style.priceContainer}>
                            <div style={{textDecoration: 'none'}} className={style.price}>{item.price} грн</div>
                        </div>}

                    <div className={style.sizeAndBasket}>
                        <div>{sizesSpan}</div>
                        <div onClick={() => dispatch(addToBasket(item.id))} className={style.basket}>В корзину <img
                            src={basket} alt=""/></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductItem;