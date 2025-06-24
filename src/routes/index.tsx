import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Blog from "../pages/blog";
import ShopComponent from "../components/shop";
import Product from "../components/mainLayout/store-products/praducts/product";
import Profil from "../pages/profil";
import Address from "../components/profil-comp/addres";
import AccountDetails from "../components/profil-comp/account-details";
import MyProduct from "../components/profil-comp/my-product";
import Wishlist from "../components/profil-comp/wishlist";
import TrackOrder from "../components/profil-comp/track-order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/shop",
    element: <ShopComponent />,
  },
  {
    path: "/profil",
    element: <Profil />,
    children: [
      {
        index: true,
        element: <AccountDetails />,
      },
      {
        path:"account-details" ,
        element: <AccountDetails />,
      },
      {
        path: "my-product",
        element: <MyProduct />,
      },
      {
        path: "address",
        element: <Address />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "track-order",
        element: <TrackOrder />,
      },
    ],
  },
  {
    path: "/plant-info/:category/:id",
    element: <Product />,
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);
