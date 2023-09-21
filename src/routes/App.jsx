import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@Components";
import { Arena, Clones, Trans, Unite } from "@Pages";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="arena" element={<Arena />} />
					<Route path="clones" element={<Clones />} />
					<Route path="trascender" element={<Trans />} />
					<Route path="unite" element={<Unite />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
