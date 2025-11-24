import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import ProductsPage from "./pages/ProductsPage"
import Market from "./pages/Market"
import ListaDeRepositorios from "./components/ListaDeRepositorios"
import SignUp from "./pages/SignUp"

function AppRoutes() {
    const [carrinhoTabela, setCarrinhoTabela] = useState({});

    const adicionarAoCarrinho = (produto) => {
        const title = produto.title;
        
        setCarrinhoTabela(prevTabela => ({
            ...prevTabela, 
            [title]: produto 
        }));
    };

    const deletar = (produtoNome) => {
        const novoCarrinho = { ...carrinhoTabela };
        delete novoCarrinho[produtoNome]; 
        setCarrinhoTabela(novoCarrinho);
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route 
                    path="/Products"
                    element={<ProductsPage adicionarAoCarrinho={adicionarAoCarrinho}/>} 
                />
                <Route path="/aboutUs" element={<AboutUs/>} />
                <Route 
                    path="/market" 
                    element={<Market carrinhoTabela={carrinhoTabela} deletar={deletar}/>} 
                />
                <Route path="/listarepositorios" element={<ListaDeRepositorios/>} />
                <Route path="/SignUp" element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes