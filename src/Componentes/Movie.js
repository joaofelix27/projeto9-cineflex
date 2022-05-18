import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from './Header'

export default function Filme (){
    const { idMovie } = useParams();

    const [movie, setMovie] = useState({});
  
    useEffect(() => {
      const requisicao = axios.get(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/tastecamp/receitas/${idMovie}`
      );
  
      requisicao.then((res) => {
        setMovie(res.data);
      });
    }, []);
    return (
      <Header/>
    )
}