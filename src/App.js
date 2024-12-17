
// Internel Moduels Import
import Navbar from './Components/features/navbar/Navbar'
import "./App.css";
import Home from './Components/pages/home/Home';
import About from './Components/pages/about/About';
import Product from './Components/pages/products/Product';
import Contact from './Components/pages/contact/Contact';
import Cart from './Components/pages/cart/Cart';
import SinglePage from './Components/pages/singlePage/SinglePage';
import { useProduct } from './Components/context/ProductContext';


// Third Party imports
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';

const App = () => {

  const { getApiData } = useProduct();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/products', element: <Product /> },
        { path: '/contact', element: <Contact /> },
        { path: '/cart', element: <Cart /> },
        { path: '/sigle-product/:id', element: <SinglePage /> }
      ]
    }
  ])

  useEffect(() => {

    // At Initial render fetching the product Data from API
    getApiData();
  }, []);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

