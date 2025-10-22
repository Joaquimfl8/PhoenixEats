import Header from "../../components/Header";
import Products from "../../components/Products";
import Footer from "../../components/Footer";
import styles from "./ProductsPage.module.css"

import ProductData from "../../ProductsData"

//import imgs from "../../imgs"

// Imagens
import Agua from "../../imgs/Água.webp";
import BoloMorango from "../../imgs/Bolo de Morango.png";
import Coca from "../../imgs/Coca.png";
import Coxinha from "../../imgs/Coxinhas.png";
import Fritas from "../../imgs/Fritas.png";
import PizzaCalabresa from "../../imgs/Pizza de Calabresa.webp";
import Suco from "../../imgs/Suco.png";
import Xsalada from "../../imgs/X-salada.png";

function ProductsPage() {
    return (
        <>
            <Header />
            <div className={styles.products_index}>
                {Object.values(productsData).map((product, index) => {
                    const imagePath = require(`../../imgs/${product.img}`);
                    return (
                        <Products
                            ProductTitle={product.title}
                            ProductDesc={product.desc}
                            ProductImg={product.img}
                            ProductPrice={product.price}
                        />
                    )
                    
                {/* <Products
                    ProductTitle = "X-Salada"
                    ProductImg = {Xsalada}
                    ProductDesc = "Hambúrguer suculento, queijo derretido, alface crocante, tomate fresco e maionese especial no pão macio."
                    ProductPrice = "R$34,00"
                />

                <Products
                    ProductTitle = "Bolo com morango"
                    ProductImg = {BoloMorango}
                    ProductDesc = "Camadas fofinhas de chocolate, recheio cremoso e morangos frescos, coberto com ganache irresistível."
                    ProductPrice = "R$71,40"
                />

                <Products
                    ProductTitle = "Coxinha de frango"
                    ProductImg = {Coxinha}
                    ProductDesc = "Massa dourada e crocante, recheada com frango temperado e suculento."
                    ProductPrice = "R$6,00"
                />
                
                <Products
                    ProductTitle = "Suco de Laranja"
                    ProductImg = {Suco}
                    ProductDesc = "Laranjas frescas espremidas na hora, cheias de sabor e vitaminas."
                    ProductPrice = "R$8,00"
                />

                <Products

                    ProductTitle = "Coca-Cola"
                    ProductImg = {Coca}
                    ProductDesc = "Refrigerante carbonatado com sabor único e inconfundível, feito a partir de água gaseificada, açúcar, extrato de noz-de-cola e cafeína."
                    ProductPrice = "R$12,00"

                />

                <Products
                    ProductTitle = "Batata Frita"
                    ProductImg = {Fritas}
                    ProductDesc = "Batatas cortadas e fritas até ficarem douradas e crocantes, sendo um acompanhamento versátil."
                    ProductPrice = "R$15,00"
                />

                <Products
                    ProductTitle = "Pizza de Calabresa"
                    ProductImg = {PizzaCalabresa}
                    ProductDesc = "Clássica e saborosa, com base de molho de tomate, queijo mussarela e fatias de linguiça calabresa, geralmente acompanhada de cebola em rodelas e orégano."
                    ProductPrice = "R$60,00"
                />

                <Products
                    ProductTitle = "Garrafa de Água Mineral"
                    ProductImg = {Agua}
                    ProductDesc = "Refrescante e pura, ideal para acompanhar suas refeições."
                    ProductPrice = "R$3,00"
                />
                }*/
            </div>
            <Footer />
        </>
    )
}

export default ProductsPage