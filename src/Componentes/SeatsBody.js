import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
let validador
export default function SeatsBody({ seats, setArrayName, setArrayID, setCarregando2, setOrder, order }) {
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    console.log(cpf)
    const [seats1, setSeats1] = useState(seats.seats)
    function zap(cardIndex) {
        let seatsStatus = [...seats1]
        if (seatsStatus[cardIndex].isAvailable == false) {
            alert("Esse assento não está disponível")
            return;
        }
        if (seatsStatus[cardIndex].isAvailable == `selecionado1`) {
            seatsStatus[cardIndex].isAvailable = true
        } else { seatsStatus[cardIndex].isAvailable = `selecionado1` }
        setSeats1([...seatsStatus])
    }
    function validar(seats1) {
        const auxID = []
        const auxName = []
        validador=1
        for (let i = 0; i < seats1.length; i++) {
            if (seats1[i].isAvailable == `selecionado1`) {
                auxID.push(seats1[i].id)
                auxName.push(seats1[i].name)
            }
        }
        setArrayID(auxID)
        setArrayName(auxName)
        setOrder({ ...order, seats: auxName ,nome:nome,cpf:cpf });
        const dados = {
            ids: auxID,
            name: `${nome}`,
            cpf: `${cpf}`
        }
         if (nome=="" || cpf=="" || cpf.length!==11){
            return;
        }
        console.log(dados)
        const requisicao = axios.post(
            `https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, dados
        );
        requisicao.then((resposta) => {
            console.log(resposta)
            setCarregando2(false)
        });
    }
    return (

        <div className="seatsContainer">
            {seats1.map((seat, index) =>
                <div onClick={() => zap(index)} className={seat.isAvailable == true ? `true` : seat.isAvailable == false ? `false` : `selecionado1`}>
                    {index + 1}
                </div>
            )}
            <div className="legenda">
                <div>
                    <div className="selecionado"></div>
                    <h1>Selecionado</h1>
                </div>
                <div>
                    <div className="true1"></div>
                    <h1>Disponível</h1>
                </div>
                <div>
                    <div className="false1"></div>
                    <h1>Indisponível</h1>
                </div>

            </div>
            <div className="containerInputs">
                <div>
                    <label htmlFor="campoNome">Nome do comprador:</label>
                    <input type="text" id="campoNome" placeholder="Digite seu nome..." onChange={e => setNome(e.target.value)} required />
                    <label htmlFor="campoCPF">CPF do comprador:</label>
                    <input type="number" id="campoCPF"  placeholder="Digite seu CPF..." onChange={e => setCpf(e.target.value)} required />
                </div>
                <Link to={validador ==1 ? `/sucesso` : `#`}>
                    <button className="bookSeats" onClick={() => validar(seats1)} type="submit"  >Reservar Assento(s)</button>
                </Link>
            </div>
        </div>
    )

}