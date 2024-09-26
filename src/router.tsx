import { Route, Routes } from "react-router-dom";


import { Itens } from "./pages/app/itens";
import { Default } from "./layout/default";
import { Users } from "./pages/app/users";
// import { Users } from "./pages/users";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/itens" element={<Itens />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Routes>
  );
}
