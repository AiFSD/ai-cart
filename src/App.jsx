import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Category from "./components/Category";
import Veg from "./pages/Veg";
import Fruits from "./pages/Fruits";
import Grains from "./pages/Grains";
import Beverages from "./pages/Beverages";
import Dairy from "./pages/Dairy";
import Discount from "./pages/Discount";
import CartPage from "./pages/cartPage";
import Upload from "./pages/Upload";
import Feedback from "./pages/Feedback";
import Patch from "./pages/Patch";
import ProductsEdit from "./pages/productsEdit";
import ProtectedRoute from "./pages/ProtectedRoute";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Category />
              </ProtectedRoute>
            }
          />
          <Route
            path="/vegetables"
            element={
              <ProtectedRoute>
                <Veg />
              </ProtectedRoute>
            }
          />
          <Route
            path="/fruits"
            element={
              <ProtectedRoute>
                <Fruits />
              </ProtectedRoute>
            }
          />
          <Route
            path="/grains"
            element={
              <ProtectedRoute>
                <Grains />
              </ProtectedRoute>
            }
          />
          <Route
            path="/beverages"
            element={
              <ProtectedRoute>
                <Beverages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dairy"
            element={
              <ProtectedRoute>
                <Dairy />
              </ProtectedRoute>
            }
          />
          <Route
            path="/discount"
            element={
              <ProtectedRoute>
                <Discount />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cartpage"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <Upload />
              </ProtectedRoute>
            }
          />
          <Route
            path="/feedback"
            element={
              <ProtectedRoute>
                <Feedback />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Patchwork"
            element={
              <ProtectedRoute>
                <Patch />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <ProtectedRoute>
                <ProductsEdit />
              </ProtectedRoute>
            }
          />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
