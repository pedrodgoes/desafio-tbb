/* eslint-disable array-callback-return */
import './App.css';
import { useState, useEffect} from 'react';

function App() {

  const [products, setProducts] = useState([0]);
  const [busca, setBusca] = useState('');

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
      <input type='text'
      value={busca}
      onChange={(event) => setBusca(event.target.value)}/>
      {
        (products.map(product => {
          return (
            <div className='Wrapper'>
              <span>{product.name}</span>
            </div>
          )
        }))
      }
    </div>
  );
}

export default App;
