import React from "react";
import context from "react-bootstrap/esm/AccordionContext";
import "./Footer.css"

const btnStyle = {
	border: "2px solid #000",
 	background: "#fff",
	padding: "10px",
	margin: "10px",
	text: "center",
};

const iStyle = {
	border: "2px solid #000",
 	background: "#fff",
	padding: "10px",
	margin: "10px",
	display: "inline-block",
	float: "right",
};

const Footer = () => {
	return(
		<div className="row footer">			
			<div className="col-6">
				<button style={btnStyle}>FQA</button>
				<button style={btnStyle}>Help</button>
				<button style={btnStyle}>Library Opening Times</button>
			</div>
			<div className="col-6">
			 	<i className="bi bi-youtube" style={iStyle}></i>
			 	<i className="bi bi-facebook" style={iStyle}></i>
			 	<i className="bi bi-instagram" style={iStyle}></i>
			 </div>
		</div>
	);
}

export default Footer;