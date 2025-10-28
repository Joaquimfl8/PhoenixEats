import styles from "./Market.module.css";
import Header from "../../components/Header";
import ProductsData from "../../ProductsData"
import Footer from "../../components/Footer";

function Market() {
    return (
        <>

        <Header />
        <h2>Carrinho</h2>
        <div className={styles.market_components}>
            <div className={styles.table_container}> 
                <table className={styles.market_components}>
                    <thead className={styles.market_head}>
                        <tr className={styles.head_components}>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody className={styles.market_body}>
                        {Object.values(ProductsData).map(product => (
                            <tr className={styles.body_components}>
                                <td><img src={product.img} alt={product.title} />{product.title}</td>
                                <td>{product.price}</td>
                                <td>{product.desc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>  
            <Footer/>
        </div>
        </>
    )
}

export default Market