import React, { useEffect, useState } from 'react';

function ListaDeRepositorios() {
    const [repositorio, setRepositorio] = useState([]);

  useEffect(() => {
    async function carregaRepositorios () {
      const resposta = await fetch('https://api.github.com/users/julio-cesar96/repos');
      const repositorios = await resposta.json();

      setRepositorio(repositorios);
    }
    carregaRepositorios();
  }, []);
 
  return (
    <>
      <ul>
        {repositorio.map(repositiorio => (
            <li key={repositorio.id}>
                {repositiorio.name}
            </li>
        ))}
      </ul>
    </>
  );
}
export default ListaDeRepositorios;