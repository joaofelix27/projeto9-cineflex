import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from './Movie'

import ListaFilmes from "./ListaFIlmes";
export default function App (){
    return (
        <BrowserRouter>
			{/* Tudo que tiver uma rota entre Routes */}
			<Routes>
				{/* Cada rota tem que estar em Route */}
				<Route path="/" element={<ListaFilmes/>} />
				<Route path="/sessoes/:idMovie" element={<Movie />}/>
			</Routes>
		</BrowserRouter>
    )
    
}