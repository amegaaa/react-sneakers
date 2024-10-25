import Card from '/src/components/Card';
import Header from '/src/components/Header';
import Drawer from '/src/components/Drawer'

const arr = [
  { title: "Men's Nike Blazer Mid Suede Sneakers", price: 124.99, imageUrl: '/img/sneakers/1.jpg'},
  { title: "Men's Nike Air Max 270 Sneakers", price: 144.99, imageUrl: '/img/sneakers/2.jpg'},
  { title: "Men's Nike Blazer Mid Suede Sneakers", price: 84.99, imageUrl: '/img/sneakers/3.jpg'},
  { title: "Men's Puma X Aka Boku Future Rider Sneakers", price: 89.99, imageUrl: '/img/sneakers/4.jpg'},
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Search..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
            <Card imageUrl={obj.imageUrl} title={obj.title} price={obj.price}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
