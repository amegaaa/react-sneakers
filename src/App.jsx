import React from 'react';
import Card from '/src/components/Card';
import Header from '/src/components/Header';
import Drawer from '/src/components/Drawer'

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);


  React.useEffect(() => {
    fetch('https://671cd0c509103098807b47bc.mockapi.io/items')
      .then(res =>{
        return res.json();
      })
      .then(json => {
        setItems(json);
      });
  }, []);
  

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)}/>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((obj) => (
            <Card 
            imageUrl={obj.imageUrl} 
            title={obj.title} 
            price={obj.price} 
            onFavorite={() => console.log('add fav')}
            onPlus={() => console.log('add cart')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
