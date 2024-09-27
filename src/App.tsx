import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { GlobalStyle } from "./style/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/theme";
//carregamento assíncrono dos componentes
import { Suspense } from "react";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Suspense fallback={<div>Carregando...</div>}>
        <RouterProvider router={router}/>
      </Suspense>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App



{/* <HashRouter>
      <Router />
    </HashRouter> */}