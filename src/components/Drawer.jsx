function Drawer(props) {
  return(
    <div  className="overlay">
      <div className="drawer">
          <h2 className="mb-30 d-flex justify-between">
            Cart <img onClick={props.onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close" />
          </h2>

          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div style={{ backgroundImage:'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>
              <div className="mr-20 flex">
                <p className="mb-5">Men's Nike Blazer Mid Suede Sneakers</p>
                <b>124.99 USD</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div style={{ backgroundImage:'url(/img/sneakers/1.jpg)' }} className="cartItemImg">

              </div>
              <div className="mr-20 flex">
                <p className="mb-5">Men's Nike Blazer Mid Suede Sneakers</p>
                <b>124.99 USD</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
            </div>
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