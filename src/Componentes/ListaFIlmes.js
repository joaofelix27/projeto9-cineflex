import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Header from './Header'

export default function ListaFilmes() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        requisicao.then(resposta => {
            setMovies(resposta.data);
        });
    }, []);
    console.log(movies);
    return (
        <>
            <Header/>
            <section className='movieContainer'>
                {
                    movies.map((movie, index) =>
                        <Link to={`/sessoes/${movie.id}`}>
                            <div className='movie'>
                                <img className='moviePicture' src={movie.posterURL} />
                            </div>
                        </Link>
                    )
                }
            </section>

        </>
    )
}