import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import View from "./pages/View/View";
import "./scss/index.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
