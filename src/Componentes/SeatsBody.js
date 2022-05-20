import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function validar(seats1) {
    const arrayID = []
    const arrayName = []
    console.log(seats1)
    for (let i = 0; i < seats1.length; i++) {
        if (seats1[i].isAvailable == `selecionado1`) {
            arrayID.push(seats1[i].id)
            arrayName.push(seats1[i].name)
        }
    }
    console.log(arrayID)
    console.log(arrayName)
    const dados = {
        ids: arrayID,
        name: "ernesto",
        cpf: "07161334403"
    }
    const requisicao = axios.post(
        `https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, dados
    );
    requisicao.then((resposta) => {
        console.log(resposta)
    });


}
export default function SeatsBody({ seats }) {
    const [selecionado, setSelecionado] = useState(false)
    const [seats1, setSeats1] = useState(seats.seats)
    function zap(cardIndex) {
        let seatsStatus = [...seats1]
        if (seatsStatus[cardIndex].isAvailable == true) {
            alert("Esse assento não está disponível")
            return;
        }
        if (seatsStatus[cardIndex].isAvailable == `selecionado1`) {
            seatsStatus[cardIndex].isAvailable = false
        } else { seatsStatus[cardIndex].isAvailable = `selecionado1` }
        setSeats1([...seatsStatus])
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
                    <div className="false1"></div>
                    <h1>Disponível</h1>
                </div>
                <div>
                    <div className="true1"></div>
                    <h1>Indisponível</h1>
                </div>

            </div>
            <div className="containerInputs">
                <div>
                    <label htmlFor="campoNome">Nome do comprador:</label>
                    <input type="text" id="campoNome" placeholder="Digite seu nome..." />
                    <label htmlFor="campoCPF">CPF do comprador:</label>
                    <input type="text" id="campoCPF" placeholder="Digite seu CPF..." />
                </div>
                <Link to={`/sucesso`}>
                    <button className="bookSeats" onClick={() => validar(seats1)} type="submit">Reservar Assentos</button>
                </Link>
            </div>
        </div>
    )

}