import styles from './Header.module.css';
import PhoenixImg from '../../imgs/Phoenix-removebg-preview.png';
import {Link} from 'react-router-dom'

function Header() {
    return (
        <> 
            <div className={styles.header_components}>
                <div className={styles.header_title}>
                    <img src={PhoenixImg} alt="" />
                    <h1 className={styles.header_titulo}>Phoenix Eats</h1>
                </div>
                <nav className={styles.header_anchors}>
                    <Link className={styles.header_links} to="/">Home</Link>
                    <Link className={styles.header_links} to="/products">Products</Link>
                    <Link className={styles.header_links} to="/aboutus">About Us</Link>
                    <Link className={styles.header_links} to="/market">Market</Link>
                </nav>
            </div>
        </>
    )
}

export default Header;