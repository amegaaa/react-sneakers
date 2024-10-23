function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between">
            Cart <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="" />
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



      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase" >React Sneakers</h3>
            <p className="opacity-5">Store for the best sneakers</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" />
            <span>15 USD</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
            <h5>Men's Nike Blazer Mid Suede Sneakers</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>price:</span>
                <b>124.99 USD</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.jpg" alt="" />
            <h5>Men's Nike Blazer Mid Suede Sneakers</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>price:</span>
                <b>124.99 USD</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.jpg" alt="" />
            <h5>Men's Nike Blazer Mid Suede Sneakers</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>price:</span>
                <b>124.99 USD</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.jpg" alt="" />
            <h5>Men's Nike Blazer Mid Suede Sneakers</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>price:</span>
                <b>124.99 USD</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
