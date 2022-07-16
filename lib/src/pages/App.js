import React from "react";
import NavBar from "../navigation/NavBar";
import Intro from "./Intro";
import Kaart from "./Kaart";
import Browse from "./Browse";
import Footer from "./Footer";
import SearchBar from "./SearchBar";

const item = {
	title: "Welcome to new and improved VOBB Website",
}

const sbStyle = {
	margin: "30px 30px",
};

const App = () => {
	return (
		<div className="container">
			<div style={sbStyle}>
				<NavBar/>
			</div>
			<div style={sbStyle}>
				<SearchBar/>
			</div>
			<div>
				<Intro item={item}/>
			</div>
			<div style={sbStyle}>
				<Browse/>
			</div>
			<div style={sbStyle}>
				<Kaart/>
			</div>
			<div style={sbStyle}>
				<Footer/>
			</div>
		</div>
	);
}

export default App;