import styles from './Header.module.css';
import PhoenixImg from '../../imgs/Phoenix-removebg-preview.png';
import {Link} from 'react-router-dom'
import home from '../../imgs/home.png'
import products from '../../imgs/products.png'
import aboutus from '../../imgs/aboutus.png'
import carrinho from '../../imgs/Carrinho.png'

function Header() {
    return (
        <> 
            <div className={styles.header_components}>
                <div className={styles.header_title}>
                    <img src={PhoenixImg} alt="" />
                    <h1 className={styles.header_titulo}>Phoenix Eats</h1>
                </div>
                <nav className={styles.header_anchors}>
                    <Link className={styles.header_links} to="/"><img src={home}></img></Link>
                    <Link className={styles.header_links} to="/products"><img className={styles.prodImg} src={products}></img></Link>
                    <Link className={styles.header_links} to="/market"><img src={carrinho}></img></Link>
                    <Link className={styles.header_links} to="/aboutus"><img src={aboutus}></img></Link>
                </nav>
            </div>
        </>
    )
}

export default Header;