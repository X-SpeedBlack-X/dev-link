import { createBrowserRouter } from "react-router-dom";
import { Admin } from "./pages/Admin";
import { Error404 } from "./pages/Error404";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Private } from "./routes/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/admin",
    element: (
      <Private>
        <Admin />
      </Private>
    ),
  },
  { path: "*", element: <Error404 /> },
]);

export { router };
