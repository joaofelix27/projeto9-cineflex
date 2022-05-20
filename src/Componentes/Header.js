export default function Header({text}) {
    return (
        <>
            <header>
                CINEFLEX
            </header>
            <section className="escolherFilme">
                {text}
            </section>
        </>
    )
}