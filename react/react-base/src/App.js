import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/header";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
