import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from './Header'
import SeatsBody from "./SeatsBody";
import Footer from './Footer'
import Sucesso from "./Sucesso";

export default function Seats ({setCarregando2,carregando2,setOrder,order}){
    const { idSeats } = useParams();

  const [seats, setSeats] = useState({});
  const [carregando1, setCarregando1] = useState(true);
  const [arrayID, setArrayID] = useState([]);
  const [arrayName, setArrayName] = useState([]);
  console.log(arrayID)
  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSeats}/seats`);

    requisicao.then((resposta) => {
      setSeats(resposta.data);
      setCarregando1(false);
      setOrder({
        movie: resposta.data.movie.title,
        session: `${resposta.data.day.date} ${resposta.data.name}`,
    });
    });
    
  }, []);
  return (
    <>
      <Header text="Selecione o(s) assento(s)"/>
      {carregando1 ==false ?   <SeatsBody setOrder={setOrder} order={order} setCarregando2={setCarregando2} setArrayID={setArrayID} setArrayName={setArrayName} seats={seats}/> :false }
      {carregando1 ==false ? <Footer title={seats.movie.title} day={seats.day.weekday} date={seats.name} posterURL={seats.movie.posterURL} /> : "Carregando"}
    </>
  )
}