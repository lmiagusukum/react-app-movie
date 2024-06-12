import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
} from "react-router-dom";
import "./index.css";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!
      <NavLink
        to="/detalle"
        className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "active" : ""
        }
      >ver detalle</NavLink>
    </div>,
  },
  {
    path: "/detalle",
    element: <div>vista de detalle
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        >volver</NavLink>
        <App />
    </div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);







