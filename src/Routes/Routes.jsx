import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registatoin from "../Registatoin/Registatoin";
import Bookservice from "../Pages/Bookservice/Bookservice";
import Boking from "../Pages/Boking/Boking";
import PrivateRoute from "./PrivateRoute";
import ALLtoys from "../Pages/ALLtoys/ALLtoys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>


      },
      {
        path: 'signup',
        element: <Registatoin></Registatoin>

      },

      {
        path: 'bookservice/:id',
        element: <PrivateRoute><Bookservice></Bookservice></PrivateRoute>,
        loader: ({ params }) => fetch(`https://gnius-car-server.vercel.app/services/${params.id}`)

      },
      {
        path: 'boking',
        element: <PrivateRoute><Boking></Boking></PrivateRoute>

      },
      {
        path: 'allcar',
        element: <ALLtoys></ALLtoys>,
        loader: () => fetch('https://gnius-car-server.vercel.app/bookings')

      },
    ]
  },
]);

export default router;