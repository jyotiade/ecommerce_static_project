import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Sculpture from "./pages/sculpture/sculpture";
import Frames from "./pages/frames/frames";
import Relief from "./pages/Relief/Relief";
import Statue from "./pages/statue/Statue";
import More from "./pages/more/more";
import Footer from "./components/footer/footer";

function App() {
  return (
     <>
     <BrowserRouter>
         <Navbar/>
       <Routes>
          <Route path="/"  element={<Home/>}></Route>
          <Route path="/Sculpture"  element={<Sculpture/>}></Route>
          <Route path="/Frames"  element={<Frames/>}></Route>
          <Route path="/Relief"  element={<Relief/>}></Route>
          <Route path="/Statue"  element={<Statue/>}></Route>
          <Route path="/More"  element={<More/>}></Route>
       </Routes>
      <Footer/>
     </BrowserRouter>
     </>
  );
}

export default App;
