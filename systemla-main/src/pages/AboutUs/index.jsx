import Header from '../../components/Header';
import styles from './AboutUs.module.css';

function AboutUs() {
    return (
        <>
            <Header />
            <p className={styles.textAbout}>
                Phoenix Eats é uma plataforma moderna de gastronomia que conecta pessoas apaixonadas por boa comida a restaurantes, chefs independentes e experiências culinárias exclusivas. 
                Aqui você encontra cardápios variados, desde pratos tradicionais até criações inovadoras, todos 
                preparados com ingredientes selecionados. Seja para pedir delivery, reservar uma refeição especial 
                ou descobrir novos sabores, o Phoenix Eats é o lugar certo para explorar a culinária de forma prática 
                e confiável.
            </p>
        </>
    )
}

export default AboutUs