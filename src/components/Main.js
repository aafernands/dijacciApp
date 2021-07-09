import "../App.css";
import Comp1 from "../components/Comp1.js";
import Comp2 from "../components/Comp2.js";

function Main() {
	return (
		<div className="App">
			<header className="bodyContainer">
				<Comp1 />
				<Comp2 />
				<p className="WelcomeTex">
					Welcome <code>friend</code> to our website.
				</p>
				<a
					className="App-link"
					href="https://instagram.com/aafernands"
					target="_blank"
					rel="noopener noreferrer"
				>
					Login
				</a>
			</header>
		</div>
	);
}

export default Main;
