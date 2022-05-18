import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ListaFilmes () {
    const [filmes, setFilmes] = useState([]);

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		requisicao.then(resposta => {
			setItems(resposta.data.items);
		});
	}, []);
    return(
        <>
        <header>
        CINEFLEX
        </header>
        <section className="escolherFilme">
            Selecione o filme
        </section>
        </>
    )
}