import { createBrowserRouter } from "react-router-dom";

import { Itens } from "./pages/app/itens";
import { Default } from "./pages/layout/appLayout/default";
import { Users } from "./pages/app/users";
import Auth from "./pages/layout/authLayout/auth";
import { SignIn } from "./pages/auth/signIn";
import { SignUp } from "./pages/auth/signUp";
import { Reports } from "./pages/app/report";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      { path: "/", element: <Itens /> },
      { path: "/users", element: <Users /> },
      { path: "/reports", element: <Reports /> }
    ],
  },
  {
    path: "/",
    element: <Auth />,
    children: [
      { path: "/signUp", element: <SignUp /> },
      { path: "/signIn", element: <SignIn /> },
    ],
  },
]);
