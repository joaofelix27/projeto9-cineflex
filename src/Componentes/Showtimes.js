export default function Showtimes({ days }) {
    console.log(days)
    return (
        <section className="showtimePage">
            {
                days.map((day, index) =>
                    <div className="containerShowtimes">
                        <div className="datas">
                            <h1>{`${day.weekday} - ${day.date}`}</h1>
                            <div className="containerHorarios">
                                {day.showtimes.map((showtime, index) =>
                                    <div className="horarios">
                                        {showtime.name}
                                    </div>
                                )
                                }
                            </div>
                        </div>
                    </div>
                )
            }

       </section>
    )
}