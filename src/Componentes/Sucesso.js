import Header from "./Header";

export default function Sucesso() {
    return (
        <>
            <Header text="Pedido feito com sucesso!"></Header>
            <section className="containerSucess">
                <div className="sucess">
                    <h1>Filme e sessão</h1>
                </div>
                <div className="sucess">
                    <h1>Ingressos</h1>
                </div>
                <div className="sucess">
                    <h1>Comprador</h1>
                </div>
                <div className="returnContainer">
                    <button className="return">
                        Voltar para Home
                    </button>
                </div>

            </section>

        </>
    )
}