function Drawer({ onClose, items = [] }) {
  return(
    <div  className="overlay">
      <div className="drawer">
          <h2 className="mb-30 d-flex justify-between">
            Cart <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close" />
          </h2>

          <div className="items">
            {items.map((obj) => (
              <div className="cartItem d-flex align-center mb-20">
                <div style={{ backgroundImage: `url(${obj.imageUrl})`  }} className="cartItemImg"></div>
                <div className="mr-20 flex">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price} USD</b>
                </div>
                <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
              </div>
            ))}
          </div>

          <div className="cartTotalBlock">
            <ul className="cartTotalBlock">
              <li className="d-flex">
                <span>Total:</span>
                <div></div>
                <b>223,00 USD</b>
              </li>
              <li className="d-flex">
                <span>5% tax:</span>
                <div></div>
                <b>11.15 USD</b>
              </li>
            </ul>
            <button className="greenButton">
              Place order <img src="/img/arrow.svg" alt="arrow" /> 
            </button>
          </div>
        </div>
      </div>
  );
}

export default Drawer