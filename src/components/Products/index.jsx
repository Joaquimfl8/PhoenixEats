import styles from './Products.module.css';
import { useNavigate } from 'react-router-dom'

function Products({ProductTitle = "", ProductDesc = "", ProductImg = "", ProductPrice = "", adicionarAoCarrinho}) {
    const navigate = useNavigate()

    const preco = ProductPrice.replace('R$', "")

    const buy = () => {
        const produtoCompleto = {
            title: ProductTitle,
            desc: ProductDesc,
            img: ProductImg,
            price: preco
        }

        adicionarAoCarrinho(produtoCompleto)

        navigate('/market')
    }

    return (
        <>
            <div className={styles.products_Grid} id={ProductTitle}>
                <div className={styles.products_components}>
                    <h2>{ProductTitle}</h2>
                    <img src={ProductImg} alt={ProductTitle} />
                    <p className={styles.products_price}>{ProductPrice}</p>
                    <button onClick={buy}>Comprar</button>
                </div>
            </div>
        </>
    )
}

export default Products