export default function Showtimes({ days }) {
    console.log(days)
    const data = { ...days }
    return (
        <>
            <div className="containerShowtimes">
                <div className="datas">
                    <h1>Quinta-feira - 24/06/2021</h1>
                    <div className="containerHorarios">
                        <div className="horarios">
                            15:00
                        </div>
                        <div className="horarios">
                            19:00
                        </div>
                    </div>
                </div>
            </div>
            {/* <section>
        {
                days.map((value, index) =>
                        <div key={index} className="containerShowtimes">
                            <h1>EAE</h1>
                        </div>
                )
            }

        </section> */}

        </>
    )
}