import Main from "./components/Main.js";
import HeaderBar from "./components/HeaderBar.js";
import Footer from "./components/Footer.js";
import MenuBar from "./components/MenuBar.js";

import "./App.css";

function App() {
	return (
		<div>
			<HeaderBar />
			<MenuBar />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
