import Header from "../../components/Header";
import Products from "../../components/Products";
import Footer from "../../components/Footer";
import styles from "./ProductsPage.module.css"

import ProductsData from "../../ProductsData"

//import imgs from "../../imgs"

function ProductsPage({adicionarAoCarrinho}) {

    return (
        <>
            <Header />
            <div className={styles.products_index}>

                {Object.values(ProductsData).map((product) => {
                    return ( 
                        <Products 
                            ProductTitle={product.title}
                            ProductDesc={product.desc}
                            ProductImg={product.img}
                            ProductPrice={`R$${product.price}`}
                            adicionarAoCarrinho={adicionarAoCarrinho}
                        />
                    )
                })}
            </div>

            <Footer />
        </>
    )
}

export default ProductsPage