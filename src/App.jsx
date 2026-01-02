import { BrowserRouter,Routes,Route } from "react-router-dom"

import Veg from "./pages/Veg"
import HomeLayout from "./layouts/HomeLayout"



const App = () => {
  return (
    <div>

<BrowserRouter>
<Routes>
  <Route path="/" element={<HomeLayout/>}/>
       <Route path="/vegetables" element={<Veg/>} />
</Routes>
</BrowserRouter>



    </div>
  )
}

export default App