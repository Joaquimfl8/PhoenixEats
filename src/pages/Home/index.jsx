import Header from "../../components/Header";
import styles from "./Home.module.css";
import { Link } from "react-router";

function Home() {
    const pizzas = [
        {
            title: "Pizza de Calabresa",
            description: "Deliciosa pizza de calabresa com borda recheada de catupiry, perfeita para compartilhar com amigos e família.",
            image: "https://padariasantacruz.loji.com.br/storage/uploads/Z5MSvFbZnkrkaGvjjFLagfnwn7g1xV0QFsGJO1Hz.jpeg"
        },
        {
            title: "Refrigerante Coca-Cola",
            description: "Acompanhamento ideal para sua pizza, a Coca-Cola geladinha é a escolha perfeita para refrescar seu paladar.",
            image: "https://changlee.com.br/wp-content/uploads/2016/09/coca-cola.jpg"
        },
        {
            title: "Batata Frita",
            description: "Crocante por fora e macia por dentro, nossa batata frita é o acompanhamento perfeito para qualquer refeição.",
            image: "https://swiftbr.vteximg.com.br/arquivos/ids/201377-768-768/622291-batata-airfryer-extra-croc-mccain_3.jpg?v=638657204471230000"
        }
    ];

    return (
        <>
            <Header />
            <div className={styles.cardContainer}>
                {pizzas.map((pizza, index) => (
                    <div
                        className={styles.textAbout}
                        key={index}
                        style={{ backgroundImage: `url(${pizza.image})` }}
                    >
                        <div className="card">
                            <div className={styles.card_content}>
                                <h2>{pizza.title}</h2>
                                <div className={styles.Cards}>
                                    <p>{pizza.description}</p>
                                    <Link to="/Products" style={{ color: "white", border: "solid white 2px", borderRadius: "5px", padding: "5px 10px", textDecoration: "none" }}>Peça Agora</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
