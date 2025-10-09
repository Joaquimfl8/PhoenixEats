import Header from "../../components/Header";
import Products from "../../components/Products";
import styles from "./ProductsPage.module.css"

function ProductsPage() {
    return (
        <>
            <Header />
            <div className={styles.products_index}>
                <Products
                    ProductTitle = "X-Salada"
                    ProductImg = "https://static.itdg.com.br/images/360-240/49a3716c1fba67dbc2d6a5d47db12776/52295-original.jpg"
                    ProductDesc = "Hambúrguer suculento, queijo derretido, alface crocante, tomate fresco e maionese especial no pão macio."
                    ProductPrice = "R$34,00"
                />

                <Products
                    ProductTitle = "Bolo com morango"
                    ProductImg = "https://cdn.sodiedoces.com.br/wp-content/uploads/2021/09/25112615/20412_fotos_96-morango-trufado-com-leite-condensado_bolo_fatia_540x400px92.png"
                    ProductDesc = "Camadas fofinhas de chocolate, recheio cremoso e morangos frescos, coberto com ganache irresistível."
                    ProductPrice = "R$71,40"
                />

                <Products
                    ProductTitle = "Coxinha de frango"
                    ProductImg = "https://oyshi.com.br/wp-content/uploads/2021/12/Coxinha-de-Mandioca-Frango_Prancheta-1-1.png"
                    ProductDesc = "Massa dourada e crocante, recheada com frango temperado e suculento."
                    ProductPrice = "R$6,00"
                />
                
                <Products
                    ProductTitle = "Suco Natural de Laranja"
                    ProductImg = "https://giassi.vtexassets.com/arquivos/ids/1163044/Suco-Integral-Laranja-Natural-One-Refrigerado-Garrafa-15l.png?v=638510173969700000"
                    ProductDesc = "Laranjas frescas espremidas na hora, cheias de sabor e vitaminas."
                    ProductPrice = "R$8,00"
                />

                <Products
                    ProductTitle = "Suco Natural de Laranja"
                    ProductImg = "https://giassi.vtexassets.com/arquivos/ids/1163044/Suco-Integral-Laranja-Natural-One-Refrigerado-Garrafa-15l.png?v=638510173969700000"
                    ProductDesc = "Laranjas frescas espremidas na hora, cheias de sabor e vitaminas."
                    ProductPrice = "R$8,00"
                />
            </div>
        </>
    )
}

export default ProductsPage