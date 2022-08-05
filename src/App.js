/* eslint-disable array-callback-return */
import './App.css';
import { useState, useEffect} from 'react';

function App() {

  const [products, setProducts] = useState([]);
  const [busca, setBusca] = useState('');

  console.log(busca)

  useEffect(() => {
    fetch('./productsCategory.json', {
      headers: {
        Accept: "application/json"
      }
    }).then(res => res.json())
    .then(res => setProducts(res.data.nodes));
  }, []);
  
  return (
    <div className="App">
      <div>
      Categoria: <input type='text'
      value={busca}
      onChange={(event) => setBusca(event.target.value)}/>
      </div>
    
    <div className='Content'>
    {
        (products.map(product => {
          return (
            <div className='Wrapper' key={product.id}>
              <span className='Name'>{product.name}</span><br />
              Categoria: <span className='Category'>{product.category.name}</span><br />
              <img src={product.images[0].asset.url} alt='img'/>
            </div>
          )
        }))
      }
    </div>
    </div>
  );
}

export default App;
