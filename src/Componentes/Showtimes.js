export default function Showtimes({ movie }) {
    console.log(movie.days[0])
    const data = {... movie}
    return (
        <>
        {/* <section>
        {
                data.map((value, index) =>
                        <div key={index} className="containerShowtimes">
                            <h1>EAE</h1>
                        </div>
                )
            }
        </section>
        */}
        </>
    )
}