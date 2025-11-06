import styles from "./Market.module.css";
import Header from "../../components/Header";
import ProductsData from "../../ProductsData";
import Footer from "../../components/Footer";
import CardItem from "../../components/CardItem";

function removerProduto(ProdutoDiv) {
    const produto = document.getElementById(ProdutoDiv)

    if (produto) {
        console.log("Produtoo")
        produto.remove()
    }
    
}

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
                            <tr className={styles.body_components} id={product.title}>
                                <td><img src={product.img} alt={product.title} /></td>
                                <td>{product.price}</td>
                                <td>{product.desc}</td>
                                <td>
                                    <CardItem
                                        nome = {product.title}
                                        preco = {product.price}
                                    />
                                    <button onClick={removerProduto(styles.body_components)}>Remover do Carrinho</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>  
        </div>
        <Footer/>
        </>
    )
}

export default Market