import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ListaFilmes() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        requisicao.then(resposta => {
            setFilmes(resposta.data);
        });
    }, []);
    console.log(filmes);
    return (
        <>
            <header>
                CINEFLEX
            </header>
            <section className="escolherFilme">
                Selecione o filme
            </section>
            <section className='movieContainer'>
                {
                    filmes.map((value, index) =>
                        <div className='movie'>
                            <img className='moviePicture' src={value.posterURL} />
                        </div>
                    )
                }
            </section>

        </>
    )
}