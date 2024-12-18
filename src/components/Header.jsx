import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Logotype"/>
          <div>
            <h3 className="text-uppercase" >React Sneakers</h3>
            <p className="opacity-5">Store for the best sneakers</p>
          </div>
        </div>
      </Link>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img width={18} height={18} src="/img/cart.svg" alt="Cart"/>
            <span>15 USD</span>
          </li>
            <li className="mr-30 cu-p">
              <Link to="/favorites">
                <img width={18} height={18} src="/img/heart.svg" alt="Favorite"/>
              </Link>
            </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="User"/>
          </li>
        </ul> 
      </header>
  );
}

export default Header