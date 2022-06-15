import React from "react";
import book from "./index.jpg";
import "./LandingPage.css";

const LandingPage = ({item}) => {
	return(
			<div class="d-flex flex-row">
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
					<img src={book}/>
				</div>
			</div>
	);					
}

export default LandingPage;