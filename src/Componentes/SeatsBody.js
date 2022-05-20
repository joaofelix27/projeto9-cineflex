import { useState, useEffect } from "react";
export default function SeatsBody({ seats }) {
    const [selecionado,setSelecionado]=useState(false)
    return (
        <div className="seatsContainer">
            {seats.seats.map((seat, index) =>
                <div onClick={() => setSelecionado("selecionado")} className={seat.isAvailable==true ? `true`:`${selecionado}`}>
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

        </div>
    )

}