import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Header from './Header'

export default function MoviesList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        requisicao.then(resposta => {
            setMovies(resposta.data);
        });
    }, []);
    return (
        <>
            <Header text="Selecione o filme"/>
            <section className='movieContainer'>
                {
                    movies.map((movie, index) =>
                        <Link to={`/sessoes/${movie.id}`}>
                            <div keỳ={index} className='movie'>
                                <img className='moviePicture' src={movie.posterURL} />
                            </div>
                        </Link>
                    )
                }
            </section>

        </>
    )
}