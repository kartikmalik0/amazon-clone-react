import { productsData } from "./api/api";
import Footer from "./components/footer.jsx/Footer"
import Header from "./components/headers/Header"
import Homee from "./pages/Homee";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  ScrollRestoration,
  createRoutesFromElements,
 
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import Registration from "./pages/Registration";
const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration/>
      <Outlet />
      <Footer/>
    </div>
  )
}
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
    <Route path="/" element={<Layout />}>
    <Route index element={<Homee />} loader={productsData}></Route>
    
    <Route path="/cart" element={<Cart/>}></Route>
      </Route>
      <Route path="/signin" element={<SignIn />}></Route>
      <Route path="/registration" element={<Registration/>}></Route>
    </Route>
   
    
      
    
  ))
  return (
    <div className=" font-bodyFont bg-gray-100" >
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
