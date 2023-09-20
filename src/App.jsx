import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Applayout from "./pages/Applayout";
import Cities from "./Components/Cities";
import Countries from "./Components/Countries";
import City from "./Components/City";
import Form from "./Components/Form";
import { CitiesProvider } from "./Components/Providers/CitiesProvider";
import { FakeAuthentication } from "./Components/Providers/FakeAuthentication";
import ProtectApp from "./Components/ProtectApp";

const App = () => {
  return (
    <CitiesProvider>
      <FakeAuthentication>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Product />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectApp>
                  <Applayout />
                </ProtectApp>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<Cities />} />
              <Route path="countries" element={<Countries />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </FakeAuthentication>
    </CitiesProvider>
  );
};

export default App;
