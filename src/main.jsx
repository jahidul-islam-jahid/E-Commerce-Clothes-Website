import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Products/Product";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/",
        element: <Home/>
      },
      { path: "/product",
        element: <Product/>
      },
      
      { path: "/cart",
        element: <Cart/>
      },

      { path: "/about",
        element: <About/>
      },
      { path: "/blog",
        element: <Blog/>
      },
      { path: "/shop",
        element: <Shop/>
      },
      { path: "/contact",
        element: <Contact/>
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
