
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Products from './pages/Products';
import { AiOutlineTable } from 'react-icons/ai'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
function App() {




  return (
    <BrowserRouter>
      <div>
        <div class="w-full h-[80px] bg-zinc-200 pl-2 flex flex-row">
          <div class='flex flex-row w-min space-x-2 my-auto'>
            <h1 class='font-bold text-xl'>TileGet</h1>
            <AiOutlineTable size={'30px'} />
          </div>

          <div class='w-[1000px]   ml-[500px] flex flex-row itmes-center space-x-4 my-auto'>
            <NavLink to='/' >
              <button class='font-semibold bg-zinc-200 text-black border-none text-lg hover:text-gray-400'>Home</button>
            </NavLink>
            <NavLink to='/products'>
              <button class='font-semibold bg-zinc-200 text-black border-none text-lg hover:text-gray-400'>Products</button>
            </NavLink>
            <NavLink to='/product/0'>
              <button class='font-semibold bg-zinc-200 text-black border-none text-lg hover:text-gray-400'>Product</button>
            </NavLink>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/products' element={<Products />} />
        </Routes>


      </div>

      <div class="w-full h-[80px] bg-brown-200 pl-2 flex flex-row">



      </div>
    </BrowserRouter>
  );
}

export default App;
