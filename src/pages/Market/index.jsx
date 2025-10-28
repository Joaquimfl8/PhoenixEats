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
            <table>
                <thead className={styles.market_head}>
                    <tr>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody className={styles.market_body}>
                    {Object.values(ProductsData).map(product => (
                        <tr>
                            <td><img src={product.img} alt={product.title} />{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.desc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer/>
        </div>
        </>
    )
}

export default Market