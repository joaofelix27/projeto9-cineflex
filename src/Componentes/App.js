import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Movie from './Movie'
import MoviesList from "./MoviesList";
import Seats from "./Seats";
import Sucesso from "./Sucesso";
export default function App (){
	const [carregando2, setCarregando2] = useState(true);
	const [order,setOrder]=useState([])
    return (
        <BrowserRouter>
			{/* Tudo que tiver uma rota entre Routes */}
			<Routes>
				{/* Cada rota tem que estar em Route */}
				<Route path="/" element={<MoviesList/>} />
				<Route path="/sessoes/:idMovie" element={<Movie />}/>
				<Route path="/assentos/:idSeats" element={ <Seats order={order} setOrder={setOrder} carregando2={carregando2} setCarregando2={setCarregando2} />} />
				<Route path="/sucesso" element={ carregando2==true ? "carregando" :<Sucesso setOrder={setOrder} order={order} />}/>
			</Routes>
		</BrowserRouter>
    )
    
}