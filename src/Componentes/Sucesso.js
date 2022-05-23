import Header from "./Header";
import { Link } from "react-router-dom";

export default function Sucesso({ Name, Carregando, order, setOrder }) {
    let cpf = order.cpf.toString()
     let cpfFormatado = cpf.slice(0, 3) + "." +
        cpf.slice(3, 6) + "." +
        cpf.slice(6, 9) + "-" +
        cpf.slice(9, 11)
    return (
        <>
            <Header text={<h1 class="textSucesso">Pedido feito com sucesso!</h1>} />
            {Carregando == true ? "Ainda não" :
                <section className="containerSucess">
                    <div className="sucess">
                        <h1>Filme e sessão</h1>
                        <h2>{order.movie}</h2>
                        <h2>{order.session} </h2>

                    </div>
                    <div className="sucess">
                        <h1>Ingressos</h1>
                        {order.seats.map((value) => (
                            <h2>{`Assento ${value}`}</h2>
                        ))}
                    </div>
                    <div className="sucess">
                        <h1>Comprador</h1>
                        <h2>{`Nome: ${order.nome}`}</h2>
                        <h2>{`CPF: ${cpfFormatado}`}</h2>
                    </div>
                    <div className="returnContainer">
                        <Link to="/">

                            <button onClick={() => setOrder([])} className="return">
                                Voltar para Home
                            </button>
                        </Link>
                    </div>

                </section>}


        </>
    )
}