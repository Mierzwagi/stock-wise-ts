import { Route, Routes } from "react-router-dom";
import { Itens } from "./pages/itens";
import { Default } from "./layout/default";
import { Users } from "./pages/users";
// import { Users } from "./pages/users";


export function Router() {
  return (
    <Routes>
        <Route path="/" element={<Default/>}>
            <Route path="/itens" element={<Itens/>}/>
            <Route path="/users" element={<Users/>}/>
        </Route>
    </Routes>
  )
}
