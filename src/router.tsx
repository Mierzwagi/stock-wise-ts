import { createBrowserRouter } from "react-router-dom";

import { Default } from "./pages/layout/appLayout/default";
import { Users } from "./pages/app/users";
import Auth from "./pages/layout/authLayout/auth";
import { SignIn } from "./pages/auth/signIn";
import { SignUp } from "./pages/auth/signUp";
import { Reports } from "./pages/app/report";
import { Itens } from "./pages/app/itens";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Auth />,
      children: [
        { path: "/signUp", element: <SignUp /> },
        { path: "/", element: <SignIn /> },
      ],
    },
    {
      path: "/",
      element: <Default />,
      children: [
        { path: "/itens", element: <Itens/> },
        { path: "/users", element: <Users /> },
        { path: "/reports", element: <Reports /> },
      ],
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
    },
  }
);
