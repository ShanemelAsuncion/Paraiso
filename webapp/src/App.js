import { Header } from './components/common'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home
 from './pages/Home';
import Rooms from './pages/Rooms';
import NavbarTest from './pages/tests/NavbarTest';
import ButtonTest from './pages/tests/ButtonTest';
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
  }

])


function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
