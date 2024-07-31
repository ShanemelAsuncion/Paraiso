import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home
 from './pages/Home';
import Rooms from './pages/rooms/Rooms';
import Deals from './pages/deals/Deals'
import PickRoom from './pages/checkout/PickRoom';
import NavbarTest from './pages/tests/NavbarTest';
import ButtonTest from './pages/tests/ButtonTest';
import HeaderTest from './pages/tests/HeaderTest';

const router = createBrowserRouter([ 
  {
    path:"/",
    element: <Home />
  },

  {
    path:"/rooms",
    element: <Rooms />
  },

  {
    path:"/deals",
    element: <Deals />
  },

  {
    path:"/PickRoom",
    element: <PickRoom />
  },

  {
    path:"/navbarTest",
    element: <NavbarTest />
  },

  {
    path:"/buttonTest",
    element: <ButtonTest />
  },

  {
    path:"/headerTest",
    element: <HeaderTest />
  }

])


function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
