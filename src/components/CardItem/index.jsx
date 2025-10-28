// Exemplo de uso da funcionalidade criada acima para alimentar um componente (Ex: card que tem a opção de adicionar ou remover unidades de um dado produto)
import useContadorDePedidos from "../../hooks/useContadorDePedidos";
import styles from './CardItem.module.css';

function CardItem({nome, preco}) {
    const { quantidade, aumentar, diminuir } = useContadorDePedidos(1);

    return (
        <div className={styles.cardItem}>
            <p>{nome} - Preço p/ Unit: R$ {preco} </p>
            <p>Quantidade: {quantidade}</p>
            <button onClick={aumentar}>+</button>
            <button onClick={diminuir}>-</button>
            {quantidade > 0 && <p>Total: R${quantidade * preco}</p>}
        </div>
    )
}

export default CardItem;