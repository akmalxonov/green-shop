
import type { FC } from 'react';
import type { ProductTypeLocal } from '../../../../@types';
import '../card/card.scss';
import { useDispatch } from 'react-redux';
import { decrement, deleteData, increment } from '../../../../redux/shopSlice';

const Card: FC<ProductTypeLocal> = (props) => {
    console.log(props);
    const dispatch = useDispatch()
  return (
    <div className="card">
      {/* Mahsulot rasmi va nomi */}
      <div className="card__info">
        <img className="card__image" src={props.main_image} alt="image" />
        <div>
          <h3 className="card__title">{props.title}</h3>
          <p className="card__desc">{props._id}</p>
        </div>
      </div>

      {/* Narx */}
      <div className="card__price">
        {props.price}
      </div>

      {/* Miqdor tugmalari */}
      <div className="card__quantity">
        <button className="card__btn"onClick={()=>dispatch(decrement(props._id))}>-</button>
        <span className="card__count">{props.count}</span>
        <button className="card__btn" onClick={()=>dispatch(increment(props._id))}>+</button>
      </div>

      {/* Umumiy narx */}
      <div className="card__total">
        {props.userPrice.toFixed(2)}
      </div>

      {/* O'chirish tugmasi */}
      <button className="card__remove" onClick={()=>dispatch(deleteData(props._id))}>×</button>
    </div>
  );
};

export default Card;
