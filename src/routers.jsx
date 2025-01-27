import Home from './pages/Home.jsx';
import Layout from './components/Layout/Layout.jsx';
import About from './pages/About.jsx';
import { createBrowserRouter } from 'react-router-dom';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import Contact from './pages/Contact.jsx' // Страница для 404
import Service from './pages/Service.jsx';
import Wish from './components/Wish.jsx';
import Wishlist from './pages/Wishlist.jsx';
import Cart from './pages/Cart.jsx';
export const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: "service",
        element: <Service/>
      },
      {
        path: 'Wishlist',
        element: <Wishlist/>
      },
      {
        path: 'cart',
        element: <Cart/>
      }

    ],
  },
]);
