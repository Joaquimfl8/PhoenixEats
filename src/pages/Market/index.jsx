import styles from "./Market.module.css";
import Header from "../../components/Header";
import ProductsData from "../../ProductsData"
import Footer from "../../components/Footer";
import CardItem from "../../components/CardItem";

function Market() {
    return (
        <>

        <Header />
        <div className={styles.market_components}>
            <div className={styles.table_container}> 
                <table className={styles.market_components}>
                    <thead className={styles.market_head}>
                        <tr className={styles.head_components}>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody className={styles.market_body}>
                        {Object.values(ProductsData).map(product => (
                            <tr className={styles.body_components}>
                                <td><img src={product.img} alt={product.title} /></td>
                                <td>{product.price}</td>
                                <td>{product.desc}</td>
                                <td><CardItem/><button>Retirar do Carrinho</button></td>
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