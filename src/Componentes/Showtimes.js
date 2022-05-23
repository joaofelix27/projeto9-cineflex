import { Link } from "react-router-dom";
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
                                <Link  style={{textDecoration: 'none'}} to={`/assentos/${showtime.id}`}>
                                    <div className="horarios">
                                        {showtime.name}
                                    </div>
                                </Link>
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