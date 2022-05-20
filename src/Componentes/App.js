import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from './Movie'
import MoviesList from "./MoviesList";
import Seats from "./Seats";
import Sucesso from "./Sucesso";
export default function App (){
    return (
        <BrowserRouter>
			{/* Tudo que tiver uma rota entre Routes */}
			<Routes>
				{/* Cada rota tem que estar em Route */}
				<Route path="/" element={<MoviesList/>} />
				<Route path="/sessoes/:idMovie" element={<Movie />}/>
				<Route path="/assentos/:idSeats" element={<Seats />}/>
				<Route path="/sucesso" element={<Sucesso />}/>
			</Routes>
		</BrowserRouter>
    )
    
}