import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
	const [resultadoBusqueda, setResultadoBusqueda] = useState({
		nombre: "",
		categoria: "",
	});
	const [recetas, setRecetas] = useState([]);
	const [consultar, setConsultar] = useState(false);

	const { nombre, categoria } = resultadoBusqueda;

	useEffect(() => {
		if (consultar) {
			const obtenerRecetas = async () => {
				const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
				const resultado = await axios.get(url);
				//console.log(resultado.data.drinks);
				setRecetas(resultado.data.drinks);
			};
			obtenerRecetas();
		}
	}, [resultadoBusqueda]);

	return (
		<RecetasContext.Provider
			value={{ recetas, setResultadoBusqueda, setConsultar }}
		>
			{props.children}
		</RecetasContext.Provider>
	);
};

export default RecetasProvider;
