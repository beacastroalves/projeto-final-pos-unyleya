import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from "./pages/home";
import ListProducts from "./pages/list-products";
import Details from "./pages/details";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/products",
      element: <ListProducts />
    },
    {
      path: "/products/details",
      element: <Details />
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}/>
      {/* <UserTemplate>
        Hello
      </UserTemplate> */}
    </div>
  )
};

export default App;