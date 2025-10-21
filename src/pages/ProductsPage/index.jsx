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
                    ProductImg = "https://static.ifood-static.com.br/image/upload/t_medium/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202504082145_5GL2_i.jpg"
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
                    ProductImg = "https://phygital-files.mercafacil.com/catalogo/uploads/produto/suco_de_laranja_prat_s_integral_900ml_8ad33694-3253-4b50-abe5-dd9f9efaef05.jpg"
                    ProductDesc = "Laranjas frescas espremidas na hora, cheias de sabor e vitaminas."
                    ProductPrice = "R$8,00"
                />

                <Products

                    ProductTitle = "Coca-Cola"
                    ProductImg = "https://static.ifood-static.com.br/image/upload/t_medium/pratos/be5cc7ec-ab4a-4fc0-9ba2-da1db4072b7e/202507290843_xun231jx4sb.png"
                    ProductDesc = "Refrigerante carbonatado com sabor único e inconfundível, feito a partir de água gaseificada, açúcar, extrato de noz-de-cola e cafeína."
                    ProductPrice = "R$12,00"

                />

                <Products
                    ProductTitle = "Batata Frita"
                    ProductImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCJTT2WLbAgIfIJjcRcCHAhL-zT68HPGTHA&s"
                    ProductDesc = "Batatas cortadas e fritas até ficarem douradas e crocantes, sendo um acompanhamento versátil. "
                    ProductPrice = "R$15,00"
                />

                <Products
                    ProductTitle = "Pizza de Calabresa"
                    ProductImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPaFh_IqaOBfpgoGZAkWvsuHgb9dmL5e4A1g&s"
                    ProductDesc = "Clássica e saborosa, com base de molho de tomate, queijo mussarela e fatias de linguiça calabresa, geralmente acompanhada de cebola em rodelas e orégano."
                    ProductPrice = "R$60,00"
                />

            </div>
        </>
    )
}

export default ProductsPage