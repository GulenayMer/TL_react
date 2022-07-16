import React from "react";
import intro from "./images/intro.png";
import "./Intro.css";

const Intro = ({item}) => {
	return(
			<div class="d-flex flex-row" style={{background: "#457B9D"}}>
				<div className="main">
					<h2>{item.title}</h2>
					<p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed consequat accumsan, 
					sapien massa quisque aliquet ipsum et. In etiam iaculis libero, porttitor quam neque sit. Quisque sed 
					commodo quam nibh augue ante sed tortor. Quam pharetra molestie quis suspendisse
					ut. Tortor dictum urna, nisi, vitae leo varius elementum amet. 
					Nulla augue ultricies bibendum mauris ullamcorper bibendum. Feugiat enim felis, arcu mattis. 
					</p>
				</div>
				<div className="img-main">
					<img src={intro} alt="sth"/>
				</div>
			</div>
	);					
}

export default Intro;