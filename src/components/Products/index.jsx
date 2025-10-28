import styles from './Products.module.css';
import {Link} from 'react-router-dom'

function Products({ProductTitle = "", ProductImg = "", ProductDesc = "", ProductPrice = ""}) {
    return (
        <>
            <div className={styles.products_Grid} id={ProductTitle}>
                <div className={styles.products_components}>
                    <h2>{ProductTitle}</h2>
                    <img src={ProductImg} alt={ProductTitle} />
                    <p className={styles.products_price}>{ProductPrice}</p>
                    <button to="/market">Comprar</button>
                </div>
            </div>
        </>
    )
}

export default Products