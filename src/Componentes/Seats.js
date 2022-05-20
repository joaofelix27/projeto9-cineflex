import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from './Header'
import SeatsBody from "./SeatsBody";
import Footer from './Footer'

export default function Seats (){
    const { idSeats } = useParams();
    console.log(idSeats)

  const [seats, setSeats] = useState({});
  const [carregando1, setCarregando1] = useState(true);
  
  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSeats}/seats`);

    requisicao.then((resposta) => {
      setSeats(resposta.data);
      setCarregando1(false);
    });
    
  }, []);
  console.log(seats)

  return (
    <>
      <Header text="Selecione o(s) assento(s)"/>
      {carregando1 ==false ? <SeatsBody seats={seats}/> : "Carregando"}
      {carregando1 ==false ? <Footer title={seats.movie.title} day={seats.day.weekday} date={seats.name} posterURL={seats.movie.posterURL} /> : "Carregando"}
    </>
  )
}