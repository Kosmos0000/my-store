import React from 'react';
import style from './productItem.module.css';
import {useDispatch} from "react-redux";
import {addToFavorites, removeToFavorites} from "../../redux-tollkit/redusers/goods-reducer";


const ProductItem = ({item}) => {

    let styleImage = {
        background: `url(${item.src}) center/cover no-repeat`
    };

    let dispatch = useDispatch();



    return (
        <div className={style.product}>
            <div style={styleImage} className={style.image}>
                {item.discount > 0 && <span className={style.percent}>{item.discount} %</span>}
                {item.isInFavorites ? <img onClick={() => dispatch(removeToFavorites(item.id))} className={style.icon} src="https://www.svgrepo.com/show/21103/heart.svg" alt="heart"/> :
                    <img onClick={() => dispatch(addToFavorites(item.id))} className={style.icon} src="https://www.svgrepo.com/show/5233/heart.svg" alt="heart"/>
                }
            </div>
            <div>
                {item.discount > 0 ?
                    <div className={style.priceContainer}>
                        <div className={style.price}>{item.price}</div>
                        <div className={style.discountPrice}>{item.price * item.discount / 100} грн</div>
                    </div> : <div className={style.priceContainer}>
                        <div style={{textDecoration: 'none'}} className={style.price}>{item.price} грн</div>
                    </div>}

            </div>
        </div>
    );
};

export default ProductItem;