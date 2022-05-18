export default function Footer({ title, posterURL }) {
    return (
        <footer >
            <div className="imageFooter">
                <img src={posterURL} />
            </div>
            <h1>{title}</h1>
        </footer>
    )
}