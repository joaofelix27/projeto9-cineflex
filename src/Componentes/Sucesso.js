import Header from "./Header";

export default function Sucesso({Name,Carregando,seats}) {
    console.log("eae")
    if (Carregando==false){
        console.log({Name})
    }
    
    return (
        <>
            {Carregando==true ? "Ainda não" : 
            <section className="containerSucess">
            <div className="sucess">
                <h1>Filme e sessão</h1>
                <h1>{seats.movie.title}</h1>
                <h1>{`${seats.day.weekday} - ${seats.name}`} </h1>

            </div>
            <div className="sucess">
                <h1>Ingressos</h1>
                {Name.map (value => 
                <h1>{`Assento ${value}`}</h1>
                    )}
            </div>
            <div className="sucess">
                <h1>Comprador</h1>
            </div>
            <div className="returnContainer">
                <button className="return">
                    Voltar para Home
                </button>
            </div>

        </section> }
            

        </>
    )
}