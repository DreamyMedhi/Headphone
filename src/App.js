import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category"
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import Information from "./components/Checkout/Infromation";
import Final from "./components/Checkout/Final";
import Notification from "./components/Checkout/Notification";


function App(){
  return (
  <BrowserRouter>
  <AppContext>
  <Header/>
  <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/category/:id" element={<Category/>}/>
      <Route path="/product/:id" element={<SingleProduct/>}/>
      <Route path="/information" element={<Information/>}/>
      <Route path="/final" element={<Final/>}></Route>
      <Route path="/sms" element={<Notification/>}></Route>     
  </Routes>
    <Newsletter/>
    <Footer/>

  </AppContext>
 
  </BrowserRouter>
  )
}
export default App;
