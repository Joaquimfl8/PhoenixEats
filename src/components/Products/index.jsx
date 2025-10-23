import styles from './Products.module.css';

function Products({ProductTitle = "", ProductImg = "", ProductDesc = "", ProductPrice = "", onImgError}) {
    return (
        <>
            <div className={styles.products_Grid} id={ProductTitle}>
                <div className={styles.products_components}>
                    <h2>{ProductTitle}</h2>
                    <img src={ProductImg} alt={ProductTitle} onError={onImgError}/>
                    <p className={styles.products_price}>{ProductPrice}</p>
                    <button>Comprar</button>
                </div>
            </div>
        </>
    )
}

export default Products