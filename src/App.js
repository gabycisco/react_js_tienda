import './normalize.css';
import './App.css';
import NavBar from './components/NavBar';
import Cart from './components/Cart'
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (

        <BrowserRouter>
        <NavBar />

        <div className='general-container'>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          </div>
        </BrowserRouter>


    
  )
}

export default App;