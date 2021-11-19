import Formaulario from "./components/Formaulario";
import ListaRecetas from "./components/ListaRecetas";
import Header from "./components/Header";
import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContext";

function App() {
	return (
		<CategoriasProvider>
			<RecetasProvider>
				<Header />
				<div className="container mt-5">
					<div className="row">
						<Formaulario />
					</div>
					<ListaRecetas />
				</div>
			</RecetasProvider>
		</CategoriasProvider>
	);
}

export default App;
