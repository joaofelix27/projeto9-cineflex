import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from './Header'
import Footer from './Footer'

export default function Filme() {
  const { idMovie } = useParams();

  const [movie, setMovie] = useState({});
  
  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`
    );

    requisicao.then((resposta) => {
      setMovie(resposta.data);
    });
    
  }, []);
  return (
    <>
      <Header />
      <Footer title={movie.title} posterURL={movie.posterURL} />
    </>
  )
}