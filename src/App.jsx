import { productsData } from "./api/api";
import Footer from "./components/footer.jsx/Footer"
import Header from "./components/headers/Header"
import Homee from "./pages/Homee";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  
  createRoutesFromElements,
 
} from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  )
}
const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
   
    <Route path="/" element={<Layout />}>
    <Route index element={<Homee/>} loader={productsData}></Route>
    </Route>
      
    
  ))
  return (
    <div className=" font-bodyFont" >
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
