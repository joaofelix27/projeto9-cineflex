import { useState, useEffect } from "react";

function validar(seats1) {
    const array = []
    console.log(seats1)
    for (let i = 0; i < seats1.length; i++) {
        if (seats1[i].isAvailable == `selecionado1`) {
            array.push(seats1[i].id)
        }
    }
    return array
}
 function reservar (event) {
     
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
            <form onSubmit={() =>validar(seats1)}>
                <input type="email"  />
                <input type="password"  />
                <button type="submit">Reservar Assentos</button>
            </form>
        </div>
    )

}