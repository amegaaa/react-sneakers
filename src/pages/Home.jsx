import Card from '../components/Card';

function Home( {items, cartItems, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart} ) {
  return (
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
            onFavorite={(obj) => onAddToFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}
            added={cartItems.some((obj) => Number(obj.itemId) === Number(index+1))}
            itemId={index+1}
            {...item}
            />
          ))}
        </div>
      </div>
  );
}

export default Home;