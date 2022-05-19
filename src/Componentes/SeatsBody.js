export default function SeatsBody({ seats }) {

    return (
        <div className="seatsContainer">
            {seats.seats.map((seat, index) =>
                <div className={`${seat.isAvailable}`}>
                    {index + 1}
                </div>
            )}
            <div className="legenda">
                <div>
                    Selecionado
                </div>
                <div className="false">
                    Disponível
                </div>
                <div className="true">
                    Indisponível
                </div>
            </div>

        </div>
    )

}