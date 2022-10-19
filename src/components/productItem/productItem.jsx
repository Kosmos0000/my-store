import React, {useState} from 'react';
import style from './productItem.module.css';
import {useDispatch} from "react-redux";
import {
    addToBasket,
    addToFavorites,
    removeToFavorites
} from "../../redux-tollkit/redusers/goods-reducer";
import heart from './icons/Heart.svg';
import heartActive from './icons/HeartActive.svg';
import basket from './icons/Basket.svg';


const ProductItem = ({item}) => {

    let styleImage = {
        background: `url(${item.src}) center/cover no-repeat`
    };

    let dispatch = useDispatch();

    let [editMode, setEditMode] = useState(false);

    let sizes = ['XXS/30', 'XS/32', 'M/30', 'L/42'].map((size) =>
        item.sizes.includes(size, 0) ?
        <span className={style.size + ' ' + style.active}>   {size}   </span> : <span className={style.size}>   {size}   </span>
    );



    return (

        <div onMouseOver={() => setEditMode(true)} onMouseOut={() => setEditMode(false)} className={style.product}>
            <div style={styleImage} className={style.image}>
                {item.discount > 0 && <span className={style.percent}>{item.discount} %</span>}
                {item.isInFavorites ? <img onClick={() => dispatch(removeToFavorites(item.id))} className={style.icon}
                                           src={heartActive} alt="heart"/> :
                    <img onClick={() => dispatch(addToFavorites(item.id))} className={style.icon}
                         src={heart} alt="heart"/>
                }
                <div className={style.productInfo}>
                    {item.discount > 0 ?
                        <div className={style.priceContainer}>
                            <div className={style.price}>{item.price}</div>
                            <div className={style.discountPrice}>{item.price * item.discount / 100} грн</div>
                        </div> : <div className={style.priceContainer}>
                            <div style={{textDecoration: 'none'}} className={style.price}>{item.price} грн</div>
                        </div>}
                    {editMode && <div className={style.sizeAndBasket}>
                        <div>{sizes}</div>
                        <div onClick={() => dispatch(addToBasket(item.id))} className={style.basket}>В корзину <img src={basket} alt=""/></div>
                    </div>}

                </div>
            </div>
        </div>
    );
};

export default ProductItem;