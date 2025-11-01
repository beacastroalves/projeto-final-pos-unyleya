import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Home from "./pages/home";
import ListRecentsProducts from "./pages/list-recents-products";
import Details from "./pages/details";
import SearchProducts from "./pages/search-result";
import NotFound from "./pages/not-found";
import AboutUs from "./pages/about-us";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import UserProducts from "./pages/user-products";
import FormProduct from "./pages/form-product";
import ContactUs from "./pages/contact-us";
import ListAllProducts from "./pages/list-all-products";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/all-recents-products",
      element: <ListRecentsProducts />
    },
    {
      path: "/all-products",
      element: <ListAllProducts />
    },
    {
      path: "/products/details/:id",
      element: <Details />
    },
    {
      path: "/products/search/:product",
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
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/contact-us",
      element: <ContactUs />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "/my-products",
      element: <UserProducts />
    },
    {
      path: "/form-product",
      element: <FormProduct />
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