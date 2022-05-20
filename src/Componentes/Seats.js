import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Header from './Header'
import SeatsBody from "./SeatsBody";
import Footer from './Footer'
import Sucesso from "./Sucesso";

export default function Seats (){
    const { idSeats } = useParams();

  const [seats, setSeats] = useState({});
  const [carregando1, setCarregando1] = useState(true);
  const [carregando2, setCarregando2] = useState(true);
  const [arrayID, setArrayID] = useState([]);
  const [arrayName, setArrayName] = useState([]);
  console.log(carregando2)
  console.log(arrayID)
  useEffect(() => {
    const requisicao = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSeats}/seats`);

    requisicao.then((resposta) => {
      setSeats(resposta.data);
      setCarregando1(false);
    });
    
  }, []);
  return (
    <>
      <Header text="Selecione o(s) assento(s)"/>
      {carregando1 ==true ?   "Carregando": carregando2==true ? <SeatsBody setCarregando2={setCarregando2} setArrayID={setArrayID} setArrayName={setArrayName} seats={seats}/> : <Sucesso Carregando={carregando2} seats={seats} ID={arrayID} Name={arrayName}/>}
      {carregando1 ==false ? <Footer title={seats.movie.title} day={seats.day.weekday} date={seats.name} posterURL={seats.movie.posterURL} /> : "Carregando"}
    </>
  )
}