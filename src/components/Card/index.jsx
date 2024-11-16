import React from 'react';
import styles from './Card.module.scss'

function Card({ itemId, id, title, imageUrl, price, onFavorite, onPlus, favorited = false, added = false }) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);


  const onClickPlus = () => {
    onPlus({ itemId, id, title, imageUrl, price });
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  }; 


  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'} alt="unliked" />
      </div>
        <img width={133} height={112} src={imageUrl} alt="" />
        <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>price:</span>
          <b>{price} USD</b>
      </div>
          <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-cheked.svg" : "/img/btn-plus.svg"} alt="plus" />
      </div>
    </div>
  );
}

export default Card
