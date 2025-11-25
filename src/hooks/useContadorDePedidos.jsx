// Exemplo de Hook no React (funcionalidade de adicionar quantidade de pedidos)
import { useState } from 'react';

function useContadorDePedidos(quantidadeInicial = 1) {
    const [quantidade, setContador] = useState(quantidadeInicial);

    const aumentar = () => {
        setContador(prevContador => prevContador + 1);
    };

    const diminuir = () => {
        setContador(prevContador => (prevContador > 0 ? prevContador - 1 : 0));
    }

    const remover = () => {
        setContador( prevContador => (prevContador = 0))
    }

    return { quantidade, aumentar, diminuir, remover}
}

export default useContadorDePedidos;

