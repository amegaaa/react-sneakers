import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss'

function Card({ itemId, id, title, imageUrl, price, onFavorite, onPlus, favorited = false, added = false, loading = false }) {
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
      {
        loading ? 
        <ContentLoader
        speed={2}
        width={155}
        height={250}
        viewBox='0 0 155 265'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'>
        <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
        <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
        <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
        <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
        <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader> 
      : (
        <>
          <div className={styles.favorite} onClick={onClickFavorite}>
            <img src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'} alt="unliked" />
          </div>
            <img width='100%' height={135} src={imageUrl} alt="" />
            <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>price:</span>
              <b>{price} USD</b>
          </div>
              <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-cheked.svg" : "/img/btn-plus.svg"} alt="plus" />
          </div>
        </>
      )}
    </div>
      
  );
}

export default Card
