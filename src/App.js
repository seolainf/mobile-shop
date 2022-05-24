import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import View from "./pages/View/View";
import "./scss/index.scss";
import { mobileSliders, laptopSliders } from "./data/slider";
import productsData, { laptopCompanies, mobileCompanies } from "./data/product";

function App() {
  const mobileProducts = productsData.getProductsByCategorys("mobile");
  const laptopProducts = productsData.getProductsByCategorys("laptop");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<View />} />

          <Route
            path="/products/mobile"
            element={
              <Products
                slides={mobileSliders}
                companies={mobileCompanies}
                data={mobileProducts}
              />
            }
          />
          <Route
            path="/products/laptop"
            element={
              <Products
                slides={laptopSliders}
                companies={laptopCompanies}
                data={laptopProducts}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
