import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Home from "./pages/home";
import ListProducts from "./pages/list-products";
import Details from "./pages/details";
import SearchProducts from "./pages/search-result";
import NotFound from "./pages/not-found";
import AboutUs from "./pages/about-us";

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
    {
      path: "/products/search",
      element: <SearchProducts />
    },
    {
      path: "/products/details",
      element: <Details />
    },
    {
      path: "/about-us",
      element: <AboutUs />
    },
    {
      path: "*",
      element: <NotFound />
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