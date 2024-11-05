import React from 'react';
import axios from 'axios';
import Card from '/src/components/Card';
import Header from '/src/components/Header';
import Drawer from '/src/components/Drawer'

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);


  React.useEffect(() => {
    axios.get('https://671cd0c509103098807b47bc.mockapi.io/items').then(res => {
      setItems(res.data);        
    });
    axios.get('https://671cd0c509103098807b47bc.mockapi.io/cart').then(res => {
      setCartItems(res.data);        
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://671cd0c509103098807b47bc.mockapi.io/cart', obj);        
    setCartItems(prev => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://671cd0c509103098807b47bc.mockapi.io/cart/${id}`);        
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)}/>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Searching: "${searchValue}"` : 'All sneakers'}</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            {searchValue && (
              <img 
                onClick={() => setSearchValue('')} 
                className="clear cu-p" 
                src="/img/btn-remove.svg" 
                alt="Clear"
              />
            )}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
            key={index} 
            imageUrl={item.imageUrl} 
            title={item.title} 
            price={item.price} 
            onFavorite={() => console.log('add fav')}
            onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
