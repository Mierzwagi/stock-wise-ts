import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { GlobalStyle } from "./style/global";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
