import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ProductsPage from "./pages/ProductsPage"
import Market from "./pages/Market"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/Products" element={<ProductsPage/>} />
                <Route path="/aboutUs" element={<AboutUs/>} />
                <Route path="/market" element={<Market/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes