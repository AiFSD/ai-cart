import { BrowserRouter,Routes,Route } from "react-router-dom"

import Veg from "./pages/Veg"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer";
import Category from "./components/Category"
import Fruits from "./pages/Fruits";
import Grains from "./pages/Grains";
import Beverages from "./pages/Beverages";
import Dairy from "./pages/Dairy";
import Discount from "./pages/Discount"
import CartPage from "./pages/cartPage";
import Upload from "./pages/Upload";
import Feedback from "./pages/Feedback";
import Patch from "./pages/Patch";

const App = () => {
  return (
    <div>
    
      <BrowserRouter>
      
        <NavBar />
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/vegetables" element={<Veg />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/grains" element={<Grains />} />
          <Route path="/beverages" element={<Beverages />} />
          <Route path="/dairy" element={<Dairy/>} />
          <Route path="/discount" element={<Discount/>}/>
          <Route path="/cartpage" element={<CartPage/>}/>
          <Route path="/upload" element={<Upload/>}/>
          <Route path="/feedback" element={<Feedback/>}/>
          <Route path="/Patchwork" element={<Patch/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App