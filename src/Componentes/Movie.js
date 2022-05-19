import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from './Header'
import Showtimes from './Showtimes'
import Footer from './Footer'

export default function Movie() {
  const { idMovie } = useParams();

  const [movie, setMovie] = useState({});
  const [carregando, setCarregando] = useState(true);
  
  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`
    );

    requisicao.then((resposta) => {
      setMovie(resposta.data);
      setCarregando(false);
    });
    
  }, []);
  return (
    <>
      <Header />
       {carregando ==false ? <Showtimes days={movie.days} /> : "Carregando"}
      <Footer title={movie.title} posterURL={movie.posterURL} />
    </>
  )
}