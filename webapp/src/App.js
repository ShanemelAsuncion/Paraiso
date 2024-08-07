import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home
 from './pages/Home';
import Rooms from './pages/rooms/Rooms';
import Deals from './pages/deals/Deals'
import PickRoom from './pages/checkout/pickroom/PickRoom';
import NavbarTest from './pages/tests/NavbarTest';
import ButtonTest from './pages/tests/ButtonTest';
import HeaderTest from './pages/tests/HeaderTest';
import ImgTxtBoxTest from './pages/tests/ImgTxtBoxTest';
import RoomsContainerTest from './pages/tests/RoomsContainerTest';


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
  },

  {
    path:"/imgTxtBoxTest",
    element: <ImgTxtBoxTest />
  },

  {
    path:"/roomscontainertest",
    element: <RoomsContainerTest />
  }


])


function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
