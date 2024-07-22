import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home
 from './pages/Home';
import Rooms from './pages/Rooms';
import NavbarTest from './pages/tests/NavbarTest';
import ButtonTest from './pages/tests/ButtonTest';
import HeaderTest from './pages/tests/HeaderTest';
import ImgTxtBoxTest from "./pages/tests/ImgTxtBoxTest";

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
    path:"/imgtxtboxTest",
    element: <ImgTxtBoxTest />
  }

])


function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
