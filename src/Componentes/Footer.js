export default function Footer({ title, posterURL, day, date }) {
    return (
        <footer >
            <div className="imageFooter">
                <img src={posterURL} />
            </div>
            {day == undefined ?
                <h1> {`${title}`} </h1> :
                <div>
                <h1>{`${title}`}</h1>
                <h1>{`${day} - ${date}`} </h1>
                </div>
            }

        </footer>
    )
}