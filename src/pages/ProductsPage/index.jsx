import Header from "../../components/Header";
import Products from "../../components/Products";
import Footer from "../../components/Footer";
import styles from "./ProductsPage.module.css"
import imgs from "../../imgs"

function ProductsPage() {
    return (
        <>
            <Header />
            <div className={styles.products_index}>
                <Products
                    ProductTitle = "X-Salada"
                    ProductImg = {imgs["X-salada.png"]}
                    ProductDesc = "Hambúrguer suculento, queijo derretido, alface crocante, tomate fresco e maionese especial no pão macio."
                    ProductPrice = "R$34,00"
                />

                <Products
                    ProductTitle = "Bolo com morango"
                    ProductImg = {imgs["Bolo de Morango.png"]}
                    ProductDesc = "Camadas fofinhas de chocolate, recheio cremoso e morangos frescos, coberto com ganache irresistível."
                    ProductPrice = "R$71,40"
                />

                <Products
                    ProductTitle = "Coxinha de frango"
                    ProductImg = {imgs["Coxinhas.png"]}
                    ProductDesc = "Massa dourada e crocante, recheada com frango temperado e suculento."
                    ProductPrice = "R$6,00"
                />
                
                <Products
                    ProductTitle = "Suco Natural de Laranja"
                    ProductImg = {imgs["Suco.png"]}
                    ProductDesc = "Laranjas frescas espremidas na hora, cheias de sabor e vitaminas."
                    ProductPrice = "R$8,00"
                />

                <Products

                    ProductTitle = "Coca-Cola"
                    ProductImg = {imgs["Coca.png"]}
                    ProductDesc = "Refrigerante carbonatado com sabor único e inconfundível, feito a partir de água gaseificada, açúcar, extrato de noz-de-cola e cafeína."
                    ProductPrice = "R$12,00"

                />

                <Products
                    ProductTitle = "Batata Frita"
                    ProductImg = {imgs["Fritas.png"]}
                    ProductDesc = "Batatas cortadas e fritas até ficarem douradas e crocantes, sendo um acompanhamento versátil. "
                    ProductPrice = "R$15,00"
                />

                <Products
                    ProductTitle = "Pizza de Calabresa"
                    ProductImg = {imgs["Pizza de Calabresa.webp"]}
                    ProductDesc = "Clássica e saborosa, com base de molho de tomate, queijo mussarela e fatias de linguiça calabresa, geralmente acompanhada de cebola em rodelas e orégano."
                    ProductPrice = "R$60,00"
                />

                <Products
                    ProductTitle = "Garrafa de Água Mineral"
                    ProductImg = {imgs["Água.webp"]}
                    ProductDesc = "Refrescante e pura, ideal para acompanhar suas refeições."
                    ProductPrice = "R$3,00"
                />

            </div>
            <Footer />
        </>
    )
}

export default ProductsPage